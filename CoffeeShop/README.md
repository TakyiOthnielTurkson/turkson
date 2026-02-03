# CoffeeShop — Build & Run

Quick ways to preview and serve the static site in CoffeeShop.

Options
- Open in browser: double-click coffee.html (works for most simple pages).
- Live Server (recommended): install the Live Server VS Code extension and click Go Live.
- Python HTTP server (no install if Python is available):

```powershell
# from the CoffeeShop folder
py -3 -m http.server 8000
# or if 'python' is on PATH
python -m http.server 8000
```

- Using npx http-server (Node.js required):

```bash
# from the CoffeeShop folder
npx http-server -p 8000
```

Then open http://localhost:8000 and browse to coffee.html.

VS Code task
- Run the 'Serve (Python)' task from the Command Palette (Terminal → Run Task) to start a local server.

Deployment
- This is a plain static site. You can deploy to GitHub Pages, Netlify, or Vercel by pointing the platform to this folder.

If you want, I can add a simple GitHub Pages workflow or a Netlify deploy config next.
