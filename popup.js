function getStatus (statusText) {
    document.getElementById('status').textContent = statusText;
}

function renderImg  (imageData) { 
    document.getElementById('status').href = imageData.url;
    document.getElementById('image').src = imageData.fixed_height_small_url;
}

async function getBoobs () {
    let url = 'https://api.giphy.com/v1/gifs/random?api_key=m1iZrGv6Vnkuxi9KBnLQPhkkXvDy1lJp&tag=boobs';
    let result = await fetch(url);
    let jsonResult = await result.json();
    return jsonResult.data;
}

document.addEventListener('DOMContentLoaded', async () => {
    getStatus('Looking for boobies ...');
    var imageData = await getBoobs();
    getStatus('');
    renderImg(imageData);
    console.log(imageData);
});