# Ex03 TODO LIST
## Date: 12/08/2026

## AIM
To create a Portfolio using HTML and CSS.

## ALGORITHM
### STEP 1
Create an HTML file (index.html)

### STEP 2
Create a CSS file (style.css)

### STEP 3
Include a navigation bar with links to different sections.

### STEP 4
Add structured sections for introduction, about, projects, and contact details.

### STEP 5
Define global styles for fonts, colors, and layout.

### STEP 6
Style the header, navigation bar, and sections.

### STEP 7
Use Flexbox or CSS Grid for layout design.

### STEP 8
Add hover effects and transitions for interactivity.

### STEP 9
Add Images and Media.

### STEP 10
Use optimized images for a professional look.

### STEP 11
Open the HTML file in a browser to check layout and functionality.

### STEP 12
Fix styling issues and refine content placement.

### STEP 13
Deploy the Portfolio.

### STEP 14
Upload to GitHub Pages for free hosting.

## PROGRAM
## INDEX.HTML
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Lavender Tasks | Productivity Dashboard</title>

    <link rel="stylesheet" href="style.css">
</head>

<body>

<div class="app">

    <!-- SIDEBAR -->
    <aside class="sidebar">

        <div class="logo">
            <div class="logo-icon">✦</div>
            <div>
                <h2>Lavender</h2>
                <span>Tasks</span>
            </div>
        </div>

        <nav>

            <p class="menu-title">WORKSPACE</p>

            <button class="side-link active">
                <span>⌂</span>
                Dashboard
            </button>

            <button class="side-link">
                <span>◷</span>
                My Tasks
            </button>

            <button class="side-link">
                <span>✓</span>
                Completed
            </button>

        </nav>

        <div class="sidebar-bottom">

            <div class="quote">
                <span>✦</span>
                <p>Small steps every day create big results.</p>
            </div>

            <button id="themeBtn" class="theme-btn">
                ◐ &nbsp; Appearance
            </button>

        </div>

    </aside>


    <!-- MAIN CONTENT -->
    <main class="main">

        <!-- TOP BAR -->
        <header class="topbar">

            <div>
                <p class="welcome">Good evening 👋</p>
                <h1>My Workspace</h1>
            </div>

            <div class="top-actions">

                <div class="date">
                    <span>◷</span>
                    <span id="todayDate"></span>
                </div>

                <button class="avatar">L</button>

            </div>

        </header>


        <!-- STATISTICS -->
        <section class="stats">

            <div class="stat-card">

                <div class="stat-icon purple">✓</div>

                <div>
                    <span>Total Tasks</span>
                    <strong id="totalTasks">0</strong>
                </div>

            </div>


            <div class="stat-card">

                <div class="stat-icon blue">◷</div>

                <div>
                    <span>In Progress</span>
                    <strong id="activeTasks">0</strong>
                </div>

            </div>


            <div class="stat-card">

                <div class="stat-icon green">✓</div>

                <div>
                    <span>Completed</span>
                    <strong id="completedTasks">0</strong>
                </div>

            </div>


            <div class="stat-card">

                <div class="stat-icon pink">%</div>

                <div>
                    <span>Progress</span>
                    <strong id="progressText">0%</strong>
                </div>

            </div>

        </section>


        <!-- PROGRESS -->
        <section class="progress-card">

            <div class="progress-header">

                <div>
                    <h3>Today's Progress</h3>
                    <p>Keep going, you're doing great!</p>
                </div>

                <strong id="progressNumber">0%</strong>

            </div>

            <div class="progress-bar">
                <div id="progressFill"></div>
            </div>

        </section>


        <!-- TASK SECTION -->
        <section class="tasks-section">

            <div class="section-header">

                <div>
                    <h2>Your Tasks</h2>
                    <p>Organize your day and stay productive.</p>
                </div>

                <button id="addBtn" class="add-btn">
                    <span>＋</span> New Task
                </button>

            </div>


            <!-- SEARCH + FILTER -->
            <div class="toolbar">

                <div class="search">
                    <span>⌕</span>
                    <input
                        type="text"
                        id="searchInput"
                        placeholder="Search your tasks..."
                    >
                </div>

                <div class="filters">

                    <button class="filter active" data-filter="all">
                        All
                    </button>

                    <button class="filter" data-filter="active">
                        Active
                    </button>

                    <button class="filter" data-filter="completed">
                        Completed
                    </button>

                </div>

            </div>


            <!-- TASK LIST -->
            <div id="taskList" class="task-list"></div>


            <!-- BOTTOM -->
            <div class="task-footer">

                <span id="taskCount">0 tasks remaining</span>

                <button id="clearCompleted">
                    Clear completed
                </button>

            </div>

        </section>

    </main>

