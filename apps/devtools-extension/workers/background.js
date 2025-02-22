var openCount = 0;
chrome.runtime.onConnect.addListener(function (port) {
    if (port.name == "devtools-page") {
      if (openCount == 0) {
        console.log("DevTools window opening.", port);
      }
      openCount++;

      port.onDisconnect.addListener(function(port) {
          openCount--;
          if (openCount == 0) {
            console.log("Last DevTools window closing.", port);
          }
      });
    }
});



// import './sw-omnibox.js';
// import './sw-tips.js';

// // Save default API suggestions
// chrome.runtime.onInstalled.addListener(({ reason }) => {
//     if (reason === 'install') {
//         chrome.storage.local.set({ tip: 'Lorem ipsum dolor' });
//     }
// });

// // Send tip to content script via messaging
// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     if (message.greeting === 'tip') {
//         chrome.storage.local.get('tip').then(sendResponse);
//       return true;
//     }
// });


// chrome.runtime.onInstalled.addListener(() => {
//     chrome.action.setBadgeText({
//       text: "OFF",
//     });
// });

// const extensions = 'https://developer.chrome.com/docs/extensions';
// const webstore = 'https://developer.chrome.com/docs/webstore';

// chrome.action.onClicked.addListener(async (tab) => {
//     console.log('clicked', tab.url)
//   if (tab.url.startsWith(extensions) || tab.url.startsWith(webstore)) {
//     // Retrieve the action badge to check if the extension is 'ON' or 'OFF'
//     const prevState = await chrome.action.getBadgeText({ tabId: tab.id });
//     // Next state will always be the opposite
//     const nextState = prevState === 'ON' ? 'OFF' : 'ON';

//     // Set the action badge to the next state
//     await chrome.action.setBadgeText({
//       tabId: tab.id,
//       text: nextState,
//     });

//     if (nextState === "ON") {
//         // Insert the CSS file when the user turns the extension on
//         await chrome.scripting.insertCSS({
//           files: ["focus-mode.css"],
//           target: { tabId: tab.id },
//         });
//       } else if (nextState === "OFF") {
//         // Remove the CSS file when the user turns the extension off
//         await chrome.scripting.removeCSS({
//           files: ["focus-mode.css"],
//           target: { tabId: tab.id },
//         });
//       }
//   }
// });