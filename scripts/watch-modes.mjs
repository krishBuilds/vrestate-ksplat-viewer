#!/usr/bin/env node
import { chromium } from 'playwright';
import fs from 'fs';
import path from 'path';

const rawArgs = process.argv.slice(2);
const positional = rawArgs.filter((entry) => typeof entry === 'string' && !entry.startsWith('--'));
const namedArgs = rawArgs.filter((entry) => typeof entry === 'string' && entry.startsWith('--'));

const baseUrl = positional[0] || 'http://127.0.0.1:8000/index.html';
const continuous = namedArgs.includes('--continuous');
const intervalArg = namedArgs.find((entry) => entry.startsWith('--interval='));
const intervalMs = intervalArg ? Number(intervalArg.split('=')[1]) || 5000 : 5000;

const assetsRoot = new URL(baseUrl, 'http://127.0.0.1:8000/').origin;
const scenes = [
  `${assetsRoot}/assets/Splat/externalview.ksplat`,
  `${assetsRoot}/assets/Splat/floorplan.ksplat`,
  `${assetsRoot}/assets/Splat/FrontYard.ksplat`,
  `${assetsRoot}/assets/Splat/Interior.ksplat`,
  `${assetsRoot}/assets/Splat/BackYard.ksplat`
];

const screenshotDir = path.join(process.cwd(), 'artifacts', 'mode-check');
fs.mkdirSync(screenshotDir, { recursive: true });

function parseModeQuery(url) {
  const parsed = new URL(url);
  const scene = parsed.searchParams.get('scene') || 'home';
  return scene.split('/').pop().replace('.ksplat', '');
}

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function runPass(page, sceneUrl, passIndex) {
  const target = new URL(baseUrl);
  target.searchParams.set('scene', sceneUrl);
  const scene = parseModeQuery(target.toString());
  const label = `${passIndex + 1}-${scene}`;
  console.log(`\n[watch] open scene=${scene}`);

  page.on('console', (msg) => {
    if (typeof msg.text === 'function' && msg.text().includes('[Viewer]')) {
      console.log(`[watch:${label}] ${msg.text()}`);
    }
  });
  page.on('pageerror', (err) => {
    console.error(`[watch:${label}] pageerror`, err?.message || err);
  });

  await page.goto(target.toString(), { waitUntil: 'domcontentloaded' });
  await page.waitForLoadState('networkidle', { timeout: 45000 });

  const loadingOverlay = page.locator('#loading-overlay');
  try {
    await loadingOverlay.waitFor({ state: 'hidden', timeout: 45000 });
  } catch (_err) {
    // continue; some modes can keep loading overlay longer on slow disks
  }

  await page.waitForTimeout(700);

  const view = page.locator('#viewer-container canvas').first();
  const box = await view.boundingBox();

  if (box) {
    await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
    await page.mouse.down();
    await page.mouse.move(box.x + box.width / 2 + 40, box.y + box.height / 2 + 12);
    await page.mouse.up();
    await page.keyboard.down('KeyW');
    await wait(240);
    await page.keyboard.up('KeyW');
    await page.mouse.move(box.x + box.width / 2 + 20, box.y + box.height / 2 + 20);
  }

  await page.screenshot({
    path: path.join(screenshotDir, `${label}.png`),
    fullPage: true
  });

  await page.click('#toggle-button').catch(() => {});
  await page.waitForTimeout(300);
  await page.screenshot({
    path: path.join(screenshotDir, `${label}-toggle.png`),
    fullPage: true
  });
  await wait(intervalMs);
}

async function main() {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext({
    viewport: { width: 1536, height: 900 }
  });
  const page = await context.newPage();

  try {
    let passIndex = 0;
    do {
      for (let i = 0; i < scenes.length; i += 1) {
        await runPass(page, scenes[i], passIndex);
        passIndex += 1;
      }
    } while (continuous);
  } finally {
    await browser.close();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