</div>


<!-- ADD TASK MODAL -->

<div id="modal" class="modal">

    <div class="modal-box">

        <div class="modal-header">

            <div>
                <span class="modal-label">NEW TASK</span>
                <h2>Create a Task</h2>
            </div>

            <button id="closeModal">×</button>

        </div>


        <label>Task name</label>

        <input
            type="text"
            id="taskInput"
            placeholder="What needs to be done?"
        >


        <div class="form-row">

            <div>

                <label>Priority</label>

                <select id="priority">

                    <option value="Low">Low</option>
                    <option value="Medium" selected>Medium</option>
                    <option value="High">High</option>

                </select>

            </div>


            <div>

                <label>Due date</label>

                <input type="date" id="dueDate">

            </div>

        </div>


        <button id="saveTask" class="save-btn">
            Create Task
        </button>

    </div>

</div>


<script src="script.js"></script>

</body>
</html>
```
## SCRIPT.JS
```
// ===============================
// VARIABLES
// ===============================

let tasks = JSON.parse(localStorage.getItem("lavenderTasks")) || [];

let currentFilter = "all";


// ===============================
// ELEMENTS
// ===============================

const modal = document.getElementById("modal");

const addBtn = document.getElementById("addBtn");

const closeModal = document.getElementById("closeModal");

const saveTask = document.getElementById("saveTask");

const taskInput = document.getElementById("taskInput");

const priority = document.getElementById("priority");

const dueDate = document.getElementById("dueDate");

const taskList = document.getElementById("taskList");

const searchInput = document.getElementById("searchInput");

const clearCompleted =
    document.getElementById("clearCompleted");

const themeBtn =
    document.getElementById("themeBtn");


// ===============================
// DATE
// ===============================

const date = new Date();

document.getElementById("todayDate").textContent =
    date.toLocaleDateString("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric"
    });


// ===============================
// OPEN MODAL
// ===============================

addBtn.addEventListener("click", () => {

    modal.classList.add("show");

    setTimeout(() => {
        taskInput.focus();
    }, 100);

});


// ===============================
// CLOSE MODAL
// ===============================

closeModal.addEventListener("click", () => {

    modal.classList.remove("show");

});


// Close when clicking outside

modal.addEventListener("click", (e) => {

    if (e.target === modal) {
        modal.classList.remove("show");
    }

});


// ===============================
// CREATE TASK
// ===============================

saveTask.addEventListener("click", createTask);

taskInput.addEventListener("keypress", (e) => {

    if (e.key === "Enter") {
        createTask();
    }

});


function createTask() {

    const title = taskInput.value.trim();

    if (!title) {

        alert("Please enter a task.");

        return;
    }


    const task = {

        id: Date.now(),

        title: title,

        priority: priority.value,

        dueDate: dueDate.value,

        completed: false

    };


    tasks.push(task);

    saveTasks();

    displayTasks();


    // Reset

    taskInput.value = "";

    dueDate.value = "";

    priority.value = "Medium";

    modal.classList.remove("show");

}


// ===============================
// DISPLAY TASKS
// ===============================

