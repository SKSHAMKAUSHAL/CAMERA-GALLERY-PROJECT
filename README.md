camera-gallery-sk.netlify.app# Camera Gallery Project

A web application to capture, store, view, download, and delete images and videos using IndexedDB in the browser.

## 🚀 Features

- **Capture Media:** Take photos and record videos directly from your browser.
- **Gallery View:** Browse all saved images and videos in a responsive gallery.
- **Download:** Download any image or video to your device.
- **Delete:** Remove unwanted media from the gallery and database.
- **Persistent Storage:** Uses IndexedDB for offline storage of media files.

## 🖥️ Demo

[Live Demo](camera-gallery-sk.netlify.app)

## 📂 Project Structure

```
CAMERA-GALLERY-PROJECT/
│
├── db.js           # IndexedDB setup and management
├── gallery.js      # Gallery logic: retrieval, display, delete, download
├── gallery.css     # Styles for the gallery UI
├── gallery.html    # Gallery page markup
├── index.html      # Main camera interface (not shown here)
└── README.md       # Project documentation
```

## 🛠️ How It Works

- **IndexedDB** is used to store images and videos as blobs.
- On loading the gallery, all media is fetched from the database and displayed.
- Each media item has **Download** and **Delete** buttons.
- Deleting removes the item from both the UI and the database.
- Downloading creates a temporary link to save the file.

## 🧑‍💻 Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd CAMERA-GALLERY-PROJECT
```

### 2. Open in VS Code or your favorite editor

### 3. Run Locally

You can use the Live Server extension in VS Code or any static server:

```bash
npx serve .
```

Then open `gallery.html` in your browser.

## 📦 Dependencies

- No external dependencies. Pure HTML, CSS, and JavaScript.

## 📸 Usage

1. Open the main camera page (usually `index.html`).
2. Capture images or videos.
3. Go to the gallery (`gallery.html`) to view, download, or delete your media.

## 📝 Code Overview

- **db.js:** Initializes IndexedDB with `video` and `image` object stores.
- **gallery.js:** Handles fetching, displaying, downloading, and deleting media.
- **gallery.css:** Styles the gallery layout and media items.

## 🧹 Future Improvements

- Add support for media renaming.
- Implement search/filter in the gallery.
- Add user authentication for private galleries.

## 📄 License

This project is for educational purposes.

---

**Made with ❤️ for learning and practice.**
