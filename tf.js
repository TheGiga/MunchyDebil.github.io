// Initial image sources
const image1 = "https://pbs.twimg.com/profile_images/1829637340060397571/HE-5ds1s_400x400.jpg";
const image2 = "https://cdn.7tv.app/emote/01GKAGMR6G00084NHE6NBXEP3R/4x.gif";

// Variable to track which image is currently displayed
let currentImage = image1;

document.getElementById("clickable-div").addEventListener("click", function() {
    const imgElement = document.getElementById("image-to-change");

    // Apply fade-out effect
    imgElement.classList.add("fade");

    // Wait for the fade-out to complete (500ms), then switch the image and fade-in
    setTimeout(function() {
        // Toggle between images
        currentImage = currentImage === image1 ? image2 : image1;
        imgElement.src = currentImage;

        // Remove fade-out class to trigger fade-in effect
        imgElement.classList.remove("fade");
    }, 500); // Duration of the fade-out
});