function displayTasks() {

    taskList.innerHTML = "";


    let filteredTasks = [...tasks];


    // Filter

    if (currentFilter === "active") {

        filteredTasks =
            filteredTasks.filter(task => !task.completed);

    }


    if (currentFilter === "completed") {

        filteredTasks =
            filteredTasks.filter(task => task.completed);

    }


    // Search

    const search =
        searchInput.value.toLowerCase().trim();


    if (search) {

        filteredTasks =
            filteredTasks.filter(task =>
                task.title.toLowerCase().includes(search)
            );

    }


    // Empty state

    if (filteredTasks.length === 0) {

        taskList.innerHTML = `

            <div style="
                text-align:center;
                padding:45px 10px;
                color:#a49aa9;
            ">

                <div style="
                    font-size:35px;
                    margin-bottom:10px;
                ">
                    ✦
                </div>

                <strong>No tasks found</strong>

                <p style="
                    font-size:12px;
                    margin-top:5px;
                ">
                    Create a new task to get started.
                </p>

            </div>
        `;

        updateStats();

        return;
    }


    filteredTasks.forEach(task => {

        const li =
            document.createElement("div");


        li.className =
            `task ${task.completed ? "completed" : ""}`;


        li.innerHTML = `

            <input
                type="checkbox"
                class="check-task"
                data-id="${task.id}"
                ${task.completed ? "checked" : ""}
            >


            <div class="task-info">

                <div class="task-title">
                    ${escapeHTML(task.title)}
                </div>

                <div class="task-details">

                    ${
                        task.dueDate
                        ? "Due " + formatDate(task.dueDate)
                        : "No due date"
                    }

                    <span class="
                        priority
                        ${task.priority.toLowerCase()}
                    ">
                        ${task.priority}
                    </span>

                </div>

            </div>


            <div class="task-actions">

                <button
                    class="edit-btn"
                    data-id="${task.id}">
                    ✎
                </button>

                <button
                    class="delete-btn"
                    data-id="${task.id}">
                    ×
                </button>

            </div>

        `;


        taskList.appendChild(li);

    });


    addTaskEvents();

    updateStats();

}


// ===============================
// TASK EVENTS
// ===============================

function addTaskEvents() {


    // Checkbox

    document.querySelectorAll(".check-task")
        .forEach(check => {

            check.addEventListener("change", () => {

                const id =
                    Number(check.dataset.id);


                const task =
                    tasks.find(t => t.id === id);


                task.completed =
                    check.checked;


                saveTasks();

                displayTasks();

            });

        });


    // Edit

    document.querySelectorAll(".edit-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                const id =
                    Number(button.dataset.id);


                const task =
                    tasks.find(t => t.id === id);


                const newTitle =
                    prompt("Edit task:", task.title);


                if (
                    newTitle !== null &&
                    newTitle.trim() !== ""
                ) {

                    task.title =
                        newTitle.trim();


                    saveTasks();

                    displayTasks();

                }

            });

        });


    // Delete

    document.querySelectorAll(".delete-btn")
        .forEach(button => {

            button.addEventListener("click", () => {

                const id =
                    Number(button.dataset.id);


                tasks =
                    tasks.filter(
                        task => task.id !== id
                    );


                saveTasks();

                displayTasks();

            });

        });

}


// ===============================
// FILTER
// ===============================

document.querySelectorAll(".filter")
    .forEach(button => {

        button.addEventListener("click", () => {

            document
                .querySelectorAll(".filter")
                .forEach(btn =>
                    btn.classList.remove("active")
                );


            button.classList.add("active");


            currentFilter =
                button.dataset.filter;


            displayTasks();

        });

    });


// ===============================
// SEARCH
// ===============================

searchInput.addEventListener(
    "input",
    displayTasks
);


// ===============================
// CLEAR COMPLETED
// ===============================

clearCompleted.addEventListener("click", () => {

    tasks =
        tasks.filter(task => !task.completed);


    saveTasks();

    displayTasks();

});


// ===============================
// STATISTICS
// ===============================

function updateStats() {

    const total = tasks.length;

    const completed =
        tasks.filter(task => task.completed).length;

    const active =
        total - completed;


    const percentage =
        total === 0
        ? 0
        : Math.round((completed / total) * 100);


    document.getElementById("totalTasks")
        .textContent = total;


    document.getElementById("activeTasks")
        .textContent = active;


    document.getElementById("completedTasks")
        .textContent = completed;


    document.getElementById("progressText")
        .textContent = percentage + "%";


    document.getElementById("progressNumber")
        .textContent = percentage + "%";


    document.getElementById("progressFill")
        .style.width = percentage + "%";


    document.getElementById("taskCount")
        .textContent =
        `${active} task${active !== 1 ? "s" : ""} remaining`;

}


