// Image Slider Functionality
let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = slides.children.length;

function showSlides() {
    slideIndex++;
    if (slideIndex >= totalSlides) {
        slideIndex = 0;
    }
    slides.style.transform = `translateX(${-slideIndex * 100}%)`;
}

setInterval(showSlides, 3000); // Change image every 3 seconds

// Show Image and Section Content
function showImage(imagePath, sectionText) {
    const displayArea = document.getElementById("display-area");
    // Clear previous content
    displayArea.innerHTML = '';

    // Insert the section text
    let content = `
        <h2>${sectionText}</h2>
        <img src="${imagePath}" alt="${sectionText}" style="width: 100%; max-width: 400px;">
    `;

    // Only add NIM if the section is "Nama: I Gusti Ngurah Indra Pradnyana"
    if (sectionText === "Nama: I Gusti Ngurah Indra Pradnyana") {
        content = `
            <h2>${sectionText}</h2>
            <p><strong>NIM: 2401010455</strong></p>
            <img src="${imagePath}" alt="${sectionText}" style="width: 100%; max-width: 400px;">
        `;
    }

    // Update the display area with the content
    displayArea.innerHTML = content;
}

// Function to display family images
function showFamily() {
    const displayArea = document.getElementById("display-area");
    // Clear previous content
    displayArea.innerHTML = '';

    // Show multiple images for the Family section
    displayArea.innerHTML = `
        <h2>My Family</h2>
        <div class="family-images">
            <img src="A&I.jpg" alt="Family Image 1">
            <img src="Me.jpg" alt="Family Image 2">
        </div>
    `;
}

// Function to go back to home (initial state)
function goHome() {
    const displayArea = document.getElementById("display-area");
    displayArea.innerHTML = `
        <h1>Get started!</h1>
        <p>Click Education, Family, or About to see more information.</p>
    `;
}
