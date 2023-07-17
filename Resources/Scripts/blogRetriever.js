function retrieveTextFile(textFile){
    var location = "Resources/Blogs/" + textFile;
    fetch(location)
    .then(response => response.text())
    .then(data => {
        const blogContainer = document.getElementById('blogContainer');
        blogContainer.textContent = data;
    })
    .catch(error => {
        console.error('Error: ', error);
    })
}