// ===============================
// LOCAL STORAGE
// ===============================

function saveTasks() {

    localStorage.setItem(
        "lavenderTasks",
        JSON.stringify(tasks)
    );

}


// ===============================
// DATE FORMAT
// ===============================

function formatDate(dateString) {

    const date = new Date(dateString);

    return date.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric"
    });

}


// ===============================
// ESCAPE HTML
// ===============================

function escapeHTML(text) {

    const div =
        document.createElement("div");

    div.textContent = text;

    return div.innerHTML;

}


// ===============================
// DARK MODE
// ===============================

themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("dark");


    const isDark =
        document.body.classList.contains("dark");


    localStorage.setItem(
        "lavenderDark",
        isDark
    );

});


// Load dark mode

if (
    localStorage.getItem("lavenderDark")
    === "true"
) {

    document.body.classList.add("dark");

}


// ===============================
// INITIAL LOAD
// ===============================

displayTasks();
```
##  STYLE.CSS
```
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&display=swap');

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "DM Sans", sans-serif;
    background: #f8f6fb;
    color: #2d2535;
    transition: 0.3s;
}

button,
input,
select {
    font-family: inherit;
}


/* =========================
   APP
========================= */

.app {
    display: flex;
    min-height: 100vh;
}


/* =========================
   SIDEBAR
========================= */

.sidebar {
    width: 245px;
    background: #ffffff;
    border-right: 1px solid #eee8f3;
    padding: 28px 18px;
    display: flex;
    flex-direction: column;
    position: fixed;
    height: 100vh;
}


.logo {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 0 10px;
    margin-bottom: 50px;
}

.logo-icon {
    width: 42px;
    height: 42px;
    border-radius: 13px;
    background: #9673b9;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    box-shadow: 0 8px 20px rgba(150, 115, 185, .25);
}

.logo h2 {
    font-size: 18px;
}

.logo span {
    font-size: 11px;
    color: #a397aa;
    letter-spacing: 1px;
}


.menu-title {
    font-size: 10px;
    color: #aaa1b0;
    letter-spacing: 1.5px;
    margin: 0 12px 10px;
}


.side-link {
    width: 100%;
    padding: 13px 15px;
    margin-bottom: 5px;
    border: none;
    background: transparent;
    border-radius: 11px;
    color: #817687;
    text-align: left;
    cursor: pointer;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 13px;
}

.side-link span {
    font-size: 18px;
}

.side-link:hover,
.side-link.active {
    background: #f0e9f6;
    color: #76539a;
}

.sidebar-bottom {
    margin-top: auto;
}

.quote {
    background: #f5eff9;
    padding: 16px;
    border-radius: 14px;
    margin-bottom: 15px;
}

.quote span {
    color: #9673b9;
}

.quote p {
    font-size: 12px;
    color: #827488;
    line-height: 1.5;
    margin-top: 7px;
}

.theme-btn {
    width: 100%;
    border: none;
    background: #f8f6fa;
    padding: 12px;
    border-radius: 10px;
    color: #786b80;
    cursor: pointer;
}


/* =========================
   MAIN
========================= */

.main {
    margin-left: 245px;
    width: calc(100% - 245px);
    padding: 38px 50px;
    max-width: 1500px;
}


/* =========================
   TOPBAR
========================= */

.topbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
}

.welcome {
    font-size: 13px;
    color: #9d91a5;
    margin-bottom: 5px;
}

.topbar h1 {
    font-size: 28px;
}

.top-actions {
    display: flex;
    align-items: center;
    gap: 18px;
}

.date {
    display: flex;
    gap: 7px;
    align-items: center;
    color: #8b7c92;
    font-size: 13px;
}

.avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: none;
    background: #d9c4e8;
    color: #694988;
    font-weight: bold;
}


/* =========================
   STATISTICS
========================= */

.stats {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    margin-bottom: 18px;
}

