// Default consent
gtag('consent', 'default', {
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied',
  'analytics_storage': 'denied'
});

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