document.getElementById('go-button').addEventListener('click', function() {
    const url = document.getElementById('url-input').value;
    document.getElementById('web-frame').src = url.startsWith('http') ? url : 'http://' + url;
});
