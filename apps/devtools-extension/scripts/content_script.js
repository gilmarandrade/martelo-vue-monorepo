(async () => {
    console.log('[martelo-vue] content_script.js', document.querySelector('#martelo-vue-capture-area'))

    // Sends a message to the service worker and receives a tip in response
    // const { tip } = await chrome.runtime.sendMessage({ greeting: 'tip' });

    let captureAreaEl = document.querySelector('#martelo-vue-capture-area')
    if(captureAreaEl) {
    } else {
        captureAreaEl = createDomElement(`<div id="martelo-vue-capture-area"></div>`);
      
        document.body.append(captureAreaEl);

        document.body.addEventListener('pointerdown', (e) => {
            console.log('pointerdown', e)
            chrome.runtime.sendMessage({
                event: 'POINTERDOWN',
                pointerType: e.pointerType,
                pointerId: e.pointerId,
                timeStamp: e.timeStamp
            })
        })
    }

})();

function createDomElement(html) {
    const dom = new DOMParser().parseFromString(html, 'text/html');
    return dom.body.firstElementChild;
}

function startedRecording() {
    console.log('started recording')
    let captureAreaEl = document.querySelector('#martelo-vue-capture-area')
    captureAreaEl.classList.add('is-recording')
}

function stopedRecording() {
    console.log('stoped recording')
    let captureAreaEl = document.querySelector('#martelo-vue-capture-area')
    captureAreaEl.classList.remove('is-recording')
}