.stat-card {
    background: white;
    padding: 20px;
    border-radius: 16px;
    border: 1px solid #eee8f3;
    display: flex;
    align-items: center;
    gap: 15px;
}

.stat-card span {
    display: block;
    font-size: 12px;
    color: #988d9f;
    margin-bottom: 5px;
}

.stat-card strong {
    font-size: 23px;
}

.stat-icon {
    width: 42px;
    height: 42px;
    border-radius: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.purple {
    background: #eee5f5;
    color: #8561a5;
}

.blue {
    background: #e7eef8;
    color: #6684a8;
}

.green {
    background: #e6f1e9;
    color: #62866c;
}

.pink {
    background: #f5e5ee;
    color: #a86f89;
}


/* =========================
   PROGRESS
========================= */

.progress-card {
    background: #72548d;
    color: white;
    padding: 22px 25px;
    border-radius: 17px;
    margin-bottom: 28px;
}

.progress-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
}

.progress-header h3 {
    font-size: 16px;
}

.progress-header p {
    font-size: 12px;
    opacity: .7;
    margin-top: 4px;
}

.progress-header strong {
    font-size: 22px;
}

.progress-bar {
    height: 7px;
    background: rgba(255,255,255,.2);
    border-radius: 20px;
    overflow: hidden;
}

#progressFill {
    width: 0%;
    height: 100%;
    background: white;
    border-radius: 20px;
    transition: .5s;
}


/* =========================
   TASK SECTION
========================= */

.tasks-section {
    background: white;
    padding: 28px;
    border-radius: 20px;
    border: 1px solid #eee8f3;
}

.section-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 22px;
}

.section-header h2 {
    font-size: 20px;
}

.section-header p {
    color: #9b909f;
    font-size: 12px;
    margin-top: 5px;
}

.add-btn {
    border: none;
    background: #8965a8;
    color: white;
    padding: 12px 18px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
}

.add-btn:hover {
    background: #765294;
    transform: translateY(-1px);
}


/* =========================
   TOOLBAR
========================= */

.toolbar {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    margin-bottom: 20px;
}

.search {
    flex: 1;
    background: #f8f6fa;
    border: 1px solid #eee8f3;
    border-radius: 10px;
    display: flex;
    align-items: center;
    padding: 0 13px;
}

.search span {
    color: #a399aa;
    font-size: 20px;
}

.search input {
    width: 100%;
    border: none;
    outline: none;
    background: transparent;
    padding: 11px;
    font-size: 13px;
}

.filters {
    display: flex;
    background: #f7f4f9;
    border-radius: 10px;
    padding: 4px;
}

.filter {
    border: none;
    background: transparent;
    padding: 8px 13px;
    border-radius: 7px;
    color: #8b7f91;
    cursor: pointer;
    font-size: 12px;
}

.filter.active {
    background: white;
    color: #745294;
    box-shadow: 0 2px 6px rgba(0,0,0,.05);
}


/* =========================
   TASK
========================= */

.task {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 16px;
    border: 1px solid #eee8f3;
    border-radius: 13px;
    margin-bottom: 9px;
    transition: .2s;
    animation: slideIn .3s ease;
}

