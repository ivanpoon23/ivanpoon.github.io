

const btn = document.querySelector("#addParagraphBtn"); // Select the button with id 'btn'
function addParagraph(){
    const pContent = 'You can find my projects at my github: https://github.com/ivanpoon23'; // Content for the new paragraph

    const newElement = document.createElement("p"); // Create a new paragraph element
    // Clear the input box after adding the paragraph
    newElement.textContent = pContent; // Set the content of the new paragraph
    document.body.appendChild(newElement); // Append the new paragraph to the body of the document
    // Optional: Scroll to the newly added paragraph
    newElement.scrollIntoView({ behavior: "smooth" }); // Scroll to the new paragraph smoothly
}
btn.onclick = addParagraph;

// Adding Image Changer
const myImage = document.querySelector("#myImage"); // Select the image with id 'myImage'
myImage.addEventListener("click", function() {
    const currentSrc = myImage.getAttribute("src"); // Get the current source of the image
    if (currentSrc == "portrait.png") { // Check if the current source is the first image
        myImage.src = "selfPortrait.png"; // Change to the second image
    } else {
        myImage.src = "portrait.png"; // Change back to the first image
    }
});
