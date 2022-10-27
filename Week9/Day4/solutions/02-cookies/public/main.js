/* ============================== PHASE 1 + 2 ============================== */

// For storing user's theme selection in cookies
function storeTheme(themeName) {
  // Your code here
  document.cookie = `themeName=${themeName};max-age=10`;
}

// For restoring theme from cookies, if selected by the user in the past
function restoreTheme() {
  // Your code here
  const documentCookies = document.cookie;

  console.log("document cookies: ", documentCookies);

  const documentCookieParts = documentCookies.split("=");
  console.log("document cookie parts: ", documentCookieParts);

  const themeName = documentCookieParts[1];

  console.log("theme name: ", themeName);

  if (themeName) setTheme(themeName);
}

// For clearing theme selection from cookies (reset to default)
function clearTheme() {
  // Your code here
  document.cookie = "themeName=;max-age=0";
}

/* ================================ PHASE 3 ================================ */

// For storing user's display name in cookies
function storeName(displayName) {
  // Your code here
  // create a  cookie the way you normally would with document.cookie
}

// For restoring user's display name from cookies, if set in the past
function restoreName() {
  // Your code here

  // TO DO! build the getCookies function
  const cookies = getCookies();
}

const getCookies = () => {
  // CONSOLE LOG ALL VARIABLES
  // store the document cookies to allCookies
  let allCookies;

  //split the cookies on the "=" and save the result to the cookieParts variable
  const cookieParts = allCookies.split("; "); // sometimes a space if found between cookies so we must include that space in our split

  //map cookieParts and return a new key/value pair. return the element split @ the "="
  const cookiePairs = cookieParts.map((cookie) => {
    // console log the cookie and return it after splitting at the "="
  });

  let cookieObject = {};

  // iterate through the cookiePairs and set the cookie object key to the name of the cookie, and the value to the value of the cookie.
  // hint: index 0 holds the key and index 1 holds the value

  // return the cookieObject

  // Use the cookie object to modify the set theme functions as they won't work without the modification.
};

// For clearing user's display name from cookies
function clearName() {
  // Your code here
}

/* ========================================================================= */
/* ====================== DO NOT EDIT BELOW THIS LINE ====================== */
/* ========================================================================= */

// ===== THEME CONTROL

// For changing one theme button's styling to indicate which theme is selected

function toggleButtonSelection(themeName, selected) {
  const btn = document.getElementById(`theme-button-${themeName}`);
  if (btn) {
    if (selected) {
      btn.classList.add("selected");
    } else {
      btn.classList.remove("selected");
    }
  }
}

// Use a particular theme

function setTheme(themeName) {
  // Clear previous selection so buttons don't get stuck in selected state
  resetTheme();

  // Remember user's selection by storing it in their browser
  storeTheme(themeName);

  // Apply the theme to the page document
  document.documentElement.className = `theme-${themeName}`;

  // Show which button is selected
  toggleButtonSelection(themeName, true);
}

// Use default theme

function resetTheme() {
  // Remove selection styling from all buttons
  toggleButtonSelection("dragon", false);
  toggleButtonSelection("griffin", false);
  toggleButtonSelection("wizard", false);

  // Set default theme so header and footer are contrast colors
  document.documentElement.className = `theme-none`;
}

// For adding event listeners on the theme buttons

function addThemeEventListeners() {
  const themeNames = ["dragon", "griffin", "wizard"];
  themeNames.forEach((themeName) => {
    const button = document.getElementById(`theme-button-${themeName}`);
    button.addEventListener("click", () => setTheme(themeName));
  });
}

// ===== NAME CONTROL

// For assigning change event to input field

function assignChangeEvent(inputId, handleChange) {
  const input = document.getElementById(inputId);
  if (input) {
    input.addEventListener("input", (event) => {
      handleChange(event.target.value);
    });
  }
}

// For setting value on input field

function setInputValue(inputId, value) {
  const input = document.getElementById(inputId);
  if (input) {
    input.value = value;
  }
}

// For resetting the display name to empty string

function resetName() {
  setInputValue("display-name", "");
}

// ===== CLEAR ALL

// For the clear/reset button

function clearAll() {
  // Remove from browser storage
  clearTheme();
  clearName();

  // Reset the page
  resetTheme();
  resetName();
}

// For adding click event listener on the Clear All button

function addClearAllEventListener() {
  const button = document.getElementById("clear-all");
  button.addEventListener("click", clearAll);
}

// ===== INITIALIZE PAGE

// For setting a theme when the page loads (called by body's onload event)

function initializePage() {
  // Set default theme so header & footer have dark backgrounds
  resetTheme();

  // Restore user's previous theme selection, if it exists
  restoreTheme();

  // Assign event to name input
  assignChangeEvent("display-name", storeName);

  // Restore user's previous name selection, if it exists
  restoreName();

  // Add event listeners
  addThemeEventListeners();
  addClearAllEventListener();
}

window.addEventListener("DOMContentLoaded", initializePage);
