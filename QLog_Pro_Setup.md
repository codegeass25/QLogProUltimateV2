# QLog Pro Ultimate — Setup

Drop `UI_QLog_Pro_Ultimate.html` into the same folder as your existing app so it can reach `libs/` and `manifest.json`. Two new pieces are needed for the AI face-recognition upgrade:

## 1. face-api.js library (offline)

Download the minified build and save it as:

```
libs/face-api.min.js
```

Recommended build (works offline, weights are separate):
- https://cdn.jsdelivr.net/npm/@vladmandic/face-api@1.7.13/dist/face-api.min.js

(If `libs/face-api.min.js` is missing at load time, the page auto-falls back to that CDN URL. Placing it locally is what makes the app fully offline.)

## 2. Face recognition model weights

Create a `models/` folder next to the HTML and put these files inside it (download from https://github.com/vladmandic/face-api/tree/master/model — or the equivalent `justadudewhohacks/face-api.js` `weights` folder):

```
models/
  tiny_face_detector_model-weights_manifest.json
  tiny_face_detector_model-shard1
  face_landmark_68_model-weights_manifest.json
  face_landmark_68_model-shard1
  face_recognition_model-weights_manifest.json
  face_recognition_model-shard1
  face_recognition_model-shard2
```

Total is roughly 6 MB. Once these files exist, the app runs face recognition fully offline.

## Everything else

All original features (QR/USB/camera scanning, visitor logging, client inventory, book inventory, borrowing/returns, reservations queue, reports, Excel + PDF export/import, audit trail, localStorage database, live monitoring dashboard) are preserved and continue to function exactly as before.
