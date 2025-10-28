# Netcentric Project Documentation

## Overview
The **Netcentric** project is a browser-based tutoring and live class platform with:
- **User Side** (`index.html`): Displays live class information (YouTube embed) dynamically from Firebase Firestore.
- **Admin Side** (`admin.html`): Allows administrators to update the embedded YouTube video link for the live class.

This system uses **Firebase Firestore** as the backend database to sync data in real time.

---

## Project Structure
```
Netcentric/
│
├── admin.html          # Admin panel for updating the live class YouTube video
├── index.html          # User-facing page to view the live class
│
└── assets/
    └── logo/
        └── De-briliant-logo.jpg   # Project logo
```

---

## Core Features
### Admin Panel (`admin.html`)
- Connects to Firebase Firestore.
- Accepts a YouTube link or video ID from the admin.
- Normalizes the link to extract only the **video ID** before saving.
- Saves the ID to Firestore in the `config/liveClass` document.

### User Page (`index.html`)
- Connects to the same Firebase Firestore project.
- Listens in real-time for updates to `config/liveClass.videoId`.
- Automatically updates the embedded YouTube iframe without requiring a refresh.
- Displays the logo and other page elements for the tutoring platform.

---

## How It Works
1. **Admin logs into `admin.html` locally or via hosted site.**
2. Admin pastes a **YouTube link** (any format) or raw video ID.
3. The code extracts the clean video ID and updates Firestore:
   ```
   Collection: config
   Document: liveClass
   Field: videoId
   ```
4. The **user page** (`index.html`) listens for changes:
   - When a new `videoId` is detected, the iframe updates to `https://www.youtube.com/embed/<videoId>` instantly.
5. The result: Users always see the most up-to-date live class video.

---

## Setup Instructions

### 1. Prerequisites
- A Firebase project with Firestore enabled.
- Firebase web SDK scripts included (already in the HTML files).
- Local server environment (XAMPP, VS Code Live Server, Node `http-server`) for testing.

### 2. Configure Firebase
In **index.html** and **admin.html**, replace the `firebaseConfig` object with your project’s config from:
**Firebase Console → Project Settings → General → Your Apps → Firebase SDK snippet**.

### 3. Firestore Rules (Local Dev)
In the Firebase Console:
1. Go to **Firestore Database → Rules**.
2. Replace with:
```plaintext
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /config/{docId} {
      allow read, write: if true; // Dev-only
    }
  }
}
```
3. **Publish**.

> ⚠ Don’t leave open rules in production. Restrict write access to authenticated admins.

### 4. Running Locally
1. Place the `Netcentric` folder in your local server directory (`htdocs` for XAMPP).
2. Visit:
   - Admin: `http://localhost/Netcentric/admin.html`
   - User: `http://localhost/Netcentric/index.html`
3. Test by updating the YouTube link in the admin panel.

---

## Customization
- **Logo:** Replace `assets/logo/De-briliant-logo.jpg` with your own.
- **Styling:** Update inline styles or external CSS (if added) for branding.
- **Video ID Handling:** The admin panel accepts any YouTube format and extracts the ID automatically.

---

## Troubleshooting
- **Video not updating:**  
  - Check Firebase config in both files.
  - Ensure Firestore rules allow reads/writes.
- **No video showing:**  
  - Make sure the saved value in Firestore is a valid YouTube video ID.
