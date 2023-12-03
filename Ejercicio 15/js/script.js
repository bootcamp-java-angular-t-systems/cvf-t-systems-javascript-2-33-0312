function showImage(imageSrc, caption) {
    var mainImage = document.getElementById("mainImage");
    var captionElement = document.getElementById("caption");

    mainImage.src = imageSrc;
    captionElement.innerHTML = caption;
}