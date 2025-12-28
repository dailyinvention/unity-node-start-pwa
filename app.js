// Register service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then((registration) => {
        console.log('ServiceWorker registration successful:', registration.scope);
      })
      .catch((error) => {
        console.log('ServiceWorker registration failed:', error);
      });
  });
}

// PWA Install prompt
let deferredPrompt;
const installPrompt = document.getElementById('install-prompt');
const installButton = document.getElementById('install-button');
const dismissButton = document.getElementById('dismiss-button');

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent the mini-infobar from appearing on mobile
  e.preventDefault();
  // Stash the event so it can be triggered later
  deferredPrompt = e;
  // Show the install prompt
  installPrompt.classList.remove('hidden');
});

installButton.addEventListener('click', async () => {
  if (deferredPrompt) {
    // Show the install prompt
    deferredPrompt.prompt();
    // Wait for the user to respond to the prompt
    const { outcome } = await deferredPrompt.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    // Clear the deferredPrompt
    deferredPrompt = null;
    // Hide the install prompt
    installPrompt.classList.add('hidden');
  }
});

dismissButton.addEventListener('click', () => {
  installPrompt.classList.add('hidden');
});

// Handle app installed event
window.addEventListener('appinstalled', () => {
  console.log('PWA was installed');
  deferredPrompt = null;
});

// Check if app is running as PWA
function isPWA() {
  return window.matchMedia('(display-mode: standalone)').matches || 
         window.navigator.standalone === true;
}

if (isPWA()) {
  console.log('Running as PWA');
}

// Add smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// Print functionality
const printBtn = document.getElementById('print-btn');
if (printBtn) {
  printBtn.addEventListener('click', () => {
    window.print();
  });
}

// Share functionality
const shareBtn = document.getElementById('share-btn');
if (shareBtn) {
  shareBtn.addEventListener('click', async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Unity Nodes Lease Agreement',
          text: 'Unity Nodes Lease Agreement Terms',
          url: window.location.href
        });
      } catch (err) {
        if (err.name !== 'AbortError') {
          console.error('Share failed:', err);
        }
      }
    } else {
      // Fallback: copy URL to clipboard
      navigator.clipboard.writeText(window.location.href).then(() => {
        showStatus('URL copied to clipboard', 'success');
      });
    }
  });
}

// Track online/offline status
window.addEventListener('online', () => {
  console.log('App is online');
  showStatus('You are online', 'success');
});

window.addEventListener('offline', () => {
  console.log('App is offline');
  showStatus('You are offline - viewing cached version', 'warning');
});

function showStatus(message, type) {
  const statusDiv = document.createElement('div');
  statusDiv.className = `status-message ${type}`;
  statusDiv.textContent = message;
  document.body.appendChild(statusDiv);
  
  setTimeout(() => {
    statusDiv.remove();
  }, 3000);
}

// Dashboard link handler
const dashboardLink = document.getElementById('dashboard-link');
if (dashboardLink) {
  dashboardLink.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Detect platform
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isAndroid = /android/i.test(userAgent);
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    
    if (isAndroid) {
      // Try to open Android app
      window.location.href = 'intent://unitynodes#Intent;scheme=unitynodes;package=io.unitynodes.unityapp;end';
    } else if (isIOS) {
      // Try to open iOS app (you'll need to provide the iOS URL scheme)
      window.location.href = 'unitynodes://';
      // Fallback to App Store if app is not installed
      setTimeout(() => {
        window.location.href = 'https://apps.apple.com/app/unity-nodes';
      }, 500);
    } else {
      // For other platforms, show a message or redirect to web dashboard
      showStatus('Please use the Unity Nodes mobile app', 'warning');
    }
  });
}
