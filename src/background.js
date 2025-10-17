// Service Worker for Chrome extension
// Handles background tasks and responds to user events outside of the popup

// Listen for messages from popup
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log("Message received");
  if (message.action === "clearCache") {
    chrome.browsingData.removeCache({}, () => sendResponse({ success: true }));
    return true;
  }
});

// Handle extension installation
chrome.runtime.onInstalled.addListener(() => {
  // You can perform setup tasks here if needed
  console.log("Extension installed.");
});
