document.addEventListener("DOMContentLoaded", function() {
    const sessionContainer = document.getElementById("session-container");

    // Simulated session data
    const sessions = [
        {
            id: 'session-2',
            title: 'Session 2 - Arriving in Hammerfel',
            content: `As dawn broke over the Dragonreach Highlands, Caelynn continued her journey to Hammerfel...`,
            date: '28th of Elerrillë 953 M.A.'
        },
        {
            id: 'session-1',
            title: 'Session 1 - Chance Encounter',
            content: `Under the azure sky of Sylvora, the brave and determined Caelynn set forth on a noble quest...`,
            date: '27th of Elerrillë 953 M.A.'
        }
    ];

    sessions.forEach(session => {
        const sessionDiv = document.createElement("div");
        sessionDiv.className = "notes";
        sessionDiv.id = session.id;

        const sessionTitle = document.createElement("h2");
        const sessionLink = document.createElement("a"); // Create anchor element
        sessionLink.href = `session-notes.html#${session.id}`; // Set href attribute
        sessionLink.textContent = session.title; // Set text content
        sessionLink.classList.add("session-link"); // Add class to the anchor
        sessionTitle.appendChild(sessionLink); // Append anchor to h2 element

        const sessionContent = document.createElement("p");
        sessionContent.textContent = session.content;

        const sessionDate = document.createElement("p");
        sessionDate.innerHTML = `<em>${session.date}</em>`;

        sessionDiv.appendChild(sessionTitle);
        sessionDiv.appendChild(sessionContent);
        sessionDiv.appendChild(sessionDate);

        sessionContainer.appendChild(sessionDiv);
    });
});