const frame = document.getElementById('web-frame');
const urlInput = document.getElementById('url-input');

document.getElementById('go-button').addEventListener('click', function() {
    const url = urlInput.value;
    frame.src = url.startsWith('http') ? url : 'http://' + url;
});

document.getElementById('back-button').addEventListener('click', function() {
    frame.contentWindow.history.back();
});

document.getElementById('forward-button').addEventListener('click', function() {
    frame.contentWindow.history.forward();
});
