function changeImage(imageSource, button) {
    // Change the image source
    document.getElementById('gallery-image').src = imageSource;

    // Remove "selected" class from all buttons
    const buttons = document.querySelectorAll('.image-button');
    buttons.forEach(btn => btn.classList.remove('selected'));

    // Add "selected" class to the clicked button
    button.classList.add('selected');
}
