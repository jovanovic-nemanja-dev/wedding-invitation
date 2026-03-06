# Radica & Nemanja — Wedding invitation page

Static wedding page with countdown (Belgrade time) and link to share photos via Google Form. Host on GitHub Pages.

## What’s included

- **Hero** – “You’re invited”, title, date, short message
- **Countdown** – to 6 June 2026, 15:00 Belgrade time
- **Event details** – placeholder section for venue, address, dress code
- **Share your photos** – button linking to your Google Form

Text color matches your paper invitation: `#755c4a`. Light background for contrast.

## Edit before publishing

1. **index.html**
   - Change “Our Wedding” to your names (in `.hero-title`).
   - Adjust `.hero-message` if you want different wording.
   - Fill in the **Event details** section (venue, address, dress code, etc.).

2. **Photo form** – The “Add your photos” button already points to:  
   `https://forms.gle/srkccbyHqPpkqupy8`. Change the `href` in that link if you use a different form.

## Run locally

Open `index.html` in a browser, or use a simple local server:

```bash
npx serve .
```

Then open the URL it prints (e.g. http://localhost:3000).

**To stop the server** (e.g. before renaming the project folder): press `Ctrl+C` in the terminal where it’s running. On Windows, to kill whatever is using port 3000:  
`Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue | ForEach-Object { Stop-Process -Id $_.OwningProcess -Force }`

## Deploy to GitHub Pages

1. Create a new repository on GitHub (e.g. `wedding-invitation`).
2. Push this folder to the repo (e.g. `main` branch).
3. In the repo: **Settings → Pages**.
4. Under “Build and deployment”, set **Source** to “Deploy from a branch”.
5. Choose branch `main` (or the branch you use) and folder **/ (root)**. Save.
6. After a minute or two, the site will be at `https://<username>.github.io/<repo-name>/`.

No build step required.
