// Data for Year 1, Semester 1
const year1Semester1 = [
  { courseCode: 'MAT101', courseName: 'Mathematics', grade: 'A' },
  { courseCode: 'ENG101', courseName: 'English', grade: 'B' },
  { courseCode: 'HIS101', courseName: 'History', grade: 'A' },
  { courseCode: 'PHY101', courseName: 'Physics', grade: 'B' },
  { courseCode: 'CHE101', courseName: 'Chemistry', grade: 'C' }
];

// Data for Year 1, Semester 2
const year1Semester2 = [
  { courseCode: 'THD102', courseName: 'Thermodynamics', grade: 'A' },
  { courseCode: 'CAL102', courseName: 'Calculus', grade: 'B' },
  { courseCode: 'LIT102', courseName: 'Literature', grade: 'A' },
  { courseCode: 'ORG102', courseName: 'Organic Chemistry', grade: 'A' },
  { courseCode: 'MEC102', courseName: 'Mechanics', grade: 'B' }
];

// Data for Year 2, Semester 1
const year2Semester1 = [
  { courseCode: 'CALC301', courseName: 'Calculus III', grade: 'B+' },
  { courseCode: 'ORGCHEM201', courseName: 'Organic Chemistry', grade: 'A' },
  { courseCode: 'LIT301', courseName: 'Literature', grade: 'B' },
  { courseCode: 'HIST301', courseName: 'World History', grade: 'A' },
  { courseCode: 'MECH201', courseName: 'Mechanics', grade: 'A-' }
];

// Data for Year 2, Semester 2
const year2Semester2 = [
  { courseCode: 'CALC401', courseName: 'Calculus IV', grade: 'A' },
  { courseCode: 'INORGCHEM101', courseName: 'Inorganic Chemistry', grade: 'A-' },
  { courseCode: 'ADVLIT201', courseName: 'Advanced Literature', grade: 'B+' },
  { courseCode: 'EUROHIST201', courseName: 'European History', grade: 'A' },
  { courseCode: 'ELECTRO101', courseName: 'Electromagnetism', grade: 'B' }
];

// Data for Year 3, Semester 1
const year3Semester1 = [
  { courseCode: 'LINALG301', courseName: 'Linear Algebra', grade: 'A' },
  { courseCode: 'PHYCHEM101', courseName: 'Physical Chemistry', grade: 'B' },
  { courseCode: 'MODLIT301', courseName: 'Modern Literature', grade: 'A-' },
  { courseCode: 'AMHIST101', courseName: 'American History', grade: 'B+' },
  { courseCode: 'THERMO301', courseName: 'Thermodynamics', grade: 'A' }
];

// Data for Year 3, Semester 2
const year3Semester2 = [
  { courseCode: 'DIFFEQ301', courseName: 'Differential Equations', grade: 'A-' },
  { courseCode: 'BIOCHEM301', courseName: 'Biochemistry', grade: 'A' },
  { courseCode: 'POSTMODLIT301', courseName: 'Postmodern Literature', grade: 'B' },
  { courseCode: 'CRHIST201', courseName: 'Civil Rights History', grade: 'A' },
  { courseCode: 'QUANTPHYS301', courseName: 'Quantum Physics', grade: 'A' }
];

// Function to populate tables with data
function populateTable(tableId, data) {
  const table = document.getElementById(tableId);
  data.forEach(item => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>${item.courseCode}</td><td>${item.courseName}</td><td>${item.grade}</td>`;
      table.appendChild(row);
  });
}

// Populate all tables
window.onload = function() {
  populateTable('semester1-table', year1Semester1);
  populateTable('semester2-table', year1Semester2);
  populateTable('semester3-table', year2Semester1);
  populateTable('semester4-table', year2Semester2);
  populateTable('semester5-table', year3Semester1);
  populateTable('semester6-table', year3Semester2);
};
