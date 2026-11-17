# Ex03-To-Do-List-using-JavaScript
A To-Do List is a simple task management application developed using HTML, CSS and JavaScript. It helps users organize and manage their daily activities efficiently.
## Name:Abinaya P
## Register Number:212225230003

## Date:17.11.2026

## AIM
To create a To-do Application with all features using JavaScript.

## ALGORITHM
### STEP 1
Build the HTML structure (index.html).

### STEP 2
Style the App (style.css).

### STEP 3
Plan the features the To-Do App should have.

### STEP 4
Create a To-do application using Javascript.

### STEP 5
Add functionalities.

### STEP 6
Test the App.

### STEP 7
Open the HTML file in a browser to check layout and functionality.

### STEP 8
Fix styling issues and refine content placement.

### STEP 9
Deploy the website.

### STEP 10
Upload to GitHub Pages for free hosting.

## PROGRAM
## web.html
```

<!DOCTYPE html>
<html>
<head>
    <title>To-Do List</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <div class="container">
        <h1>My To-Do List</h1>

        <input type="text" id="taskInput" placeholder="Enter your task">
        <button onclick="addTask()">Add</button>

        <ul id="taskList"></ul>
    </div>

    <script src="script.js"></script>
</body>
</html>

```
## style.css
```

body {
    font-family: Arial;
    background-color: lavender;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.container {
    background: white;
    padding: 30px;
    width: 350px;
    border-radius: 10px;
    text-align: center;
}

h1 {
    color: purple;
}

input {
    padding: 10px;
    width: 60%;
}

button {
    padding: 10px;
    background: purple;
    color: white;
    border: none;
    cursor: pointer;
}

li {
    background: #eee;
    padding: 10px;
    margin: 10px;
    text-align: left;
}

.completed {
    text-decoration: line-through;
    color: gray;
}

```
## Script.js
```

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

```




## OUTPUT
<img width="1812" height="968" alt="Screenshot 2026-11-17 124318" src="https://github.com/user-attachments/assets/c9c4f30e-63b1-410b-998d-7cac3286cecc" />



## RESULT
The program for creating To-do list using JavaScript is executed successfully.

