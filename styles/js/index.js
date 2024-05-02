// import emailjs from 'emailjs-com';
const active_class = "inline-block  text-[#9f6160] border-b-2 border-[#9f6160] rounded-t-lg ";
const inactive_class = "inline-block  rounded-t-lg hover:text-[#9f6160]  ";
const ids = ["about", "projects", "contact"];

const tl= gsap.timeline();

function changeClass(event) {
    event.preventDefault();
    id = event.target.id;
    var tab = document.getElementById(id);
    tab.className = active_class;
    ids.forEach(function (item) {
        if (item !== id) {
            var elemToHide = document.getElementById(item);
            elemToHide.className = inactive_class;
            var elemToHide = document.getElementById(item + "-content");
            elemToHide.classList.remove("active");
            tl.to(elemToHide, { duration: 0.01, opacity: 0, display: "none" });
        }
    });
    var elemToShow = document.getElementById(id + "-content");
    elemToShow.classList.add("active");
    tl.to(elemToShow, {duration: 2, opacity: 1, display: "block"});   
}
