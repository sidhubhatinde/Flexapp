import React from 'react'

const userProfile = {
    basicInfo: {
      fullName: "Ammar H.",
      status: "Online",
      location: "Islamabad, Pakistan",
      localTime: "12:50 pm",
      title: "Software Engineer l C++, Java l Front-end",
      hourlyRate: 10.00,
      profileImageUrl: "/images/profile.jpg",
      profileSummary: `To seek an internship that offers professional challenges utilizing my technical skills, excellent time
  management, and problem-solving abilities. I am passionate about learning new things every day and
  enhancing my knowledge and experience through practical work in the industry.`
    },
  

    languages: [
        { name: "English", level: "Conversational" }
    ],
  
    education: [
      {
        institution: "FAST NUCES",
        degree: "Bachelor's degree",
        field: "Software Engineering",
        startYear: 2022,
        endYear: 2026
      }
    ],
  
    linkedAccounts: [
      { platform: "LinkedIn", url: "https://linkedin.com/in/ammar" },
      { platform: "GitHub", url: "https://github.com/ammar" }
    ],
  
    skills: [
      "Front-End Development", "C++", "Java", "React", "MongoDB",
      "JavaFX", "JavaScript", "JDBC", "Spring Boot", "Node.js",
      "Tailwind CSS", "HTML", "MySQL", "MERN Stack", "CSS"
    ],
  
    projects: [
      {
        title: "Race Car Game",
        description: `Implemented using various data structures like graphs, queues, linked lists, trees; used DFS and Dijkstra's algorithm.`,
      },
      {
        title: "Flight Operation System",
        description: `Implemented an airline management system using OOP concepts: encapsulation, inheritance, and polymorphism.`,
      }
    ],
  
    employmentHistory: [],
  
    certifications: [
      // Add as needed
      // { title: "XYZ Certification", issuer: "Credly", date: "2024-01", importedFromCredly: true }
    ],
    otherExperience: [
      // { title: "Hackathon Winner", description: "Won XYZ hackathon with a team of 4." }
    ]
  };
  






function Profile() {
  return (
    <div>
        
    </div>
  )
}

export default Profile