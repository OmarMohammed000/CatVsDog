console.log("file is loaded")
document.getElementById("upload-form").addEventListener("submit", function (e) {
    e.preventDefault();
    let formData = new FormData(this);
    fetch("/upload", {
        method: "POST",
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        document.getElementsByClassName('result')[0].innerText = "Result: " + data.results;
    })
    .catch(error => {
        console.error(error);
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const hiddenTextElements = document.querySelectorAll('.animate-text');

    hiddenTextElements.forEach(function (element) {
        element.classList.add('visible-text');
    });
});