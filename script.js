let students = [];

fetch('students.json')
    .then(res => res.json())
    .then(data => {
        students = data;
        displayData(students);
    });

function displayData(data) {
    const tableBody = document.querySelector("#studentTable tbody");
    tableBody.innerHTML = "";

    data.forEach(student => {
        let row = `
            <tr>
                <td>${student.firstName}</td>
                <td>${student.lastName}</td>
                <td>${student.class}</td>
                <td>${student.rollNo}</td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}


function filterData() {
    let search = document.getElementById("search").value.toLowerCase();

    if (!students || students.length === 0) {
        console.log("No data loaded");
        return;
    }

    let filtered = students.filter(s =>
        (s.firstName && s.firstName.toLowerCase().includes(search)) ||
        (s.lastName && s.lastName.toLowerCase().includes(search))
    );

    displayData(filtered);
}
