# English Moja — Learning English Group

A simple, fast video-class site for the group's 25 English lessons.

## What's new in this version
- Dark, glassmorphic "3D web" redesign — floating gradient orbs, glass-blur panels, an extruded 3D heading (Space Grotesk + Inter)
- A short loading animation plays on first visit each session, then gets out of the way (skipped automatically on repeat page loads, and for visitors with "reduce motion" turned on)
- Class cards tilt in 3D as you move the mouse over them, with a soft spotlight glow that follows the cursor
- Cards flip in with a 3D rotation as you scroll the grid into view
- The hero section has a subtle parallax tilt that follows the pointer
- Search now shows a friendly "no results" message instead of just going blank
- Class page has a floating number badge, a tilting video frame, and Previous / Next buttons to move between classes without going back to the list
- Fixed a bug where every class with a missing video showed the message "Class 6 video link has not been added yet" — it now correctly names whichever class is actually missing
- Missing-video classes no longer show an empty black video box — the box is hidden and only the message is shown
- All motion effects are automatically disabled for touch devices (no hover) and for visitors with "reduce motion" enabled in their OS

## Files
- `index.html` / `app.js` — class list + search
- `class.html` / `class.js` — single class video page
- `videos.js` — the list of classes and their Google Drive file IDs (edit this to add/update videos)
- `style.css` — all styling
- `loader.js` — shows the loading animation once per browser session

## Adding or updating a video
Open `videos.js` and set the Google Drive file ID for that class number, e.g.:
```js
"6": "your-google-drive-file-id-here",
```
Leave it as `""` if the video isn't ready yet — the site will automatically show "Coming Soon".

## Deploying
1. Upload all files to a GitHub repository.
2. In the repo, go to Settings → Pages, and enable GitHub Pages for the main branch.
3. Your site will be live at `https://<username>.github.io/<repo-name>/`.
