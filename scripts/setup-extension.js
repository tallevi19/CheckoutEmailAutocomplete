/**
 * Creates symlinks from the extension's node_modules to root node_modules
 * for @shopify/ui-extensions-react and @shopify/ui-extensions.
 *
 * The Shopify CLI's esbuild uses the extension directory as resolveDir,
 * so packages must be present in the extension's own node_modules.
 * Symlinks to root node_modules are the most reliable cross-platform solution.
 */
const fs = require('fs');
const path = require('path');

const root = process.cwd();
const shopifyExtDir = path.join(root, 'extensions', 'email-autocomplete', 'node_modules', '@shopify');

fs.mkdirSync(shopifyExtDir, { recursive: true });

const packages = ['ui-extensions-react', 'ui-extensions'];

for (const pkg of packages) {
  const src = path.join(root, 'node_modules', '@shopify', pkg);
  const dest = path.join(shopifyExtDir, pkg);

  if (!fs.existsSync(src)) {
    console.warn(`Warning: ${src} not found, skipping symlink for ${pkg}`);
    continue;
  }

  try {
    fs.rmSync(dest, { recursive: true, force: true });
  } catch (e) {
    // ignore if doesn't exist
  }

  // Use 'junction' for Windows dir symlinks, regular symlink on Mac/Linux
  const type = process.platform === 'win32' ? 'junction' : 'dir';
  fs.symlinkSync(src, dest, type);
  console.log(`  Linked extensions/email-autocomplete/node_modules/@shopify/${pkg} -> ${src}`);
}
