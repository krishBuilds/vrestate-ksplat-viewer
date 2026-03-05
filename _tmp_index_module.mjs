
    import * as THREE from 'three';
    import * as GaussianSplats3D from 'https://cdn.jsdelivr.net/npm/@mkkellogg/gaussian-splats-3d@0.4.7/build/gaussian-splats-3d.module.js';
    import { OrbitControls } from 'https://cdn.jsdelivr.net/npm/three@0.165.0/examples/jsm/controls/OrbitControls.js';
    import nipplejs from 'https://cdn.jsdelivr.net/npm/nipplejs@0.10.2/+esm';

    const startupAssetPath = './assets/Splat/externalview.ksplat';
    const availableScenes = Object.freeze([
      {
        id: 'externalview',
        label: 'External View',
        path: './assets/Splat/externalview.ksplat'
      },
      {
        id: 'frontyard',
        label: 'Front Yard',
        path: './assets/Splat/FrontYard.ksplat'
      },
      {
        id: 'interior',
        label: 'Interior',
        path: './assets/Splat/Interior.ksplat'
      },
      {
        id: 'backyard',
        label: 'Back Yard',
        path: './assets/Splat/BackYard.ksplat'
      }
    ]);

    const loading = document.getElementById('loading-overlay');
    const statusPill = document.getElementById('status-pill');
    const viewerHost = document.getElementById('viewer-container');
    const toggleButton = document.getElementById('toggle-button');
    const toggleTooltip = document.getElementById('toggle-tooltip');
    const toggleIcon = document.getElementById('toggle-icon');
    const fullScreenButton = document.getElementById('fullscreen-button');
    const fullScreenTooltip = document.getElementById('fullscreen-tooltip');
    const fullScreenIcon = document.getElementById('fullscreen-icon');
    const sceneSelect = document.getElementById('scene-select');
    const saveStartButton = document.getElementById('save-start-button');
    const movePad = document.getElementById('move-pad');
    const sceneThumbs = document.getElementById('scene-thumbs');
    const sceneThumbnailMap = new Map();
    const customStartStorageKey = 'vrestates.customStartPresets';
    const userStartPresets = loadUserStartPresets();

    let viewer;
    let currentObjectUrl = null;
    let walkControls = null;
    let controlCamera = null;
    let activeLoadToken = 0;
    let viewerMount = null;
    let moveState = {
      forward: false,
      backward: false,
      left: false,
      right: false,
      up: false,
      down: false,
      sprint: false
    };
    let moveVelocity = new THREE.Vector3();
    let moveDirection = new THREE.Vector3();
    const moveForwardVector = new THREE.Vector3();
    const moveRightVector = new THREE.Vector3();
    let analogMoveX = 0;
    let analogMoveZ = 0;
    let previousFrameTime = performance.now();
    let pointerLocked = false;
    let movementLoopId = null;
    let movementClock = null;
    let controlElement = null;
    const computedSceneCenterPresets = new Map();
    const walkSpeedSettings = {
      walkVelocity: 1.0,
      damping: 10.0,
      verticalSpeed: 3.0,
      sprintMultiplier: 2.0
    };
    const joystickMoveScale = 0.03335;
    const sceneCameraPresets = Object.freeze({
      externalview: {
        position: [1.13847, 0.99612, -2.29371],
        lookAt: [0.30026, -0.07211, -0.74364]
      },
      // Fallbacks for scenes that are not listed directly in the source jM array.
      // These are pulled from transition targetPosition values in the live site's eE metadata.
      frontyard: {
        position: [5.88715, 0.94757, -4.84869],
        lookAt: [5.88715, 0.94757, -5.84869]
      },
      interior: {
        position: [-19.53065, 1.0, 117.66714],
        lookAt: [-19.53065, 1.0, 116.66714]
      },
      backyard: {
        position: [4.74418, 0.99469, -106.36395],
        lookAt: [4.74418, 0.99469, -107.36395]
      }
    });

    const transitionStartMap = Object.freeze({
      FrontToInside: {
        from: 'frontyard',
        to: 'interior',
        position: [-19.53065, 1.0, 117.66714],
        lookAt: [-19.53065, 1.0, 116.66714]
      },
      InsideToFront: {
        from: 'interior',
        to: 'frontyard',
        position: [5.88715, 0.94757, -4.84869],
        lookAt: [5.88715, 0.94757, -5.84869]
      },
      FrontToBack: {
        from: 'frontyard',
        to: 'backyard',
        position: [4.74418, 0.99469, -106.36395],
        lookAt: [4.74418, 0.99469, -107.36395]
      },
      BackToFront: {
        from: 'backyard',
        to: 'frontyard',
        position: [2.93457, 0.94757, 2.424],
        lookAt: [2.93457, 0.94757, 1.424]
      },
      BackToInside: {
        from: 'backyard',
        to: 'interior',
        position: [-21.21988, 1.0, 110.5427],
        lookAt: [-21.21988, 1.0, 109.5427]
      },
      InsideToBack: {
        from: 'interior',
        to: 'backyard',
        position: [-6.28755, 0.99469, -114.5146],
        lookAt: [-6.28755, 0.99469, -115.5146]
      }
    });

    const transitionStartByScene = Object.freeze({
      frontyard: {
        interior: transitionStartMap.InsideToFront,
        backyard: transitionStartMap.BackToFront,
        fallback: transitionStartMap.InsideToFront
      },
      interior: {
        frontyard: transitionStartMap.FrontToInside,
        backyard: transitionStartMap.InsideToBack,
        fallback: transitionStartMap.FrontToInside
      },
      backyard: {
        frontyard: transitionStartMap.BackToFront,
        interior: transitionStartMap.InsideToBack,
        fallback: transitionStartMap.FrontToBack
      }
    });

    let lastSceneId = null;

    function getTransitionStartPreset(fromSceneId, toSceneId) {
      if (!toSceneId) {
        return null;
      }
      const destinationTransitions = transitionStartByScene[toSceneId];
      if (!destinationTransitions) {
        return null;
      }
      const selected = destinationTransitions[fromSceneId] || destinationTransitions.fallback;
      if (!selected) {
        return null;
      }
      return {
        position: selected.position,
        lookAt: selected.lookAt
      };
    }

    function applyScenePreset(camera, cameraPreset) {
      if (!camera || !cameraPreset) {
        return;
      }
      const [x, y, z] = cameraPreset.position;
      const [lx, ly, lz] = cameraPreset.lookAt;
      const cameraY = Number.isFinite(y) ? y : 0.3;
      camera.position.set(x, cameraY, z);
      camera.rotation.set(0, 0, 0);
      camera.lookAt(lx, ly, lz);
      if (controlCamera) {
        controlCamera.position.copy(camera.position);
      }
    }

    function buildCenterCameraPreset(bounds) {
      if (!bounds) {
        return null;
      }

      const width = bounds.max.x - bounds.min.x;
      const height = bounds.max.y - bounds.min.y;
      const depth = bounds.max.z - bounds.min.z;
      const radius = Math.max(width, height, depth, 1);
      const distance = Math.max(radius * 1.8, 1.0);
      const angleOffset = 0.6;

      return {
        position: [
          bounds.center.x + distance * Math.sin(angleOffset),
          bounds.center.y + distance * 0.25,
          bounds.center.z + distance * Math.cos(angleOffset)
        ],
        lookAt: [bounds.center.x, bounds.center.y, bounds.center.z]
      };
    }

    function getArrayBounds(values) {
      if (!values || values.length < 3) {
        return null;
      }
      let minX = Infinity;
      let minY = Infinity;
      let minZ = Infinity;
      let maxX = -Infinity;
      let maxY = -Infinity;
      let maxZ = -Infinity;

      for (let i = 0; i < values.length; i += 3) {
        const x = values[i];
        const y = values[i + 1];
        const z = values[i + 2];
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        minZ = Math.min(minZ, z);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
        maxZ = Math.max(maxZ, z);
      }

      if (![minX, minY, minZ, maxX, maxY, maxZ].every(Number.isFinite)) {
        return null;
      }

      return {
        min: new THREE.Vector3(minX, minY, minZ),
        max: new THREE.Vector3(maxX, maxY, maxZ),
        center: new THREE.Vector3(
          (minX + maxX) / 2,
          (minY + maxY) / 2,
          (minZ + maxZ) / 2
        )
      };
    }

    function getLoadedSceneBounds(viewerInstance) {
      if (!viewerInstance) {
        return null;
      }

      if (viewerInstance.splatMesh && typeof viewerInstance.splatMesh.computeBoundingBox === 'function') {
        try {
          const computedBounds = viewerInstance.splatMesh.computeBoundingBox(true);
          if (computedBounds?.min && computedBounds?.max &&
            [computedBounds.min.x, computedBounds.min.y, computedBounds.min.z, computedBounds.max.x, computedBounds.max.y, computedBounds.max.z].every(Number.isFinite)) {
            return {
              min: computedBounds.min.clone(),
              max: computedBounds.max.clone(),
              center: computedBounds.getCenter(new THREE.Vector3())
            };
          }
        } catch (error) {
          appendLog(`SplatMesh computeBoundingBox failed: ${error?.message || error}`, 'error');
        }
      }

      const tryMesh = (mesh) => {
        if (!mesh) {
          return null;
        }
        const positionAttribute = mesh?.geometry?.attributes?.position;
        const positions = positionAttribute?.array || mesh?.geometry?.getAttribute?.('position')?.array;
        if (positions) {
          const bounds = getArrayBounds(positions);
          if (bounds) {
            return bounds;
          }
        }

        if (mesh.geometry?.boundingBox) {
          const min = mesh.geometry.boundingBox.min;
          const max = mesh.geometry.boundingBox.max;
          if (min && max && [min.x, min.y, min.z, max.x, max.y, max.z].every(Number.isFinite)) {
            return {
              min: min.clone(),
              max: max.clone(),
              center: new THREE.Vector3(
                (min.x + max.x) / 2,
                (min.y + max.y) / 2,
                (min.z + max.z) / 2
              )
            };
          }
        }

        if (typeof mesh.geometry?.computeBoundingBox === 'function' && !mesh.geometry.boundingBox) {
          mesh.geometry.computeBoundingBox();
          if (mesh.geometry.boundingBox) {
            const min = mesh.geometry.boundingBox.min;
            const max = mesh.geometry.boundingBox.max;
            if (min && max && [min.x, min.y, min.z, max.x, max.y, max.z].every(Number.isFinite)) {
              return {
                min: min.clone(),
                max: max.clone(),
                center: new THREE.Vector3(
                  (min.x + max.x) / 2,
                  (min.y + max.y) / 2,
                  (min.z + max.z) / 2
                )
              };
            }
          }
        }

        if (mesh.geometry?.boundingSphere?.isSphere) {
          const center = mesh.geometry.boundingSphere.center;
          const radius = mesh.geometry.boundingSphere.radius;
          if (center && Number.isFinite(radius) && Number.isFinite(center.x) && Number.isFinite(center.y) && Number.isFinite(center.z)) {
            return {
              min: new THREE.Vector3(center.x - radius, center.y - radius, center.z - radius),
              max: new THREE.Vector3(center.x + radius, center.y + radius, center.z + radius),
              center: center.clone()
            };
          }
        }

        return null;
      };

      const meshesFromScenes = [];
      const directMeshes = [
        viewerInstance.splatMesh,
        viewerInstance.scene?.splatMesh,
        viewerInstance.mesh,
        viewerInstance.scene?.mesh
      ].filter(Boolean);
      for (const mesh of directMeshes) {
        const bounds = tryMesh(mesh);
        if (bounds) {
          return bounds;
        }
      }

      const addSceneMeshes = viewerInstance.splatMesh?.scenes;
      if (Array.isArray(addSceneMeshes)) {
        for (const scene of addSceneMeshes) {
          if (!scene || !scene.mesh) {
            continue;
          }
          meshesFromScenes.push(scene.mesh);
        }
      }

      const rootScenes = [
        viewerInstance.scene,
        viewerInstance.renderer?.scene
      ].filter(Boolean);
      for (const root of rootScenes) {
        if (typeof root.traverse === 'function') {
          root.traverse((obj) => {
            if (!obj?.geometry) {
              return;
            }
            const bounds = tryMesh(obj);
            if (bounds) {
              meshesFromScenes.push(obj);
            }
          });
        }
      }

      if (meshesFromScenes.length > 0) {
        for (const candidate of meshesFromScenes) {
          const bounds = tryMesh(candidate);
          if (bounds) {
            return bounds;
          }
        }
      }

      return null;
    }

    function centerCameraToScene(viewerInstance, sceneId, forcedPreset = null) {
      const camera = viewerInstance?.renderer?.camera || viewerInstance?.camera;
      if (!camera) {
        return;
      }

      if (!forcedPreset && sceneId === 'externalview' && sceneCameraPresets.externalview) {
        appendLog(`Using fixed preset for externalview: ${JSON.stringify(sceneCameraPresets.externalview)}`);
        applyScenePreset(camera, sceneCameraPresets.externalview);
        return;
      }

      if (forcedPreset) {
        applyScenePreset(camera, forcedPreset);
        return;
      }

      const cached = sceneId ? computedSceneCenterPresets.get(sceneId) : null;
      if (cached) {
        appendLog(`Using cached center start for ${sceneId}`);
        applyScenePreset(camera, cached);
        return;
      }

      const bounds = getLoadedSceneBounds(viewerInstance);
      if (!bounds) {
        if (sceneId) {
          appendLog(`Waiting for scene bounds to compute center (${sceneId})`);
        }
        return;
      }

      const computedPreset = buildCenterCameraPreset(bounds);
      if (computedPreset && sceneId) {
        computedSceneCenterPresets.set(sceneId, computedPreset);
        appendLog(`Computed center start for ${sceneId}: ${JSON.stringify(computedPreset)}`);
      }

      if (computedPreset) {
        applyScenePreset(camera, computedPreset);
        return;
      }

      if (controlCamera) {
        controlCamera.position.copy(camera.position);
      }
    }

    function scheduleSceneCenter(viewerInstance, sceneId, forcedPreset, remainingAttempts = 30) {
      const apply = () => {
        centerCameraToScene(viewerInstance, sceneId, forcedPreset);
        const isExternal = sceneId === 'externalview';
        if (remainingAttempts > 0 && !isExternal && !computedSceneCenterPresets.has(sceneId) && !forcedPreset) {
          requestAnimationFrame(() => {
            scheduleSceneCenter(viewerInstance, sceneId, forcedPreset, remainingAttempts - 1);
          });
        } else if (!isExternal && remainingAttempts <= 0 && !computedSceneCenterPresets.has(sceneId) && !forcedPreset) {
          appendLog(`Center unavailable for ${sceneId || 'unknown'} after retries.`);
        }
      };
      requestAnimationFrame(apply);
    }

    function appendLog(message, level = 'info') {
      if (level === 'error') {
        console.error(`[Viewer] ${message}`);
        return;
      }
      console.log(`[Viewer] ${message}`);
    }

    function normalizeSceneId(rawId) {
      return `${rawId || ''}`.toLowerCase().replace(/[^a-z0-9]/g, '');
    }

    function setActiveSceneThumb(sceneId) {
      if (!sceneThumbs) {
        return;
      }
      const target = normalizeSceneId(sceneId);
      sceneThumbnailMap.forEach((entry) => {
        entry.button.classList.toggle('active', entry.sceneId === target);
      });
    }

    function captureCurrentSceneThumbnail(rawSceneId) {
      const sceneId = normalizeSceneId(rawSceneId || getSceneIdFromPath(lastSceneId) || '');
      const entry = sceneThumbnailMap.get(sceneId);
      const canvas = viewer?.renderer?.domElement || viewer?.domElement?.querySelector('canvas');
      if (!entry || !canvas || !(canvas instanceof HTMLCanvasElement)) {
        return;
      }
      try {
        entry.image.src = canvas.toDataURL('image/jpeg', 0.75);
      } catch (_error) {
        appendLog('Failed to capture scene thumbnail (canvas read blocked).', 'error');
      }
    }

    function buildSceneThumbnails() {
      if (!sceneThumbs || !availableScenes.length) {
        return;
      }

      sceneThumbs.innerHTML = '';
      sceneThumbnailMap.clear();
      availableScenes.forEach((scene) => {
        const sceneId = normalizeSceneId(scene.id);
        const button = document.createElement('button');
        button.type = 'button';
        button.className = 'scene-thumb-item';
        button.dataset.sceneId = sceneId;
        button.setAttribute('aria-label', scene.label);

        const image = document.createElement('img');
        image.className = 'scene-thumb-image';
        image.src = '';
        image.alt = `${scene.label} initial shot`;
        image.loading = 'lazy';

        const label = document.createElement('div');
        label.className = 'scene-thumb-label';
        label.textContent = scene.label;

        button.appendChild(image);
        button.appendChild(label);
        button.addEventListener('click', () => {
          sceneSelect.value = scene.path;
          loadSplat(resolveAssetPath(scene.path), undefined);
        });

        sceneThumbs.appendChild(button);
        sceneThumbnailMap.set(sceneId, { button, image, sceneId });
      });
      setActiveSceneThumb(getSceneIdFromPath(sceneSelect.value) || 'externalview');
    }

    function initializeSceneDropdown() {
      sceneSelect.innerHTML = '';
      availableScenes.forEach((scene) => {
        const option = document.createElement('option');
        option.value = scene.path;
        option.textContent = scene.label;
        sceneSelect.appendChild(option);
      });

      const params = new URLSearchParams(window.location.search);
      const requested = params.get('scene') || params.get('asset');
      const resolvedPath = availableScenes.find((scene) => scene.id === requested || scene.path === requested)?.path
        || availableScenes[0].path;
      sceneSelect.value = resolvedPath;
    }

    function loadUserStartPresets() {
      try {
        const raw = localStorage.getItem(customStartStorageKey);
        if (!raw) {
          return {};
        }
        const parsed = JSON.parse(raw);
        return parsed && typeof parsed === 'object' ? parsed : {};
      } catch {
        return {};
      }
    }

    function persistUserStartPresets() {
      try {
        localStorage.setItem(customStartStorageKey, JSON.stringify(userStartPresets));
      } catch (error) {
        appendLog(`Failed to save start presets: ${error?.message || error}`, 'error');
      }
    }

    function saveCurrentStartPreset() {
      if (!controlCamera) {
        setStatus('Cannot save start point: camera not ready', true);
        return;
      }

      const sceneId = getSceneIdFromPath(sceneSelect.value) || lastSceneId || 'externalview';
      const lookTarget = walkControls?.target
        ? walkControls.target.clone()
        : controlCamera.position.clone().add(new THREE.Vector3(0, 0, -1).applyQuaternion(controlCamera.quaternion));
      const preset = {
        position: [controlCamera.position.x, controlCamera.position.y, controlCamera.position.z],
        lookAt: [lookTarget.x, lookTarget.y, lookTarget.z]
      };

      userStartPresets[sceneId] = preset;
      computedSceneCenterPresets.set(sceneId, preset);
      persistUserStartPresets();
      appendLog(`Saved custom start for ${sceneId}: ${JSON.stringify(preset)}`);
      setStatus(`Saved start point for ${sceneId}`);
    }

    window.addEventListener('error', (event) => {
      appendLog(`${event.message} (${event.filename}:${event.lineno})`, 'error');
    });

    window.addEventListener('unhandledrejection', (event) => {
      appendLog(`Unhandled promise: ${event.reason}`, 'error');
    });

    function setStatus(message, show = true) {
      statusPill.textContent = message;
      appendLog(message);
      statusPill.classList.toggle('active', !!show);
      if (show) {
        clearTimeout(window.__statusTimeout);
        window.__statusTimeout = setTimeout(() => statusPill.classList.remove('active'), 2800);
      }
    }

    function setLoading(show) {
      loading.classList.toggle('visible', !!show);
    }

    function teardownWalkControls() {
      if (movementLoopId !== null) {
        cancelAnimationFrame(movementLoopId);
        movementLoopId = null;
      }

      moveState.forward = false;
      moveState.backward = false;
      moveState.left = false;
      moveState.right = false;
      moveState.up = false;
      moveState.down = false;
      moveState.sprint = false;
      moveVelocity.set(0, 0, 0);

      if (walkControls && typeof walkControls.dispose === 'function') {
        walkControls.dispose();
      }
      if (controlElement) {
        if (requestPointerLockHandler) {
          controlElement.removeEventListener('mousedown', requestPointerLockHandler);
          controlElement.removeEventListener('pointerdown', requestPointerLockHandler);
        }
        if (dragLookMouseDownHandler) {
          controlElement.removeEventListener('mousedown', dragLookMouseDownHandler);
        }
        if (dragLookMouseMoveHandler) {
          controlElement.removeEventListener('mousemove', dragLookMouseMoveHandler);
        }
        if (dragLookMouseUpHandler) {
          controlElement.removeEventListener('mouseup', dragLookMouseUpHandler);
          controlElement.removeEventListener('mouseleave', dragLookMouseUpHandler);
        }
      }
      if (requestPointerLockHandler) {
        window.removeEventListener('pointerdown', requestPointerLockHandler);
      }

      walkControls = null;
      controlCamera = null;
      controlElement = null;
      pointerLocked = false;
      movementClock = null;

      document.removeEventListener('pointerlockchange', onPointerLockChange);
      document.removeEventListener('pointerlockerror', onPointerLockError);

      if (movementKeydownHandler) {
        window.removeEventListener('keydown', movementKeydownHandler);
      movementKeydownHandler = null;
      }
      if (movementKeyupHandler) {
        window.removeEventListener('keyup', movementKeyupHandler);
        movementKeyupHandler = null;
      }
      if (movePadPointerUpHandler) {
        window.removeEventListener('pointerup', movePadPointerUpHandler);
        movePadPointerUpHandler = null;
      }
      clearMovePadInputs();
      requestPointerLockHandler = null;
      dragLookMouseDownHandler = null;
      dragLookMouseMoveHandler = null;
      dragLookMouseUpHandler = null;
      dragLookActive = false;
    }

    let movementKeydownHandler = null;
    let movementKeyupHandler = null;
    let requestPointerLockHandler = null;
    let movePadPointerUpHandler = null;
    let dragLookMouseDownHandler = null;
    let dragLookMouseMoveHandler = null;
    let dragLookMouseUpHandler = null;
    let dragLookActive = false;
    let dragMoveLogTimestamp = 0;
    let joystickManager = null;
    let movePadBound = false;

    function onPointerLockChange() {
      if (!walkControls) {
        return;
      }
      pointerLocked = document.pointerLockElement === controlElement;
      walkControls.isLocked = pointerLocked;
      if (pointerLocked) {
        appendLog('Pointer lock enabled');
      } else {
        appendLog('Pointer lock disabled');
      }
    }

    function onPointerLockError() {
      appendLog('Pointer lock failed (blocked by browser/user settings)', 'error');
    }

    function requestPointerLockOnCanvas(event) {
      if (!walkControls) {
        appendLog('Pointer lock request ignored: controls not ready', 'error');
        return;
      }
      if (pointerLocked) {
        return;
      }
      if (event && event.button !== undefined && event.button !== 0) {
        return;
      }
      if (!controlElement || !walkControls?.domElement) {
        return;
      }
      if (!walkControls?.domElement.contains(event?.target || event?.srcElement)) {
        return;
      }
      walkControls.lock();
      appendLog('Pointer lock requested (drag rotate enabled).');
      event.preventDefault();
    }

    function bindMovePadControls() {
      if (movePadBound || !movePad) {
        return;
      }
      joystickManager = nipplejs.create({
        zone: movePad,
        mode: 'static',
        position: { left: '50%', top: '50%' },
        color: '#ffffff',
        size: 88,
        multitouch: false,
        restOpacity: 0.75
      });
      joystickManager.on('start', () => {
        appendLog('Joystick start');
      });
      joystickManager.on('move', (_evt, data) => {
        const x = data?.vector?.x || 0;
        const y = data?.vector?.y || 0;
        analogMoveX = THREE.MathUtils.clamp(x, -1, 1);
        analogMoveZ = THREE.MathUtils.clamp(y, -1, 1);
      });
      joystickManager.on('end', () => {
        analogMoveX = 0;
        analogMoveZ = 0;
        appendLog('Joystick end');
      });
      movePadBound = true;
      appendLog('Joystick controls bound (nipplejs)');
    }

    function clearMovePadInputs() {
      analogMoveX = 0;
      analogMoveZ = 0;
      if (joystickManager) {
        joystickManager.destroy();
        joystickManager = null;
        movePadBound = false;
      }
      moveState.forward = false;
      moveState.backward = false;
      moveState.left = false;
      moveState.right = false;
      moveState.up = false;
      moveState.down = false;
      moveState.sprint = false;
    }

    function getSceneIdFromPath(pathOrUrl) {
      const normalizedPath = `${pathOrUrl || ''}`.toLowerCase().split('?')[0].split('#')[0];
      const decodedPath = (() => {
        try {
          return decodeURIComponent(normalizedPath);
        } catch (_error) {
          return normalizedPath;
        }
      })();
      const matched = availableScenes.find((scene) => {
        const scenePath = scene.path.toLowerCase();
        return normalizedPath.includes(scene.id) || normalizedPath.endsWith(scenePath) ||
          decodedPath.includes(scene.id) || decodedPath.endsWith(scenePath);
      });
      if (matched) {
        return matched.id;
      }

      const fallback = decodedPath.split(/[\\/]/).pop().split('.')[0];
      if (fallback && availableScenes.some((scene) => scene.id === fallback)) {
        return fallback;
      }
      return null;
    }

    function createViewerMount() {
      const mount = document.createElement('div');
      mount.style.position = 'absolute';
      mount.style.inset = '0';
      mount.style.width = '100%';
      mount.style.height = '100%';
      return mount;
    }

    async function disposeViewerSafely() {
      if (!viewer?.dispose) {
        if (viewerMount?.parentElement) {
          viewerMount.parentElement.removeChild(viewerMount);
        }
        viewerMount = null;
        viewer = null;
        return;
      }

      try {
        const result = viewer.dispose();
        if (result && typeof result.then === 'function') {
          await result;
        }
      } catch (error) {
        const message = `${error?.message || error}`;
        if (message.includes('removeChild') && message.includes('not a child of this node')) {
          appendLog('Previous viewer dispose finished with internal DOM warning (safe to continue).');
        } else {
          appendLog(`Previous viewer dispose warning: ${message}`, 'error');
        }
      } finally {
        if (viewerMount?.parentElement) {
          viewerMount.parentElement.removeChild(viewerMount);
        }
        viewerMount = null;
        viewer = null;
      }
    }

    function onMovementKeyDown(event) {
      if (!walkControls) {
        return;
      }

      const key = `${event.code}`.toLowerCase();
      switch (`${event.code}`.toLowerCase()) {
        case 'keyw':
        case 'arrowup':
          moveState.forward = true;
          break;
        case 'keys':
        case 's':
        case 'arrowdown':
          moveState.backward = true;
          break;
        case 'keya':
        case 'a':
        case 'arrowleft':
          moveState.left = true;
          break;
        case 'keyd':
        case 'd':
        case 'arrowright':
          moveState.right = true;
          break;
        case 'space':
          moveState.up = true;
          break;
        case 'keye':
          moveState.up = true;
          break;
        case 'shiftleft':
        case 'shiftright':
          moveState.sprint = true;
          break;
        case 'keyq':
          moveState.down = true;
          break;
        default:
          break;
      }

      if (key.startsWith('arrow')) {
        event.preventDefault();
      }
    }

    function onMovementKeyUp(event) {
      if (!walkControls) {
        return;
      }

      const key = `${event.code}`.toLowerCase();
      switch (key) {
        case 'keyw':
        case 'arrowup':
          moveState.forward = false;
          break;
        case 'keys':
        case 's':
        case 'arrowdown':
          moveState.backward = false;
          break;
        case 'keya':
        case 'a':
        case 'arrowleft':
          moveState.left = false;
          break;
        case 'keyd':
        case 'd':
        case 'arrowright':
          moveState.right = false;
          break;
        case 'space':
          moveState.up = false;
          break;
        case 'keye':
          moveState.up = false;
          break;
        case 'shiftleft':
        case 'shiftright':
          moveState.sprint = false;
          break;
        case 'keyq':
          moveState.down = false;
          break;
        default:
          break;
      }

      if (key.startsWith('arrow')) {
        event.preventDefault();
      }
    }

    function setupWalkaroundControls(viewerInstance) {
      const renderRoot = viewerInstance?.renderer?.domElement || viewerInstance?.domElement?.querySelector('canvas');
      const camera = viewerInstance?.renderer?.camera || viewerInstance?.camera || viewerInstance?.scene?.camera;
      if (!renderRoot || !camera) {
        appendLog('Walkaround controls unavailable: missing camera or renderer target', 'error');
        return;
      }

      controlElement = renderRoot;
      walkControls = new OrbitControls(camera, renderRoot);
      walkControls.enablePan = false;
      walkControls.enableZoom = false;
      walkControls.enableDamping = true;
      walkControls.dampingFactor = 0.08;
      walkControls.rotateSpeed = 0.3;
      controlCamera = camera;
      moveVelocity.set(0, 0, 0);
      moveDirection.set(0, 0, 0);
      previousFrameTime = performance.now();
      moveForwardVector.set(0, 0, -1).applyQuaternion(controlCamera.quaternion).normalize();
      walkControls.target.copy(controlCamera.position).add(moveForwardVector);
      walkControls.update();

      if (renderRoot) {
        renderRoot.style.touchAction = 'none';
        renderRoot.style.cursor = 'grab';
        if (!dragLookMouseDownHandler) {
          dragLookMouseDownHandler = (event) => {
            if (event.button !== 0) {
              return;
            }
            dragLookActive = true;
            renderRoot.style.cursor = 'grabbing';
            appendLog(`Drag look start @ (${event.clientX}, ${event.clientY})`);
          };
        }
        if (!dragLookMouseMoveHandler) {
          dragLookMouseMoveHandler = (event) => {
            if (!dragLookActive) {
              return;
            }
            const now = performance.now();
            if (now - dragMoveLogTimestamp > 120) {
              dragMoveLogTimestamp = now;
              appendLog(`Drag look move @ (${event.clientX}, ${event.clientY})`);
            }
          };
        }
        if (!dragLookMouseUpHandler) {
          dragLookMouseUpHandler = () => {
            if (!dragLookActive) {
              return;
            }
            dragLookActive = false;
            renderRoot.style.cursor = 'grab';
            appendLog('Drag look end');
          };
        }
        renderRoot.addEventListener('mousedown', dragLookMouseDownHandler, { passive: true });
        renderRoot.addEventListener('mousemove', dragLookMouseMoveHandler, { passive: true });
        renderRoot.addEventListener('mouseup', dragLookMouseUpHandler, { passive: true });
        renderRoot.addEventListener('mouseleave', dragLookMouseUpHandler, { passive: true });
      }

      const viewerControlAdapter = {
        object: controlCamera,
        getObject: () => controlCamera,
        enabled: true,
        update: () => walkControls?.update?.()
      };

      viewerInstance.controls = viewerControlAdapter;
      movementClock = new THREE.Clock();
      document.addEventListener('pointerlockchange', onPointerLockChange);
      document.addEventListener('pointerlockerror', onPointerLockError);

      if (!movementKeydownHandler) {
        movementKeydownHandler = onMovementKeyDown;
        movementKeyupHandler = onMovementKeyUp;
        window.addEventListener('keydown', movementKeydownHandler);
        window.addEventListener('keyup', movementKeyupHandler);
      }
      bindMovePadControls();

    const walkVelocity = walkSpeedSettings.walkVelocity;
    const damping = walkSpeedSettings.damping;
    const verticalSpeed = walkSpeedSettings.verticalSpeed;
    const sprintMultiplier = walkSpeedSettings.sprintMultiplier;

      const tick = () => {
        if (!walkControls || !movementClock) {
          movementLoopId = null;
          return;
        }

        const now = performance.now();
        const delta = Math.min(0.1, (now - previousFrameTime) / 1000);
        previousFrameTime = now;

        if (walkControls) {
          moveDirection.x = (Number(moveState.right) - Number(moveState.left)) + (analogMoveX * joystickMoveScale);
          moveDirection.z = (Number(moveState.forward) - Number(moveState.backward)) + (analogMoveZ * joystickMoveScale);
          moveDirection.y = 0;
          moveDirection.clampLength(0, 1);
          moveDirection.normalize();

          const speed = walkVelocity * (moveState.sprint ? sprintMultiplier : 1);
          if (moveDirection.z !== 0) {
            moveVelocity.z -= moveDirection.z * speed * damping * delta;
          } else {
            moveVelocity.z -= moveVelocity.z * 10.0 * delta;
          }

          if (moveDirection.x !== 0) {
            moveVelocity.x -= moveDirection.x * speed * damping * delta;
          } else {
            moveVelocity.x -= moveVelocity.x * 10.0 * delta;
          }

          controlCamera.getWorldDirection(moveForwardVector);
          moveForwardVector.y = 0;
          if (moveForwardVector.lengthSq() < 1e-5) {
            moveForwardVector.set(0, 0, -1);
          }
          moveForwardVector.normalize();
          moveRightVector.crossVectors(moveForwardVector, controlCamera.up).normalize();

          const rightDelta = -moveVelocity.x * delta;
          const forwardDelta = -moveVelocity.z * delta;
          controlCamera.position.addScaledVector(moveRightVector, rightDelta);
          controlCamera.position.addScaledVector(moveForwardVector, forwardDelta);
          walkControls.target.addScaledVector(moveRightVector, rightDelta);
          walkControls.target.addScaledVector(moveForwardVector, forwardDelta);

          if (moveState.up) {
            controlCamera.position.y += verticalSpeed * speed * delta * 0.2;
            walkControls.target.y += verticalSpeed * speed * delta * 0.2;
          }
          if (moveState.down) {
            controlCamera.position.y -= verticalSpeed * speed * delta * 0.2;
            walkControls.target.y -= verticalSpeed * speed * delta * 0.2;
          }
          walkControls.update();
        }

        movementLoopId = requestAnimationFrame(tick);
      };

      tick();
      appendLog('Walkaround controls initialized. Drag on the viewer to rotate, WASD to move.');
      appendLog('Walkaround listeners attached: orbit drag look + WASD movement.');
    }

    const resolveAssetPath = (path) => new URL(path, window.location.href).toString();

    function detectFormatByPath(pathOrName) {
      const cleaned = `${pathOrName || ''}`.toLowerCase().split('?')[0].split('#')[0];
      if (cleaned.endsWith('.ply')) {
        return 2; // SceneFormat.Ply
      }
      if (cleaned.endsWith('.splat')) {
        return 0; // SceneFormat.Splat
      }
      if (cleaned.endsWith('.ksplat')) {
        return 1; // SceneFormat.KSplat
      }
      if (cleaned.endsWith('.spz')) {
        return 3; // SceneFormat.Spz
      }
      return undefined;
    }

    function formatToName(format) {
      return format === 2 ? 'PLY'
        : format === 0 ? 'SPLAT'
        : format === 1 ? 'KSPLAT'
        : format === 3 ? 'SPZ'
        : 'AUTO';
    }

    async function logSceneMetadata(pathOrUrl) {
      if (!pathOrUrl || `${pathOrUrl}`.startsWith('blob:')) {
        return;
      }
      try {
        const response = await fetch(pathOrUrl, { method: 'HEAD' });
        const sizeHeader = response?.headers?.get('content-length');
        const contentType = response?.headers?.get('content-type') || 'unknown';
        if (response && response.ok) {
          appendLog(`Scene metadata: ${new URL(pathOrUrl, window.location.href).pathname} size=${sizeHeader || 'unknown'} bytes, type=${contentType}`);
        } else {
          appendLog(`Scene metadata unavailable: ${response ? `${response.status} ${response.statusText}` : 'no response'}`, 'error');
        }
      } catch (error) {
        appendLog(`Scene metadata read error: ${error?.message || error}`, 'error');
      }
    }

    async function ensureViewer(sceneId = 'externalview', sceneCameraPreset = null) {
      teardownWalkControls();
      await disposeViewerSafely();

      viewerHost.innerHTML = '';
      viewerMount = createViewerMount();
      viewerHost.appendChild(viewerMount);
      const preset = sceneCameraPreset || {
        position: [0, 0.3, 5],
        lookAt: [0, 0, 0]
      };

      viewer = new GaussianSplats3D.Viewer({
        rootElement: viewerMount,
        useBuiltInControls: false,
        sphericalHarmonicsDegree: 0,
        gpuAcceleratedSort: false,
        ignoreDevicePixelRatio: false,
        dynamicScene: false,
        sceneRevealMode: GaussianSplats3D.SceneRevealMode.Instant,
        renderMode: GaussianSplats3D.RenderMode.Always,
        antialiased: false,
        focalAdjustment: 1,
        enableOptionalEffects: false,
        background: 0x0b0f17,
        initialCameraPosition: preset.position,
        initialCameraLookAt: preset.lookAt,
        cameraUp: [0, 1, 0],
        sharedMemoryForWorkers: false,
        webXRMode: GaussianSplats3D.WebXRMode.None
      });
      setupWalkaroundControls(viewer);

      const viewerNode = viewer.rootElement || viewer.renderer?.domElement || viewer.domElement || viewer.element;
      if (viewerNode) {
        viewerNode.style.position = 'absolute';
        viewerNode.style.inset = '0';
        viewerNode.style.width = '100%';
        viewerNode.style.height = '100%';
        appendLog(`Viewer node mounted (${viewerNode.tagName || 'element'})`);
      }
      appendLog(`Viewer created. useBuiltInControls=${viewer.useBuiltInControls}`);
      toggleTooltip.textContent = 'Walkaround';
      toggleIcon.src = './Assets/freewalk-icon.png';
    }

    async function loadSplat(pathOrUrl, forcedFormat = undefined) {
      const loadToken = ++activeLoadToken;
      if (!pathOrUrl) {
        setStatus('No path was provided', true);
        return;
      }

      const isTempObjectUrl = `${pathOrUrl}`.startsWith('blob:');
      const selectedSceneId = getSceneIdFromPath(pathOrUrl);
      const transitionPreset = getTransitionStartPreset(lastSceneId, selectedSceneId);
      const userStartPreset = selectedSceneId ? userStartPresets[selectedSceneId] : null;
      const isExternal = selectedSceneId === 'externalview';
      const cachedSceneCenterPreset = !isExternal && (selectedSceneId ? computedSceneCenterPresets.get(selectedSceneId) : null);
      const selectedPreset = transitionPreset
        || userStartPreset
        || (isExternal && sceneCameraPresets.externalview
          ? sceneCameraPresets.externalview
          : cachedSceneCenterPreset
            || null);
      if (transitionPreset) {
        appendLog(`Applying transition preset for ${lastSceneId || 'startup'} -> ${selectedSceneId}`);
      } else if (userStartPreset) {
        appendLog(`Applying saved custom start for ${selectedSceneId}`);
      } else if (isExternal && sceneCameraPresets.externalview) {
        appendLog(`Using fixed preset for externalview`);
      } else if (cachedSceneCenterPreset) {
        appendLog(`Applying cached center start for ${selectedSceneId}`);
      } else {
        appendLog(`Using computed center start for ${selectedSceneId}`);
      }
      const detectedFormat = forcedFormat || detectFormatByPath(pathOrUrl);
      appendLog(`Start load: ${pathOrUrl}`);
      appendLog(`Requested format: ${formatToName(detectedFormat)}`);
      await logSceneMetadata(pathOrUrl);
      setLoading(true);
      setStatus(`Loading ${pathOrUrl}...`, true);
      let lastProgress = -1;

      try {
        await ensureViewer(selectedSceneId, selectedPreset);
        if (loadToken !== activeLoadToken) {
          return;
        }
        const baseLoadOptions = {
          showLoadingUI: false,
          splatAlphaRemovalThreshold: 0,
          progressiveLoad: false,
          format: detectedFormat,
          rotation: [0, 0, 1, 0],
          onProgress: (percentComplete, percentCompleteLabel, loaderStatus) => {
            const rounded = Math.floor(Number(percentComplete || 0) / 10) * 10;
            if (rounded !== lastProgress) {
              lastProgress = rounded;
              appendLog(`Load ${loaderStatus || 'progress'}: ${rounded}% ${percentCompleteLabel ? `(${percentCompleteLabel})` : ''}`.trim());
            }
          }
        };

        try {
          await viewer.addSplatScene(pathOrUrl, baseLoadOptions);
        } catch (sceneLoadError) {
          const message = `${sceneLoadError?.message || sceneLoadError}`;
          appendLog(`Primary load failed for ${pathOrUrl}: ${message}`, 'error');
          if (`${detectedFormat}` === '1' && `${pathOrUrl}`.toLowerCase().endsWith('.ksplat')) {
            appendLog('Retrying with auto-detected format for KSPLAT...');
            const fallbackOptions = { ...baseLoadOptions };
            delete fallbackOptions.format;
            await viewer.addSplatScene(pathOrUrl, fallbackOptions);
          } else if (loadToken === activeLoadToken) {
            appendLog(`Retrying scene load by resetting viewer for: ${pathOrUrl}`);
            await disposeViewerSafely();
            await ensureViewer(selectedSceneId, selectedPreset);
            await viewer.addSplatScene(pathOrUrl, baseLoadOptions);
          } else {
            throw sceneLoadError;
          }
        }
        if (viewer.start) {
          viewer.start();
        }
        scheduleSceneCenter(viewer, selectedSceneId, transitionPreset);
        lastSceneId = selectedSceneId;
        const loadedSceneCount = viewer?.splatMesh?.scenes?.length || 0;
        appendLog(`Scene ready. URL=${pathOrUrl} nodes=${loadedSceneCount}`);
        setActiveSceneThumb(selectedSceneId);
        requestAnimationFrame(() => captureCurrentSceneThumbnail(selectedSceneId));
        setStatus(`Loaded: ${pathOrUrl}`);
      } catch (error) {
        const message = error?.message || String(error);
        const boundsMatch = /Start offset\s+(\d+)\s+is outside the bounds of the buffer/i.exec(message);
        if (boundsMatch) {
          appendLog(`Bounds parse failure: file offset ${boundsMatch[1]} exceeds available buffer length. This usually means the .ksplat is truncated or not matching this viewer parser version.`, 'error');
        }
        appendLog(`Failed to load model: ${message}`, 'error');
        setStatus(`Failed to load model: ${message}`, true);
        console.error(error);
      } finally {
        if (isTempObjectUrl && currentObjectUrl === pathOrUrl) {
          URL.revokeObjectURL(currentObjectUrl);
          currentObjectUrl = null;
        }
        setLoading(false);
      }
    }

    toggleButton.addEventListener('click', () => {
      setStatus('Walkaround controls active');
    });

    fullScreenButton.addEventListener('click', async () => {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen().catch(() => {});
        fullScreenTooltip.textContent = 'Exit Fullscreen';
      } else {
        await document.exitFullscreen().catch(() => {});
        fullScreenTooltip.textContent = 'Fullscreen';
      }
    });

    saveStartButton.addEventListener('click', () => {
      saveCurrentStartPreset();
    });

    initializeSceneDropdown();
    buildSceneThumbnails();
    sceneSelect.addEventListener('change', () => {
      const selected = sceneSelect.value;
      if (!selected) {
        return;
      }
      loadSplat(resolveAssetPath(selected), undefined);
    });

    const startupAsset = sceneSelect.value || startupAssetPath;
    const resolvedStartupAsset = resolveAssetPath(startupAsset);
    setStatus(`Auto-select: ${resolvedStartupAsset}`);
    loadSplat(resolvedStartupAsset);
  