@keyframes slideIn {

    from {
        opacity: 0;
        transform: translateY(8px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.task:hover {
    border-color: #d9c8e5;
    box-shadow: 0 5px 15px rgba(100,70,120,.06);
}

.task-info {
    flex: 1;
}

.task-title {
    font-weight: 600;
    font-size: 14px;
}

.task.completed .task-title {
    text-decoration: line-through;
    color: #aaa1ae;
}

.task-details {
    font-size: 11px;
    color: #9a8e9f;
    margin-top: 5px;
}

.priority {
    margin-left: 8px;
    padding: 3px 8px;
    border-radius: 20px;
    font-size: 10px;
}

.low {
    background: #e7f2e9;
    color: #56805e;
}

.medium {
    background: #f5eddc;
    color: #927039;
}

.high {
    background: #f5e1e7;
    color: #a2556c;
}

.check-task {
    width: 17px;
    height: 17px;
    accent-color: #8965a8;
}

.task-actions {
    display: flex;
    gap: 5px;
}

.task-actions button {
    border: none;
    width: 31px;
    height: 31px;
    border-radius: 8px;
    cursor: pointer;
    background: #f6f2f8;
}

.task-actions button:hover {
    background: #e9def0;
}


/* =========================
   FOOTER
========================= */

.task-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 15px;
    color: #9a909e;
    font-size: 12px;
}

.task-footer button {
    border: none;
    background: transparent;
    color: #8b5ca8;
    cursor: pointer;
}


/* =========================
   MODAL
========================= */

.modal {
    position: fixed;
    inset: 0;
    background: rgba(43, 29, 50, .4);
    display: none;
    align-items: center;
    justify-content: center;
    z-index: 100;
}

.modal.show {
    display: flex;
}

.modal-box {
    background: white;
    width: 430px;
    padding: 30px;
    border-radius: 20px;
    box-shadow: 0 20px 60px rgba(0,0,0,.2);
    animation: modalIn .25s ease;
}

@keyframes modalIn {

    from {
        opacity: 0;
        transform: scale(.95);
    }

    to {
        opacity: 1;
        transform: scale(1);
    }
}

.modal-header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
}

.modal-header h2 {
    margin-top: 4px;
}

.modal-label {
    color: #9873b7;
    font-size: 10px;
    letter-spacing: 1.5px;
}

.modal-header button {
    border: none;
    background: #f5f0f7;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
}

.modal-box label {
    display: block;
    font-size: 12px;
    font-weight: 600;
    margin-bottom: 7px;
    color: #65596c;
}

.modal-box input,
.modal-box select {
    width: 100%;
    padding: 12px;
    border: 1px solid #ded5e4;
    border-radius: 9px;
    outline: none;
    margin-bottom: 17px;
    background: #fcfafd;
}

.form-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
}

.save-btn {
    width: 100%;
    border: none;
    background: #8965a8;
    color: white;
    padding: 13px;
    border-radius: 9px;
    font-weight: 600;
    cursor: pointer;
}

.save-btn:hover {
    background: #745294;
}


/* =========================
   DARK MODE
========================= */

body.dark {
    background: #19151d;
    color: #eee7f2;
}

body.dark .sidebar,
body.dark .stat-card,
body.dark .tasks-section,
body.dark .modal-box {
    background: #241e29;
    border-color: #362c3c;
}

body.dark .logo span,
body.dark .welcome,
body.dark .section-header p,
body.dark .stat-card span,
body.dark .task-details,
body.dark .task-footer {
    color: #a99eae;
}

body.dark .task {
    border-color: #382e3e;
}

body.dark .search,
body.dark .filters,
body.dark .theme-btn {
    background: #2c2431;
    border-color: #3b3140;
}

body.dark .search input {
    color: white;
}

body.dark .filter.active {
    background: #3b3041;
}

body.dark .modal-box input,
body.dark .modal-box select {
    background: #2d2531;
    color: white;
    border-color: #493c4e;
}


/* =========================
   RESPONSIVE
========================= */

@media(max-width: 1000px) {

    .stats {
        grid-template-columns: repeat(2, 1fr);
    }

}

@media(max-width: 750px) {

    .sidebar {
        display: none;
    }

    .main {
        margin-left: 0;
        width: 100%;
        padding: 25px 18px;
    }

    .stats {
        grid-template-columns: 1fr 1fr;
    }

    .toolbar {
        flex-direction: column;
    }

    .filters {
        justify-content: center;
    }

}

@media(max-width: 500px) {

    .stats {
        grid-template-columns: 1fr;
    }

    .top-actions .date {
        display: none;
    }

    .section-header {
        align-items: flex-start;
        gap: 15px;
    }

    .tasks-section {
        padding: 20px;
    }

    .form-row {
        grid-template-columns: 1fr;
    }

}
```
## OUTPUT

<img width="1917" height="1198" alt="image" src="https://github.com/user-attachments/assets/448f4d33-a30e-4360-9c86-d3950adc8f26" />


## RESULT
The program for creating Portfolio using HTML and CSS is executed successfully.
