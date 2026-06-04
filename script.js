/* ==================================================
   LOGIN
================================================== */

const loginForm = document.getElementById("loginForm");

if (loginForm) {

    loginForm.addEventListener("submit", function (e) {

        e.preventDefault();

        const email =
            document.getElementById("email").value;

        const password =
            document.getElementById("password").value;

        const errorMessage =
            document.getElementById("errorMessage");

        if (
            email === "admin@gmail.com" &&
            password === "12345"
        ) {

            Swal.fire({
                icon: "success",
                title: "Login Successful",
                text: "Redirecting to Dashboard...",
                timer: 2000,
                showConfirmButton: false
            }).then(() => {

                window.location.href =
                    "dashboard.html";

            });

        } else {

            errorMessage.classList.remove("d-none");

        }

    });

}

/* ==================================================
   DASHBOARD CHARTS
================================================== */

/* Revenue Chart */

const revenueChart =
    document.getElementById("revenueChart");

if (revenueChart) {

    new Chart(revenueChart, {

        type: "line",

        data: {
            labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun"
            ],

            datasets: [{
                label: "Revenue",
                data: [
                    3000,
                    5000,
                    4000,
                    7000,
                    9500,
                    12500
                ],
                borderColor: "#60a5fa",
                backgroundColor:
                    "rgba(96,165,250,0.2)",
                tension: 0.4,
                fill: true
            }]
        },

        options: {
            responsive: true
        }

    });

}

/* Project Status */

const projectChart =
    document.getElementById("projectChart");

if (projectChart) {

    new Chart(projectChart, {

        type: "doughnut",

        data: {
            labels: [
                "Completed",
                "Ongoing",
                "Delayed"
            ],

            datasets: [{
                data: [12, 8, 4],

                backgroundColor: [
                    "#22c55e",
                    "#facc15",
                    "#ef4444"
                ]
            }]
        }

    });

}

/* Client Growth */

const clientGrowthChart =
    document.getElementById("clientGrowthChart");

if (clientGrowthChart) {

    new Chart(clientGrowthChart, {

        type: "line",

        data: {
            labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun"
            ],

            datasets: [{
                label: "Clients",
                data: [
                    5,
                    8,
                    12,
                    15,
                    17,
                    18
                ]
            }]
        }

    });

}

/* Task Completion */

const taskChart =
    document.getElementById("taskChart");

if (taskChart) {

    new Chart(taskChart, {

        type: "doughnut",

        data: {
            labels: [
                "Completed",
                "Pending"
            ],

            datasets: [{
                data: [
                    85,
                    15
                ]
            }]
        }

    });

}

/* Revenue Per Project */

const projectRevenueChart =
    document.getElementById("projectRevenueChart");

if (projectRevenueChart) {

    new Chart(projectRevenueChart, {

        type: "bar",

        data: {
            labels: [
                "P1",
                "P2",
                "P3",
                "P4"
            ],

            datasets: [{
                label: "Revenue",
                data: [
                    5000,
                    7000,
                    6000,
                    9000
                ]
            }]
        }

    });

}

/* Expense Chart */

const expenseChart =
    document.getElementById("expenseChart");

if (expenseChart) {

    new Chart(expenseChart, {

        type: "line",

        data: {
            labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr"
            ],

            datasets: [{
                label: "Expenses",
                data: [
                    2000,
                    2500,
                    3000,
                    2800
                ]
            }]
        }

    });

}

/* Priority Chart */

const priorityChart =
    document.getElementById("priorityChart");

if (priorityChart) {

    new Chart(priorityChart, {

        type: "pie",

        data: {
            labels: [
                "High",
                "Medium",
                "Low"
            ],

            datasets: [{
                data: [
                    10,
                    20,
                    5
                ]
            }]
        }

    });

}

/* Satisfaction Chart */

const satisfactionChart =
    document.getElementById("satisfactionChart");

if (satisfactionChart) {

    new Chart(satisfactionChart, {

        type: "bar",

        data: {
            labels: [
                "Poor",
                "Average",
                "Good",
                "Excellent"
            ],

            datasets: [{
                data: [
                    2,
                    5,
                    8,
                    20
                ]
            }]
        }

    });

}

/* Performance Chart */

const performanceChart =
    document.getElementById("performanceChart");

if (performanceChart) {

    new Chart(performanceChart, {

        type: "radar",

        data: {
            labels: [
                "Design",
                "Coding",
                "Testing",
                "Communication"
            ],

            datasets: [{
                label: "Score",
                data: [
                    90,
                    95,
                    85,
                    88
                ]
            }]
        }

    });

}

