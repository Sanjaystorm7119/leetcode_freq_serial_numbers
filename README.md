## lc_counter

A small browser extension (unpacked) that augments web pages — used to count or highlight items on LeetCode/problem pages. This README explains how to install, run, and modify the extension in your browser.

## What this project contains

- `manifest.json` — extension manifest (permissions, scripts, and metadata).
- `content.js` — primary content script injected into pages. This is where counting/DOM logic lives.
- `styles.css` — styling used by content script for any injected UI elements.

## Assumptions

1. This is an unpacked Chrome/Chromium-based browser extension (works with Chrome, Edge, Brave, etc.).
2. `content.js` is the script that reads the page and updates the UI — if your logic lives elsewhere, update the file map above.

## Install (Load unpacked extension)

1. Open Chrome (or another Chromium-based browser).
2. Navigate to `chrome://extensions/`.
3. Enable "Developer mode" (top-right).
4. Click "Load unpacked" and select the project folder (`lc_counter`).
5. The extension will be loaded. Visit a page where the content script should run (for example a LeetCode problem page) and observe the UI injected by the extension.

Note: In Edge use `edge://extensions/` and the same steps.

## Usage

- The extension runs automatically on pages that match the URLs/hosts declared in `manifest.json`. If nothing appears, check `manifest.json` for the `matches` pattern and make sure you opened a matching page.
- To quickly reload code changes while developing, open the Extensions page and click the reload icon for the extension after editing files.

## Development notes

- Edit `content.js` to change the counting logic or UI interactions.
- Edit `styles.css` to change appearance. Avoid using global selectors that might conflict with the host page.
- Manifest changes may require reloading the extension in the browser.

Quick dev loop:

1. Make edits to `content.js` or `styles.css`.
2. Open `chrome://extensions/` and click reload for the extension, or use the shortcut in your browser if available.
3. Refresh the target website page.

## Troubleshooting

- Nothing shows up on the page:
  - Confirm the page URL matches `manifest.json` "matches" patterns.
  - Open DevTools on the page and check the Console for errors.
  - Open the Extensions page and inspect the extension's service worker / background for runtime errors.
- Permission errors: Add the right host permissions to `manifest.json` and reload the extension.

## Files changed/created in this commit

- `README.md` — this file: project overview, install and dev instructions.

## Contributing

If you want improvements (tests, options page, build pipeline, packaged release), open an issue or send a patch. Suggested small improvements:

- Add a `package.json` and build task if you plan to transpile or bundle sources.
- Add unit tests for DOM parsing logic (using Jest + JSDOM) if logic grows.

## License

MIT — feel free to reuse and adapt. See the LICENSE file if you add one.

![LeetCode Counter UI](Screenshot%202025-10-03%20200702.png)
