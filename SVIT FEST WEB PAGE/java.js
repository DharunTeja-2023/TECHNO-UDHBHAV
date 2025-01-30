let selectedEvent = ""; // Default event set to Hackathon

// Function to set selected event
function setSelectedEvent(eventName) {
    selectedEvent = eventName;
}

// Function to update the info-box when a navbar item is clicked
function showSection(section) {
    const title = document.getElementById("info-title");
    const content = document.getElementById("info-content");

    // Define the information for each section
    const infoData = {
        "eligibility": "Eligibility: Open to all students across various colleges.",
        "topics": "Topics: AI, Cybersecurity, Blockchain, Web Development, and more.",
        "event": "Event Details: A grand competition where students showcase their technical skills.",
        "register": "Registration Fee: ₹500 per participant. Deadline: 25th Feb 2025.",
        "venue": "Venue: SVIT Campus, Hyderabad.",
        "contact": "Contact: Event Coordinator (+91 9876543210)"
    };

    // Update info-box content
    if (infoData[section]) {
        title.textContent = section.charAt(0).toUpperCase() + section.slice(1);
        content.innerHTML = infoData[section];
    } else {
        title.textContent = "Information";
        content.innerHTML = "Details not available.";
    }
}

// Attach event listeners to navbar items
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default page reload

            // Get the section to show from the clicked button's data attribute
            const section = this.getAttribute("data-section");
            if (section) {
                showSection(section);
            }
        });
    });
});


Document.addEventListener("DOMContentLoaded", () => {
    const eventNames = document.querySelectorAll(".event-name");
    const popup = document.getElementById("popup");
    const popupImg = document.getElementById("popup-img");

    eventNames.forEach(event => {
        event.addEventListener("mouseenter", (e) => {
            const imgSrc = e.target.getAttribute("data-image");
            popupImg.src = imgSrc;
            popup.style.display = "block";

            // Position popup near the event name
            popup.style.top = `${e.target.offsetTop + 20}px`;
            popup.style.left = `${e.target.offsetLeft + 150}px`;
        });

        event.addEventListener("mouseleave", () => {
            popup.style.display = "none";
        });
    });
});
// Function to download the event rules as a PDF
function downloadPDF(eventName) {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    // Define event rules
    const rulesData = {
        "Hackathon": [
            "Follow all event guidelines.",
            "No plagiarism or cheating.",
            "Team collaboration is encouraged.",
            "Submit all code and presentations before the deadline."
        ],
        "Code Marathon": [
            "Only undergraduate students can participate.",
            "Code must be written in the provided time frame.",
            "Use of external libraries is allowed only if specified.",
            "No collaboration between participants during the event."
        ],
        "E-Sports": [
            "Only undergraduate students can participate.",
            "Code must be written in the provided time frame.",
            "Use of external libraries is allowed only if specified.",
            "No collaboration between participants during the event."
        ],
        "Paper Presentations": [
            "Only undergraduate students can participate.",
            "Code must be written in the provided time frame.",
            "Use of external libraries is allowed only if specified.",
            "No collaboration between participants during the event."
        ],
        "Data Science Challenge": [
            "Only undergraduate students can participate.",
            "Code must be written in the provided time frame.",
            "Use of external libraries is allowed only if specified.",
            "No collaboration between participants during the event."
        ],
        "Web App Development": [
            "Only undergraduate students can participate.",
            "Code must be written in the provided time frame.",
            "Use of external libraries is allowed only if specified.",
            "No collaboration between participants during the event."
        ],
        "Project Expo": [
            "Only undergraduate students can participate.",
            "Code must be written in the provided time frame.",
            "Use of external libraries is allowed only if specified.",
            "No collaboration between participants during the event."
        ],
        "Tech Talk": [
            "Only undergraduate students can participate.",
            "Code must be written in the provided time frame.",
            "Use of external libraries is allowed only if specified.",
            "No collaboration between participants during the event."
        ],
        "Logo Quiz": [
            "Only undergraduate students can participate.",
            "Code must be written in the provided time frame.",
            "Use of external libraries is allowed only if specified.",
            "No collaboration between participants during the event."
        ]
    };

    // Check if event rules exist
    if (!rulesData[eventName]) {
        alert("Rules not found for " + eventName);
        return;
    }

    // Add event title to PDF
    doc.setFontSize(18);
    doc.text(eventName + " Rules", 10, 10);

    // Add rules content
    doc.setFontSize(12);
    let yPosition = 20;
    rulesData[eventName].forEach((rule, index) => {
        doc.text(`${index + 1}. ${rule}`, 10, yPosition);
        yPosition += 10; // Move down for next line
    });

    // Automatically download the PDF
    doc.save(`${eventName}-Rules.pdf`);
}