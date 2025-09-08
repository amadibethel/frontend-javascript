// Define the Student interface
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

// Create two students
const student1: Student = {
  firstName: "Bethel",
  lastName: "Amadi",
  age: 27,
  location: "South Africa",
};

const student2: Student = {
  firstName: "Ada",
  lastName: "Obi",
  age: 25,
  location: "Nigeria",
};

// Add them into an array
const studentsList: Student[] = [student1, student2];

// Render a table in Vanilla JavaScript
const table = document.createElement("table");
const tableBody = document.createElement("tbody");

// For each student, create a row with firstName and location
studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const nameCell = document.createElement("td");
  nameCell.textContent = student.firstName;

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tableBody.appendChild(row);
});

// Append the table to the document body
table.appendChild(tableBody);
document.body.appendChild(table);
