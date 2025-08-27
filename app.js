const urlInput = document.getElementById('url-input');
const goButton = document.getElementById('go-button');
const browserFrame = document.getElementById('browser-frame');
const aiButton = document.getElementById('ai-button');

function navigate() {
    let url = urlInput.value.trim();
    if (url === '') return;

    // Prepend https:// if no protocol is present
    if (!url.startsWith('http://') && !url.startsWith('https://')) {
        url = 'https://' + url;
    }

    browserFrame.src = url;
}

async function askAI() {
    try {
        const stream = await puter.ai.chat([
            { role: 'user', content: 'What is the capital of France?' },
        ]);

        let response = '';
        for await (const chunk of stream) {
            response += chunk;
        }
        
        puter.ui.alert(response);
    } catch (error) {
        console.error('AI Error:', error);
        puter.ui.alert('Could not connect to AI service.');
    }
}

goButton.addEventListener('click', navigate);
aiButton.addEventListener('click', askAI);

urlInput.addEventListener('keypress', (event) => {
    if (event.key === 'Enter') {
        navigate();
    }
});
