

const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {

    reveals.forEach((element) => {

        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const revealPoint = 100;

        if (elementTop < windowHeight - revealPoint) {
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async function(e) {
    e.preventDefault();

    const data = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
        message: document.getElementById("message").value
    };

    fetch("https://script.google.com/macros/s/AKfycbyICsICOWxZhRtlAVyZOqjUC8HRR3arIki5YMT4o45STMNCW8k0w2QsYLCt4NZ2oWmA8g/exec", {
        method: "POST",
        body: JSON.stringify(data)
    })
    .then(() => {
        alert("Thank you! Your message has been received.");
        contactForm.reset();
    })
    .catch(() => {
        alert("Something went wrong!");
    });
});

