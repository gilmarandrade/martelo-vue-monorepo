console.log('panel js')
const statusEl = document.getElementById('status')
const btnStartEl = document.getElementById('btnStart')
const btnStopEl = document.getElementById('btnStop')

let isRecording = false;

updateStatus()

btnStartEl.addEventListener('click', () => {
    console.log('start recording')
    isRecording = true
    updateStatus()
})

btnStopEl.addEventListener('click', () => {
    console.log('stop recording')
    isRecording = false
    updateStatus()
})

function updateStatus() {
    statusEl.innerHTML = isRecording
    if(isRecording) {
        btnStartEl.disabled = true
        btnStopEl.disabled = false
    } else {
        btnStartEl.disabled = false
        btnStopEl.disabled = true
    }
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log('detected event', message)
});


