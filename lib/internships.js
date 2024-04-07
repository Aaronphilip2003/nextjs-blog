// lib/internships.js

export async function getInternshipsData() {
    // Fetch your internship data from wherever it's stored
    // For demonstration purposes, I'll create a simple array of objects
    const internshipsData = [
      {
        id: '1',
        date: '2023-07-02 ',
        end : '2023-11-01',
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
        end: '2024-03-02',
        company: 'Softlander Consultants',
        role: 'Backend & Prompt Engineer',
        description: `
        • Developing an AI Tutoring Application which is self sufficient
        • Generates Courses, Assessments and Activities by itself
        • Evaluation of Courses done itself
        • AI and Prompt Engineering
        `,
      },
        {
            id: '3',
            date: '2022-08-23',
            end: '2022-08-25',
            company: 'Python Developer',
            role: 'Smart India Hackathon Winner (Dell Technologies)',
            description: `
            • Won the finale of the Smart India Hackathon, 2022 in collaboration with a dedicated team.
            • Developed and proposed a highly scalable, multilingual solution for Dell Technologies' problem statement.
            • Created a conversational chatbot builder specifically designed for the healthcare industry, offering
            • troubleshooting assistance, training, and problem diagnostics.
            • Technologies used to make this possible included python, RASA, MongoDB, AWS for S3 and EC2 instances and docker
            `,
        },
      
      // Add more internship data as needed
    ];
  
    return internshipsData;
  }
  