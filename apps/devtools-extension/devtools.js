chrome.devtools.panels.create("Martelo Vue",
    "MyPanelIcon.png",
    "panel.html",
    function(panel) {
      // code invoked on panel creation
    }
);

chrome.scripting.executeScript({
  target: {
    tabId: chrome.devtools.inspectedWindow.tabId
  },
  files: ["./scripts/content_script.js"]
});



// Create a connection to the service worker
const serviceWorkerConnection = chrome.runtime.connect({
  name: "devtools-page"
});

// Send a periodic heartbeat to keep the port open.
setInterval(() => {
  serviceWorkerConnection.postMessage("heartbeat");
}, 15000);

