let images = document.querySelectorAll('img');

images.forEach(image => {
    // Generate a random degree between -10 and 10
    const randomDegree = Math.random() * 20 - 10; // (Math.random() * (max - min)) + min

    // Apply the CSS transform property to rotate the image
    image.style.transform = `rotate(${randomDegree}deg)`;
});