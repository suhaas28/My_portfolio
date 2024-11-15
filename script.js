// Function to check if an element is at least 50% visible in the viewport
function checkVisibility() {
    const sections = document.querySelectorAll('.cont, .skillsc, .section-projects, .section-resume, .section-education, .section-contact'); // Target all specific sections

    sections.forEach(section => {
        const rect = section.getBoundingClientRect(); // Get the section's position
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;

        // Check if at least 50% of the section is visible in the viewport
        const isVisible = rect.top <= windowHeight * 0.5 && rect.bottom >= windowHeight * 0.5;

        if (isVisible) {
            section.classList.add('visible'); // Add 'visible' class when the section is 50% visible
        } else {
            section.classList.remove('visible'); // Remove 'visible' class when not visible
        }
    });
}

// Call the checkVisibility function on scroll and resize
window.addEventListener('scroll', checkVisibility);
window.addEventListener('resize', checkVisibility);

// Initialize visibility check on page load
document.addEventListener('DOMContentLoaded', checkVisibility);
