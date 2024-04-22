
const active_class = "inline-block  text-blue-600 border-b-2 border-blue-600 rounded-t-lg  dark:text-blue-500 dark:border-blue-500";
const inactive_class = "inline-block   rounded-t-lg hover:text-blue-400   dark:hover:text-blue-400";
const ids = ["about", "projects", "guest-book"];

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
    