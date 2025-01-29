let selectedEvent = "Hackathon"; // Default event set to Hackathon

// Function to set selected event
function setSelectedEvent(eventName) {
    selectedEvent = eventName;
}

// Function to update the info-box with event-specific data
function showSection(section) {
    const title = document.getElementById("info-title");
    const content = document.getElementById("info-content");

    // Event-specific details
    const eventDetails = {
        "Hackathon": {
            "eligibility": "Open to all college students.",
            "event": "Hackathon 2025 is a coding competition where participants build innovative software projects.",
            "topics": "AI, Blockchain, Web Development, Cybersecurity.",
            "register": "Registration is ₹600 per head. Deadline: 25th Feb 2025.",
            "venue": "SVIT Campus, Hyderabad.",
            "contact": "Contact: John Doe (+91 1234567890)"
        },
        "Code Marathon": {
            "eligibility": "Only undergraduate students can participate.",
            "event": "Code Marathon is a 5-hour nonstop coding challenge.",
            "topics": "Competitive Programming, Data Structures & Algorithms.",
            "register": "₹500 per participant. Registration closes on 20th Feb 2025.",
            "venue": "SVIT Auditorium, Hyderabad.",
            "contact": "Contact: Jane Doe (+91 9876543210)"
        },
        "Web App Development": {
            "eligibility": "Anyone passionate about web development.",
            "event": "Teams of 3-5 will build a full-stack web application in 48 hours.",
            "topics": "React, Node.js, Firebase, Tailwind CSS.",
            "register": "₹800 per team. Last date: 22nd Feb 2025.",
            "venue": "SVIT Hall A3.",
            "contact": "Contact: Sarah (+91 9191919191)"
        }
    };

    // If no event is selected, show default message
    if (!selectedEvent || !eventDetails[selectedEvent]) {
        title.textContent = "Information";
        content.innerHTML = "Please select an event first.";
        return;
    }

    // Check if section exists for the selected event
    if (eventDetails[selectedEvent][section]) {
        title.textContent = section.charAt(0).toUpperCase() + section.slice(1);
        content.innerHTML = eventDetails[selectedEvent][section];
    } else {
        title.textContent = "Information";
        content.innerHTML = "Details not available for this section.";
    }
}

// Attach event listeners to navigation links
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll("nav a");

    navLinks.forEach((link) => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent page reload
            const section = this.getAttribute("onclick").match(/'([^']+)'/)[1]; // Extract section name
            showSection(section);
        });
    });
});


function togglePopup(eventName = '') {
    const popup = document.getElementById('popup');
    const heading = document.getElementById('popup-heading');
    if (eventName) {
      heading.innerText = eventName;
    }
    popup.classList.toggle('hidden');
  }

  function navigateToNextPage() {
    window.location.href = "nextpage.html"; // Replace with your target URL
  }

  function navigateToNextPage() {
      const eventName = document.getElementById('popup-heading').innerText;
      const urlMap = {
          "Hackathon": "hackathon.html",
          "Code Marathon": "code-marathon.html",
          "E-Sports": "esports.html",
          "Paper Presentations": "paper-presentations.html",
          "Data Science Challenge": "data-science-challenge.html",
          "Web App Development": "web-app-development.html",
          "Project Expo": "project-expo.html",
          "Tech Talk": "tech-talk.html",
          "Logo Quiz": "logo-quiz.html"
      };
      
      const targetURL = urlMap[eventName] || "404.html"; // Fallback to a 404 page if event is not found
      window.location.href = targetURL;
  }

  function togglePopup(eventName, imageUrl) {
    const popup = document.getElementById("popup");
    const popupHeading = document.getElementById("popup-heading");
    const popupImage = document.getElementById("popup-img");

    if (popup.classList.contains("hidden")) {
        popupHeading.textContent = eventName;
        popupImage.src = imageUrl;
        popupImage.alt = eventName;
        popup.classList.remove("hidden");
    } else {
        popup.classList.add("hidden");
    }
}

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
