const refreshBtn = document.getElementById("refresh-btn");
const shortenBtn = document.getElementById("shorten-btn");

shortenBtn.addEventListener('click', shortenURL);

function shortenURL(){
    var original = document.getElementById('url-before').value;
    var apiToShorten = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(original);
    shortenedURL = document.getElementById('result');

    fetch(apiToShorten).then(response => response.text()).then(data => {
        shortenedURL.value = data;
    }).catch(error =>{ shortenedURL.value = "Error: Cannot shorten URL."; });

};

const copyToClipboard = (textId) =>{
    const text = document.getElementById(textId);
    text.select();
    document.execCommand("copy");
};

refreshBtn.addEventListener('click', () => {
    location.reload();
});