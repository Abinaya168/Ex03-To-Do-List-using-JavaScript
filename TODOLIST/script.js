
function addTask() {

    let input = document.getElementById("taskInput");
    let task = input.value;

    if (task === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    let span = document.createElement("span");
    span.innerText = task;

    span.onclick = function() {
        span.classList.toggle("completed");
    };

    let btn = document.createElement("button");
    btn.innerText = "Delete";

    btn.onclick = function() {
        li.remove();
    };

    li.appendChild(span);
    li.appendChild(btn);

    document.getElementById("taskList").appendChild(li);

    input.value = "";
}
