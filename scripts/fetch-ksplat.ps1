[CmdletBinding()]
param(
  [Parameter(Mandatory=$true)]
  [string]$PageUrl,

  [Parameter(Mandatory=$false)]
  [string]$OutFile = ".\\assets\\scene.ksplat"
)

$dest = Split-Path -Path $OutFile -Parent
if ($dest -and -not (Test-Path -Path $dest)) {
  New-Item -ItemType Directory -Path $dest -Force | Out-Null
}

$base = [uri]$PageUrl
$response = Invoke-WebRequest -Uri $PageUrl -UseBasicParsing
$matches = [regex]::Matches($response.Content, 'https?:\/\/[^"''\s>]+\.ksplat(?:\?[^"''\s>]*)?')
if (-not $matches -or $matches.Count -eq 0) {
  throw "No .ksplat URL found on $PageUrl"
}

$assetUrl = $matches[0].Value
if (-not $assetUrl.StartsWith('http')) {
  $assetUrl = (New-Object System.Uri($base, $assetUrl)).AbsoluteUri
}

Write-Host "Downloading $assetUrl"
Invoke-WebRequest -Uri $assetUrl -OutFile $OutFile -UseBasicParsing
Write-Host "Saved to $OutFile"
