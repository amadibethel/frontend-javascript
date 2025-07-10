interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
  }
  
  const student1: Student = {
    firstName: "Alice",
    lastName: "Johnson",
    age: 20,
    location: "New York",
  };
  
  const student2: Student = {
    firstName: "Bob",
    lastName: "Smith",
    age: 22,
    location: "Paris",
  };
  
  const studentsList: Student[] = [student1, student2];
  
  // Create table
  const table = document.createElement("table");
  const headerRow = document.createElement("tr");
  
  // Table headers
  const header1 = document.createElement("th");
  header1.textContent = "First Name";
  const header2 = document.createElement("th");
  header2.textContent = "Location";
  
  headerRow.appendChild(header1);
  headerRow.appendChild(header2);
  table.appendChild(headerRow);
  
  // Populate table rows
  studentsList.forEach((student) => {
    const row = document.createElement("tr");
  
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName;
  
    const locationCell = document.createElement("td");
    locationCell.textContent = student.location;
  
    row.appendChild(firstNameCell);
    row.appendChild(locationCell);
    table.appendChild(row);
  });
  
  // Add table to the body
  document.body.appendChild(table);
  