/* Timeline Chart */

const timelineChart =
    document.getElementById("timelineChart");

if (timelineChart) {

    new Chart(timelineChart, {

        type: "line",

        data: {
            labels: [
                "Week 1",
                "Week 2",
                "Week 3",
                "Week 4"
            ],

            datasets: [{
                label: "Progress",
                data: [
                    20,
                    50,
                    75,
                    100
                ]
            }]
        }

    });

}

/* ==================================================
   REPORTS PAGE CHARTS
================================================== */

const monthlyRevenueCanvas =
    document.getElementById("monthlyRevenueChart");

if (monthlyRevenueCanvas) {

    new Chart(monthlyRevenueCanvas, {

        type: "bar",

        data: {

            labels: [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun"
            ],

            datasets: [{
                label: "Revenue (RM)",
                data: [
                    5000,
                    7000,
                    8000,
                    9000,
                    11000,
                    12000
                ],
                backgroundColor: "#4e73df"
            }]
        },

        options: {

            responsive: true,

            maintainAspectRatio: false,

            layout: {
                padding: {
                    bottom: 20
                }
            },

            scales: {
                x: {
                    ticks: {
                        padding: 10
                    }
                },
                y: {
                    beginAtZero: true
                }
            }

        }

    });

}

const completionChart =
    document.getElementById("completionChart");

if (completionChart) {

    new Chart(completionChart, {

        type: "pie",

        data: {

            labels: [
                "Completed",
                "Ongoing",
                "Delayed"
            ],

            datasets: [{
                data: [
                    32,
                    10,
                    5
                ],

                backgroundColor: [
                    "#22c55e",
                    "#facc15",
                    "#ef4444"
                ]
            }]
        }

    });

}

/* ==================================================
   PDF REPORTS
================================================== */

function downloadTaskReport() {

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    doc.text("Task Report", 20, 20);
    doc.text("Completed Projects: 32", 20, 40);
    doc.text("Pending Tasks: 7", 20, 60);

    doc.save("Task_Report.pdf");

}

function downloadIncomeReport() {

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    doc.text("Income Report", 20, 20);
    doc.text("Monthly Revenue: RM12,500", 20, 40);
    doc.text("Total Revenue: RM45,000", 20, 60);

    doc.save("Income_Report.pdf");

}

function downloadClientReport() {

    const { jsPDF } = window.jspdf;

    const doc = new jsPDF();

    doc.text("Client Report", 20, 20);
    doc.text("Total Clients: 18", 20, 40);
    doc.text("Active Clients: 12", 20, 60);

    doc.save("Client_Report.pdf");

}

/* ==================================================
   SWEETALERT LOGOUT
================================================== */

const logoutBtn =
    document.getElementById("logoutBtn");

if (logoutBtn) {

    logoutBtn.addEventListener("click", function (e) {

        e.preventDefault();

        Swal.fire({

            title: "Logout?",
            text: "Are you sure you want to logout?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes, Logout",
            cancelButtonText: "Cancel"

        }).then((result) => {

            if (result.isConfirmed) {

                Swal.fire({

                    title: "Logged Out!",
                    text: "Redirecting to Login Page...",
                    icon: "success",
                    timer: 1500,
                    showConfirmButton: false

                });

                setTimeout(() => {

                    window.location.href =
                        "index.html";

                }, 1500);

            }

        });

    });

}

/* ==================================================
   ACCESSIBILITY
================================================== */

function enableDarkMode() {

    document.body.classList.add("dark-mode");

    localStorage.setItem(
        "theme",
        "dark"
    );

}

function enableLightMode() {

    document.body.classList.remove(
        "dark-mode"
    );

    localStorage.setItem(
        "theme",
        "light"
    );

}

function increaseFont() {

    document.body.classList.add(
        "large-font"
    );

    localStorage.setItem(
        "fontSize",
        "large"
    );

}

function decreaseFont() {

    document.body.classList.remove(
        "large-font"
    );

    localStorage.setItem(
        "fontSize",
        "normal"
    );

}

window.onload = function () {

    if (
        localStorage.getItem("theme")
        === "dark"
    ) {

        document.body.classList.add(
            "dark-mode"
        );

    }

    if (
        localStorage.getItem("fontSize")
        === "large"
    ) {

        document.body.classList.add(
            "large-font"
        );

    }

};