# Unity Nodes Lease Agreement - Progressive Web App

A Progressive Web App (PWA) for the Unity Nodes Lease Agreement Terms. This app can be installed on any device and works offline.

## Features

✅ **Installable**: Can be installed on desktop and mobile devices  
✅ **Offline Support**: Works without internet connection once installed  
✅ **Responsive Design**: Optimized for all screen sizes  
✅ **Print Friendly**: Clean print layout for document printing  
✅ **Dark Mode Support**: Automatically adapts to system preferences  
✅ **Fast Loading**: Cached resources for instant loading  
✅ **Accessible**: WCAG compliant with keyboard navigation support  

## Installation

### For End Users

1. **Desktop/Mobile Browser**:
   - Visit the hosted URL
   - Click the "Install" button in the address bar or in the popup
   - The app will be added to your home screen/applications

2. **iOS (Safari)**:
   - Open the URL in Safari
   - Tap the Share button
   - Select "Add to Home Screen"

3. **Android (Chrome)**:
   - Open the URL in Chrome
   - Tap "Add to Home Screen" when prompted
   - Or use the menu → "Install App"

## Development Setup

### Prerequisites

- Node.js (for local development server)
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Local Development

1. **Clone or download this repository**

2. **Serve the app locally**:

   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using Python 2
   python -m SimpleHTTPServer 8000
   
   # Using Node.js (http-server)
   npx http-server -p 8000
   
   # Using PHP
   php -S localhost:8000
   ```

3. **Open in browser**:
   - Navigate to `http://localhost:8000`
   - Open DevTools and check the Console and Application tabs

4. **Test PWA features**:
   - Check Service Worker registration in DevTools > Application > Service Workers
   - Test offline mode by checking "Offline" in DevTools > Network
   - Test installation by clicking the install prompt

## Project Structure

```
lease-agreement-pwa/
├── index.html              # Main HTML file
├── manifest.json           # PWA manifest configuration
├── service-worker.js       # Service worker for offline support
├── app.js                  # Application JavaScript
├── styles.css              # Styling
├── icons/                  # App icons (various sizes)
│   ├── icon-72x72.png
│   ├── icon-96x96.png
│   ├── icon-128x128.png
│   ├── icon-144x144.png
│   ├── icon-152x152.png
│   ├── icon-192x192.png
│   ├── icon-384x384.png
│   └── icon-512x512.png
├── generate-icons.js       # Script to generate SVG icons
├── create-png-icons.js     # Script to convert/create PNG icons
└── README.md              # This file
```

## Customization

### Icons

The current icons are placeholders. To create professional icons:

**Option 1 - Use an online generator**:
1. Visit [RealFaviconGenerator](https://realfavicongenerator.net/)
2. Upload your logo (square, at least 512x512px)
3. Download and extract to the `icons/` folder

**Option 2 - Use the canvas package**:
```bash
npm install canvas
node create-png-icons.js
```

**Option 3 - Manual creation**:
- Design icons in your preferred graphics software
- Export as PNG files with the required sizes
- Place in the `icons/` folder

### Colors & Styling

Edit `styles.css` to customize:
- **CSS Variables** (`:root` section) - Change colors, spacing, etc.
- **Theme Color** - Update `--primary-color` and `--secondary-color`
- **Dark Mode** - Modify the `@media (prefers-color-scheme: dark)` section

### Manifest Configuration

Edit `manifest.json` to change:
- App name and description
- Theme colors
- Display mode
- Orientation preferences

## Deployment

### Option 1: Static Hosting (Recommended)

Deploy to any static hosting service:

- **Netlify**: Drag and drop the folder or connect to Git
- **Vercel**: Import the project or use the CLI
- **GitHub Pages**: Push to a repository and enable Pages
- **Firebase Hosting**: Use Firebase CLI to deploy
- **Cloudflare Pages**: Connect to Git repository

### Option 2: Traditional Web Hosting

1. Upload all files to your web server via FTP/SFTP
2. Ensure the root directory is accessible
3. Configure HTTPS (required for PWA features)

### Requirements for PWA

- ✅ **HTTPS**: PWAs require a secure connection (except localhost)
- ✅ **Service Worker**: Already configured in `service-worker.js`
- ✅ **Manifest**: Already configured in `manifest.json`
- ✅ **Icons**: Multiple sizes provided

## Testing

### Lighthouse Audit

1. Open DevTools in Chrome
2. Go to "Lighthouse" tab
3. Select "Progressive Web App" category
4. Click "Generate report"
5. Aim for a score of 90+

### PWA Checklist

- [ ] Service Worker registers successfully
- [ ] App works offline after first visit
- [ ] Install prompt appears
- [ ] Icons display correctly after installation
- [ ] Manifest is valid (check in DevTools > Application)
- [ ] HTTPS enabled (for production)
- [ ] Fast loading (< 3 seconds)
- [ ] Responsive on all devices

## Browser Support

- ✅ Chrome/Edge (Chromium) - Full support
- ✅ Firefox - Full support
- ✅ Safari 11.1+ - Most features supported
- ✅ Samsung Internet - Full support
- ⚠️ iOS Safari - Limited background sync

## Troubleshooting

### Service Worker not registering
- Check browser console for errors
- Ensure you're using HTTPS or localhost
- Clear browser cache and reload

### Install prompt not showing
- Wait a few seconds after page load
- Check manifest.json is valid
- Ensure all required icons are present
- Try in Incognito/Private mode

### App not working offline
- Visit the app once while online first
- Check Service Worker status in DevTools
- Clear cache and re-register Service Worker

### Icons not displaying
- Verify icon files exist in the `icons/` folder
- Check file names match manifest.json exactly
- Ensure icons are valid PNG files

## License

This project contains the Unity Nodes Lease Agreement Terms. Please refer to the content for legal terms and conditions.

## Contributing

To update the agreement content:
1. Edit `index.html`
2. Update the version number in `service-worker.js` (CACHE_NAME)
3. Test thoroughly before deployment

## Support

For issues related to:
- **The Agreement**: Contact Unity Nodes support
- **Technical Issues**: Check the troubleshooting section above
- **PWA Features**: Refer to [MDN PWA Documentation](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)

---

**Built with ❤️ for Unity Nodes Community**
