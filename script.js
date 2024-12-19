// Mobile menu toggle
function toggleMenu() {
    const mobileMenu = document.getElementById("mobile-menu");

    if (mobileMenu.style.display === "block") {
    mobileMenu.style.display = "none";
    } else {
    mobileMenu.style.display = "block";
    }
}

  // Close mobile menu on link click
function closeMenu() {
    document.getElementById("mobile-menu").style.display = "none";
}

  // Cookie popup
function allConsentGranted() {
    document.getElementById("cookie-popup").style.display = "none";
}

function allConsentDenied() {
    document.getElementById("cookie-popup").style.display = "none";
}

// Cookie banner
const cookieBanner = document.getElementById('cookie-banner');
const managePreferencesButton = document.getElementById('customise');
const acceptAllButton = document.getElementById('accept-all');
const acceptAllButtonInModal = document.getElementById("preference-accept-all");
const preferenceModal = document.getElementById('preference-modal');
const savePreferencesButton = document.getElementById('save-preferences');

// Function to show the cookie banner
function showCookieBanner() {
  cookieBanner.style.display = 'flex';
}

// Function to show the preference modal
function showPreferenceModal() {
  preferenceModal.style.display = 'flex';
  cookieBanner.style.display = 'none'; // Hide the banner
}

// Function to hide the preference modal
function hidePreferenceModal() {
  preferenceModal.style.display = 'none';
}

// Function to handle cookie acceptance (replace with your actual cookie logic)
function acceptCookies() {
  if (event.target === acceptAllButtonInModal) {
  // Set cookies (replace with your actual cookie logic)
  document.cookie = 'performance=true; expires=Thu, 18 Dec 2043 10:30:00 UTC; path=/;';
  document.cookie = 'functional=true; expires=Thu, 18 Dec 2043 10:30:00 UTC; path=/;';
  document.cookie = 'targeting=true; expires=Thu, 18 Dec 2043 10:30:00 UTC; path=/;';

  // Hide the cookie banner
  cookieBanner.style.display = 'none';
  preferenceModal.style.display = 'none';
  }
}

function acceptCookies() {
  // Set cookies (replace with your actual cookie logic)
  document.cookie = 'performance=true; expires=Thu, 18 Dec 2043 10:30:00 UTC; path=/;';
  document.cookie = 'functional=true; expires=Thu, 18 Dec 2043 10:30:00 UTC; path=/;';
  document.cookie = 'targeting=true; expires=Thu, 18 Dec 2043 10:30:00 UTC; path=/;';

  // Hide the cookie banner
  cookieBanner.style.display = 'none';
  preferenceModal.style.display = 'none';
}

// Event listeners
managePreferencesButton.addEventListener('click', showPreferenceModal);
acceptAllButton.addEventListener('click', acceptCookies);
acceptAllButtonInModal.addEventListener("click", acceptCookies); 
savePreferencesButton.addEventListener('click', () => {
  // Get user preferences
  const performanceCookie = document.getElementById('performance').checked;
  const functionalCookie = document.getElementById('functional').checked;
  const targetingCookie = document.getElementById('targeting').checked;

  // Set cookies based on user preferences (replace with your actual cookie logic)
  if (performanceCookie) {
    document.cookie = 'performance=true; expires=Thu, 18 Dec 2043 10:30:00 UTC; path=/;';
  } else {
    document.cookie = 'performance=false; expires=Thu, 18 Dec 2043 10:30:00 UTC; path=/;';
  }
  if (functionalCookie) {
    document.cookie = 'functional=true; expires=Thu, 18 Dec 2043 10:30:00 UTC; path=/;';
  } else {
    document.cookie = 'functional=false; expires=Thu, 18 Dec 2043 10:30:00 UTC; path=/;';
  }
  if (targetingCookie) {
    document.cookie = 'targeting=true; expires=Thu, 18 Dec 2043 10:30:00 UTC; path=/;';
  } else {
    document.cookie = 'targeting=false; expires=Thu, 18 Dec 2043 10:30:00 UTC; path=/;';
  }

  // Hide the preference modal
  hidePreferenceModal();
  // Hide the cookie banner
  cookieBanner.style.display = 'none';
});

// Show the cookie banner on page load
showCookieBanner();