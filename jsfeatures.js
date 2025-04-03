document.addEventListener("DOMContentLoaded", function() {
    // Smooth scrolling for nav links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Form validation
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault();
        let name = document.querySelector("input[type='text']").value;
        let email = document.querySelector("input[type='email']").value;
        let message = document.querySelector("textarea").value;

        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields.");
        } else {
            alert("Message sent successfully!");
            this.reset(); // Reset form
        }
    });
});