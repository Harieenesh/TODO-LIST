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