# Project Screenshots Directory

Place your project homepage screenshots and overview images in this folder (`public/projects/`).

### How to use:
1. Save your screenshot image file here (e.g. `kilatis.png`, `ephnyr-ai.png`, `checkmate-ph.png`).
2. Open `data/projects.ts`.
3. In the project object, set the `image` field to your file path:
   ```ts
   image: "/projects/kilatis.png",
   ```
4. If `image` is left empty (`image: ""`) or omitted, the project card will automatically display in standard layout without an image preview.

