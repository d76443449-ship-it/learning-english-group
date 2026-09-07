# English Moja — Learning English Group

A simple, fast video-class site for the group's 25 English lessons.

## What's new in this version
- Your uploaded chalkboard "ENGLISH" doodle art is now the site's background — heavily blurred and darkened behind everything, so it sets the mood without fighting the content. The image is embedded directly inside `style.css` (as base64), so there's no separate image file or folder to upload — just these files, flat, in the repo.
- Cards, search box, and panels are now a stronger frosted-glass so text stays crisp over the busier background
- Dark, glassmorphic "3D web" redesign — floating gradient orbs, glass-blur panels, an extruded 3D heading (Space Grotesk + Inter)
- Amber / teal / rose color grading (previously violet/cyan/pink)
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
- `style.css` — all styling, plus the background photo embedded inside it
- `loader.js` — shows the loading animation once per browser session

To change the background image later, ask for it to be re-embedded into `style.css` — there's no separate image file to manage.

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
