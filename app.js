const urlInput = document.getElementById('url-input');
const goButton = document.getElementById('go-button');
const browserFrame = document.getElementById('browser-frame');

function navigate() {
    let url = urlInput.value.trim();
    if (url === '') return;

    // Prepend https:// if no protocol is present
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }

    browserFrame.src = url;
}

goButton.addEventListener('click', navigate);

urlInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        navigate();
    }
});
