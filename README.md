# TwinPlay User Manuals

## Development

### With Dev Container (Recommended)

1. Requirements: `Docker >=24`
2. Open the project in Visual Studio Code
3. Install the Dev Containers extension
4. Reopen in container when prompted
5. Website automatically starts at [http://localhost:3000](http://localhost:3000)

### Without Dev Container

1. **Requirements**

   | pkg    | version |
   | ------ | ------- |
   | Docker | `>=24`  |
   | Node   | `>=22`  |
   | Yarn   | `^1.22` |

2. **Install dependencies:**

   ```bash
   yarn install
   ```

3. **Start development server:**

   ```bash
   yarn start
   ```

4. **Open your browser:**
   Navigate to [http://localhost:3000](http://localhost:3000)

5. **Build the static site** (optional):

   ```bash
   yarn build
   ```

## Quick Setup Guide PDFs

The printable quick-setup leaflets are generated from `pdf-sources/*.md` with [md-to-pdf](https://github.com/simonhaenisch/md-to-pdf) and served from `static/downloads/`.

Run from the repo root so that the `/static/img/...` paths in the sources resolve:

```bash
npx md-to-pdf pdf-sources/quick-setup-depliant.md
npx md-to-pdf pdf-sources/quick-setup-depliant-en.md
mv -f pdf-sources/*.pdf static/downloads/
```

> [!NOTE]
> Image paths in the sources must be absolute (`/static/img/...`, leading slash), otherwise md-to-pdf serves them relative to the source file and the QR codes come out broken.
>
> The first run downloads a Chrome build for Puppeteer (`npx puppeteer browsers install chrome`) if it is not already cached.
