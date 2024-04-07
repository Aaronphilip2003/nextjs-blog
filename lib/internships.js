// lib/internships.js

export async function getInternshipsData() {
    // Fetch your internship data from wherever it's stored
    // For demonstration purposes, I'll create a simple array of objects
    const internshipsData = [
      {
        id: '1',
        date: '2023-07-02 ',
        company: 'ARTPARK (IISC Bangalore)',
        role: 'Data Engineer (Research Intern)',
        description: `
        • Performed thorough data cleaning to eliminate duplicate, missing, and inconsistent entries in the dengue dataset.
        • Conducted exploratory data analysis (EDA) to identify outliers, anomalies, and data quality issues.
        • Worked on designing an end-to-end data processing and modeling pipeline for dengue data, ensuring efficient and reproducible workflows.
        `,
      },
      {
        id: '2',
        date: '2024-01-02',
        company: 'Softlander Consultants',
        role: 'Backend & Prompt Engineer',
        description: `
        • Developing an AI Tutoring Application which is self sufficient
        • Generates Courses, Assessments and Activities by itself
        • Evaluation of Courses done itself
        • AI and Prompt Engineering
        `,
      },
      // Add more internship data as needed
    ];
  
    return internshipsData;
  }
  