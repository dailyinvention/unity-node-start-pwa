# Getting Started With Your Unity License - Progressive Web App

A Progressive Web App (PWA) for Unity Nodes license information and resources. This app provides easy access to the lease agreement terms and can be installed on any device with offline support.

## Features

✅ **Installable**: Can be installed on desktop and mobile devices  
✅ **Offline Support**: Works without internet connection once installed  
✅ **Multi-page Navigation**: Menu-based interface with dedicated pages
✅ **App Integration**: Opens Unity Nodes mobile app from dashboard link
✅ **Responsive Design**: Optimized for all screen sizes with Material Design 3
✅ **Print Friendly**: Clean print layout for document printing  
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
├── index.html              # Main menu/home page
├── agreement.html          # Lease agreement terms page
├── manifest.json           # PWA manifest configuration
├── service-worker.js       # Service worker for offline support
├── app.js                  # Application JavaScript (PWA features, navigation)
├── styles.css              # Material Design 3 styling
├── icons/                  # App icons
│   ├── apple-touch-icon.png
│   ├── favicon.svg
│   ├── favicon.ico
│   ├── favicon-96x96.png
│   ├── web-app-manifest-192x192.png
│   └── web-app-manifest-512x512.png
├── package.json            # NPM configuration
└── README.md              # This file
```

## Pages

### Home Page (`index.html`)
- Welcome hero section
- Menu cards with navigation to:
  - Lease Agreement Terms
  - Unity Nodes Website
  - Support
  - Dashboard (opens Unity Nodes mobile app)

### Agreement Page (`agreement.html`)
- Complete lease agreement terms
- Back button navigation to home
- Print and share functionality
- 9 sections covering all terms and conditions

## Customization

### Icons

The app uses the following icon files in the `icons/` folder:
- `apple-touch-icon.png` - iOS home screen icon
- `favicon.svg` - Modern browsers favicon (scalable)
- `favicon.ico` - Legacy browsers favicon
- `favicon-96x96.png` - Standard size favicon
- `web-app-manifest-192x192.png` - PWA icon (192x192)
- `web-app-manifest-512x512.png` - PWA icon (512x512)

To update icons, replace these files with your own designs maintaining the same filenames.

### Colors & Styling

The app uses Material Design 3 with custom colors. Edit `styles.css` to customize:
- **Background**: Slate blue (`#6B7C9C`)
- **Cards**: White (`#FFFFFF`)
- **Text**: Black (`#000000`)
- **Headers**: Light gray (`#E8E8E8`)
- **Icons**: Dark gray (`#4A4A4A`)
- **Theme Color**: Purple (`#6750A4`)

Design features:
- No rounded corners (all `border-radius: 0`)
- No gradients (solid colors only)
- Material elevation shadows
- Responsive grid layout

### Manifest Configuration

Edit `manifest.json` to change:
- App name: "Getting Started With Your Unity License"
- Short name: "Unity License"
- Theme color: `#6750A4` (purple)
- Display mode: `standalone`
- Orientation: `portrait-primary`
- Icon references

### Mobile App Integration

The dashboard link automatically detects the platform and opens the Unity Nodes mobile app:
- **Android**: Uses package `io.unitynodes.unityapp`
- **iOS**: Uses URL scheme `unitynodes://`
- **Other platforms**: Shows message to use mobile app

To modify app integration, edit the dashboard link handler in `app.js`.

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

To update content:
1. Edit `index.html` for the home page menu
2. Edit `agreement.html` for the lease agreement terms
3. Update the version number in `service-worker.js` (CACHE_NAME) after changes
4. Test thoroughly before deployment

## Support

For issues related to:
- **The License Agreement**: Contact Unity Nodes support
- **Technical Issues**: Check the troubleshooting section above
- **PWA Features**: Refer to [MDN PWA Documentation](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)

---

**Built for Unity Nodes Community**
