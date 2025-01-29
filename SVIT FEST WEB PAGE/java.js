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
          "Vertex Tournament": "vertex-tournament.html",
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



  function showSection(section) {
    const title = document.getElementById("info-title");
    const content = document.getElementById("info-content");

    const sections = {
        "eligibility": {
            title: "Eligibility",
            content: "All Institution students are allowed."
        },
        "event": {
            title: "Event Description",
            content: "The Hackathon 2025 is an exciting event where participants collaborate to solve real-world challenges by developing innovative solutions, with workshops, team-building activities, and great prizes up for grabs."
        },
        "topics": {
            title: "Topics",
            content: "Topics include AI, Web Development, Cybersecurity, and IoT."
        },
        "register": {
            title: "Registration Details",
            content: "Registration is open until 25th February 2025 <br> Registration Fee : ₹600 per head."
        },
        "venue": {
            title: "Venue",
            content: "The event will be held at SVIT, Hyderabad."
        },
        "contact": {
            title: "Contact",
            content: `
                <strong>Contact Person:</strong> John Doe <br>
                <strong>Phone:</strong> +91 123 456 7890 <br>
                <strong>Email:</strong> technoudhbhav@gmail.com
            `
        }
    };

    if (sections[section]) {
        title.textContent = sections[section].title;
        content.innerHTML = sections[section].content;
    }
}



        
