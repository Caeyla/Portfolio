// import emailjs from 'emailjs-com';
const active_class = "inline-block  text-blue-600 border-b-2 border-blue-600 rounded-t-lg  dark:text-blue-500 dark:border-blue-500";
const inactive_class = "inline-block   rounded-t-lg hover:text-blue-400   dark:hover:text-blue-400";
const ids = ["about", "projects", "contact"];

function changeClass(event) {
    id = event.target.id;
    var element = document.getElementById(id);
    element.className = active_class;
    var element = document.getElementById(id + "-content");
    element.classList.add("active");
    ids.forEach(function (item) {
        if (item !== id) {
            var element = document.getElementById(item);
            element.className = inactive_class;
            var element = document.getElementById(item + "-content");
            element.classList.remove("active");
        }
    });
}
// send email with email js
document.getElementById("send").addEventListener("click", function () {
    emailjs.sendForm('contact-portfolio', 'template_e5rxge1', '#myForm')
        .then(function (response) {
            alert("Email sent successfully");
        }, function (error) {
            alert("Failed to send email");
        });
});