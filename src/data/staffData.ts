import type { StaffMember } from '../types/stafftypes';

// add profile links
export const staffData: StaffMember[] = [
  {
    id: "1",
    name: "Prof. Ibrahim Adeyemi",
    role: "Dean",
    department: "Faculty of Computing Science and Engineering",
    photo: "https://i.pravatar.cc/400?img=12",
    email: "i.adeyemi@university.edu.ng",
    phone: "+234 803 456 7890",
    office: "Dean's Office, Block A, Room 101",
    specialization: ["Software Architecture", "Cloud Computing", "Enterprise Systems"],
    bio: "Professor Ibrahim Adeyemi is a distinguished academic leader with over 25 years of experience in software engineering and computer science. He has led numerous national ICT initiatives and serves as a consultant to several Fortune 500 companies. His research focuses on scalable cloud architectures and enterprise software solutions.",
    qualifications: [
      "Ph.D. in Computer Science, Stanford University",
      "M.Sc. in Software Engineering, MIT",
      "B.Sc. in Computer Science, University of Lagos"
    ],
    researchInterests: [
      "Cloud Computing Architecture",
      "Distributed Systems",
      "Software Quality Assurance",
      "Agile Methodologies"
    ],
    publications: [
      "Scalable Cloud Architecture for Enterprise Applications (2023)",
      "Modern Software Engineering Practices (2022)",
      "Cloud Migration Strategies for Legacy Systems (2021)"
    ],
    borderColor: "#1e40af",
    gradient: "linear-gradient(145deg, #1e40af, #000)"
  },
  {
    id: "2",
    name: "Dr. Chioma Okonkwo",
    role: "Deputy Dean",
    department: "Software Engineering",
    photo: "https://i.pravatar.cc/400?img=47",
    email: "c.okonkwo@university.edu.ng",
    phone: "+234 803 456 7891",
    office: "Administrative Block, Room 205",
    specialization: ["Artificial Intelligence", "Machine Learning", "Data Science"],
    bio: "Dr. Chioma Okonkwo is a leading expert in artificial intelligence and machine learning with a passion for developing intelligent systems that solve real-world problems. She has published over 50 peer-reviewed papers and has won multiple awards for her contributions to AI research in Africa.",
    qualifications: [
      "Ph.D. in Artificial Intelligence, Carnegie Mellon University",
      "M.Sc. in Computer Science, Imperial College London",
      "B.Sc. in Software Engineering, University of Nigeria"
    ],
    researchInterests: [
      "Deep Learning",
      "Natural Language Processing",
      "Computer Vision",
      "AI Ethics"
    ],
    publications: [
      "Neural Networks for African Language Processing (2023)",
      "Ethical AI Development in Emerging Markets (2022)",
      "Advanced Machine Learning Techniques (2021)"
    ],
    borderColor: "#7c3aed",
    gradient: "linear-gradient(165deg, #7c3aed, #000)"
  },
  {
    id: "3",
    name: "Prof. Oluwaseun Balogun",
    role: "Professor",
    department: "Software Engineering",
    photo: "https://i.pravatar.cc/400?img=33",
    email: "o.balogun@university.edu.ng",
    phone: "+234 803 456 7892",
    office: "Engineering Block, Room 302",
    specialization: ["Cybersecurity", "Network Security", "Cryptography"],
    bio: "Professor Oluwaseun Balogun is an internationally recognized cybersecurity expert who has worked with government agencies and major corporations to enhance their security infrastructure. His research has contributed significantly to the development of robust security protocols.",
    qualifications: [
      "Ph.D. in Cybersecurity, Oxford University",
      "M.Sc. in Information Security, ETH Zurich",
      "B.Sc. in Computer Engineering, Obafemi Awolowo University"
    ],
    researchInterests: [
      "Network Security Protocols",
      "Blockchain Security",
      "Penetration Testing",
      "Secure Software Development"
    ],
    publications: [
      "Advanced Cryptographic Techniques for IoT (2023)",
      "Blockchain Security in Financial Systems (2022)",
      "Network Security Best Practices (2021)"
    ],
    borderColor: "#dc2626",
    gradient: "linear-gradient(195deg, #dc2626, #000)"
  },
  {
    id: "4",
    name: "Prof. Amina Yusuf",
    role: "Professor",
    department: "Software Engineering",
    photo: "https://i.pravatar.cc/400?img=45",
    email: "a.yusuf@university.edu.ng",
    phone: "+234 803 456 7893",
    office: "Research Building, Room 401",
    specialization: ["Software Testing", "Quality Assurance", "DevOps"],
    bio: "Professor Amina Yusuf is a pioneer in software quality assurance and testing methodologies. She has developed innovative testing frameworks that are now used by major software companies worldwide. Her work emphasizes the importance of quality in software development lifecycles.",
    qualifications: [
      "Ph.D. in Software Engineering, University of Toronto",
      "M.Sc. in Computer Science, McGill University",
      "B.Sc. in Software Engineering, Ahmadu Bello University"
    ],
    researchInterests: [
      "Automated Testing",
      "Continuous Integration/Continuous Deployment",
      "Test-Driven Development",
      "Software Metrics"
    ],
    publications: [
      "Modern DevOps Practices for Enterprise (2023)",
      "Automated Testing Strategies (2022)",
      "Quality Assurance in Agile Development (2021)"
    ],
    borderColor: "#059669",
    gradient: "linear-gradient(210deg, #059669, #000)"
  },
  {
    id: "5",
    name: "Prof. Chukwuemeka Nwosu",
    role: "Professor",
    department: "Software Engineering",
    photo: "https://i.pravatar.cc/400?img=13",
    email: "c.nwosu@university.edu.ng",
    phone: "+234 803 456 7894",
    office: "Innovation Hub, Room 501",
    specialization: ["Mobile Application Development", "UI/UX Design", "Human-Computer Interaction"],
    bio: "Professor Chukwuemeka Nwosu is a visionary in mobile technology and user experience design. He has led the development of several award-winning mobile applications and has trained hundreds of developers in modern mobile development practices.",
    qualifications: [
      "Ph.D. in Human-Computer Interaction, University of California, Berkeley",
      "M.Sc. in Mobile Computing, Georgia Tech",
      "B.Sc. in Computer Science, University of Port Harcourt"
    ],
    researchInterests: [
      "Mobile App Development",
      "Cross-Platform Development",
      "User Experience Design",
      "Accessibility in Technology"
    ],
    publications: [
      "Mobile-First Development Strategies (2023)",
      "Designing Inclusive Mobile Experiences (2022)",
      "The Future of Mobile Computing (2021)"
    ],
    borderColor: "#f59e0b",
    gradient: "linear-gradient(175deg, #f59e0b, #000)"
  },
  {
    id: "6",
    name: "Prof. Ngozi Eze",
    role: "Professor",
    department: "Software Engineering",
    photo: "https://i.pravatar.cc/400?img=48",
    email: "n.eze@university.edu.ng",
    phone: "+234 803 456 7895",
    office: "Computing Block, Room 203",
    specialization: ["Database Systems", "Big Data", "Data Analytics"],
    bio: "Professor Ngozi Eze is a renowned expert in database management systems and big data technologies. Her research has revolutionized how organizations handle massive datasets, and she continues to push the boundaries of data science and analytics.",
    qualifications: [
      "Ph.D. in Database Systems, UC Berkeley",
      "M.Sc. in Data Science, Columbia University",
      "B.Sc. in Mathematics and Computer Science, University of Ibadan"
    ],
    researchInterests: [
      "NoSQL Databases",
      "Big Data Analytics",
      "Data Warehousing",
      "Real-time Data Processing"
    ],
    publications: [
      "Scalable Database Architectures for Big Data (2023)",
      "Real-time Analytics in Modern Applications (2022)",
      "Data Management Best Practices (2021)"
    ],
    borderColor: "#0891b2",
    gradient: "linear-gradient(135deg, #0891b2, #000)"
  },
  {
    id: "7",
    name: "Dr. Adebayo Oladipo",
    role: "Associate Professor",
    department: "Software Engineering",
    photo: "https://i.pravatar.cc/400?img=15",
    email: "a.oladipo@university.edu.ng",
    phone: "+234 803 456 7896",
    office: "Software Lab, Room 105",
    specialization: ["Web Development", "Full-Stack Development", "JavaScript Frameworks"],
    bio: "Dr. Adebayo Oladipo is a passionate educator and developer specializing in modern web technologies. He has contributed to numerous open-source projects and is known for his engaging teaching style that makes complex concepts accessible to students.",
    qualifications: [
      "Ph.D. in Software Engineering, University of Cambridge",
      "M.Sc. in Web Technologies, University College London",
      "B.Sc. in Computer Science, Covenant University"
    ],
    researchInterests: [
      "Progressive Web Apps",
      "Frontend Frameworks (React, Vue, Angular)",
      "Web Performance Optimization",
      "Serverless Architecture"
    ],
    publications: [
      "Modern Web Development Practices (2023)",
      "Building Scalable Web Applications (2022)",
      "JavaScript: The Complete Guide (2021)"
    ],
    borderColor: "#8b5cf6",
    gradient: "linear-gradient(225deg, #8b5cf6, #000)"
  },
  {
    id: "8",
    name: "Dr. Fatima Abdullahi",
    role: "Associate Professor",
    department: "Software Engineering",
    photo: "https://i.pravatar.cc/400?img=44",
    email: "f.abdullahi@university.edu.ng",
    phone: "+234 803 456 7897",
    office: "Research Wing, Room 307",
    specialization: ["Internet of Things", "Embedded Systems", "Smart Systems"],
    bio: "Dr. Fatima Abdullahi is at the forefront of IoT research and smart system development. Her work on intelligent sensors and connected devices has been implemented in smart city projects across Africa, contributing to sustainable urban development.",
    qualifications: [
      "Ph.D. in Embedded Systems, Technical University of Munich",
      "M.Sc. in IoT Engineering, Delft University of Technology",
      "B.Sc. in Electronics Engineering, Bayero University"
    ],
    researchInterests: [
      "IoT Architecture",
      "Smart Home Systems",
      "Industrial IoT",
      "Edge Computing"
    ],
    publications: [
      "IoT Solutions for Smart Cities (2023)",
      "Embedded Systems Design (2022)",
      "Connected Devices and Security (2021)"
    ],
    borderColor: "#ec4899",
    gradient: "linear-gradient(155deg, #ec4899, #000)"
  },
  {
    id: "9",
    name: "Dr. Tunde Adewale",
    role: "Associate Professor",
    department: "Software Engineering",
    photo: "https://i.pravatar.cc/400?img=17",
    email: "t.adewale@university.edu.ng",
    phone: "+234 803 456 7898",
    office: "Innovation Center, Room 202",
    specialization: ["Blockchain Technology", "Cryptocurrency", "Distributed Ledger"],
    bio: "Dr. Tunde Adewale is a blockchain technology pioneer who has helped organizations understand and implement distributed ledger solutions. His research focuses on practical blockchain applications in finance, healthcare, and supply chain management.",
    qualifications: [
      "Ph.D. in Blockchain Technology, University of Edinburgh",
      "M.Sc. in Financial Technology, London School of Economics",
      "B.Sc. in Computer Science, University of Benin"
    ],
    researchInterests: [
      "Smart Contracts",
      "Decentralized Applications (DApps)",
      "Blockchain Scalability",
      "Cryptocurrency Economics"
    ],
    publications: [
      "Blockchain for Enterprise Solutions (2023)",
      "Smart Contract Development (2022)",
      "The Future of Decentralized Finance (2021)"
    ],
    borderColor: "#14b8a6",
    gradient: "linear-gradient(185deg, #14b8a6, #000)"
  },
  {
    id: "10",
    name: "Dr. Blessing Okoro",
    role: "Associate Professor",
    department: "Software Engineering",
    photo: "https://i.pravatar.cc/400?img=49",
    email: "b.okoro@university.edu.ng",
    phone: "+234 803 456 7899",
    office: "Academic Building, Room 404",
    specialization: ["Computer Graphics", "Game Development", "Virtual Reality"],
    bio: "Dr. Blessing Okoro is a creative technologist specializing in computer graphics and immersive technologies. Her work in virtual and augmented reality has been featured in international conferences, and she leads the university's game development research lab.",
    qualifications: [
      "Ph.D. in Computer Graphics, University of Southern California",
      "M.Sc. in Game Development, DigiPen Institute",
      "B.Sc. in Computer Science, Federal University of Technology, Akure"
    ],
    researchInterests: [
      "3D Graphics and Animation",
      "Virtual Reality Applications",
      "Augmented Reality",
      "Game Engine Development"
    ],
    publications: [
      "Advanced Computer Graphics Techniques (2023)",
      "VR Applications in Education (2022)",
      "Game Development Best Practices (2021)"
    ],
    borderColor: "#f97316",
    gradient: "linear-gradient(145deg, #f97316, #000)"
  },
  {
    id: "11",
    name: "Dr. Emeka Obi",
    role: "Associate Professor",
    department: "Software Engineering",
    photo: "https://i.pravatar.cc/400?img=68",
    email: "e.obi@university.edu.ng",
    phone: "+234 803 456 7900",
    office: "Software Lab B, Room 108",
    specialization: ["Software Project Management", "Agile Methodologies", "Scrum"],
    bio: "Dr. Emeka Obi is a certified project management professional with extensive experience in leading large-scale software projects. He trains students and professionals in modern project management techniques and agile practices.",
    qualifications: [
      "Ph.D. in Software Engineering, University of Manchester",
      "M.Sc. in Project Management, University of Warwick",
      "B.Sc. in Computer Engineering, University of Nigeria, Nsukka",
      "PMP, CSM, SAFe Agilist Certifications"
    ],
    researchInterests: [
      "Agile Project Management",
      "Software Development Lifecycle",
      "Team Collaboration Tools",
      "Risk Management"
    ],
    publications: [
      "Agile Transformation in Organizations (2023)",
      "Effective Software Project Management (2022)",
      "Scrum Master's Guide (2021)"
    ],
    borderColor: "#6366f1",
    gradient: "linear-gradient(215deg, #6366f1, #000)"
  },
  {
    id: "12",
    name: "Dr. Aisha Mohammed",
    role: "Senior Lecturer",
    department: "Software Engineering",
    photo: "https://i.pravatar.cc/400?img=42",
    email: "a.mohammed@university.edu.ng",
    phone: "+234 803 456 7901",
    office: "Teaching Block, Room 301",
    specialization: ["Algorithms", "Data Structures", "Competitive Programming"],
    bio: "Dr. Aisha Mohammed is passionate about algorithms and computational problem-solving. She coaches the university's competitive programming team and has mentored students who have won national and international programming competitions.",
    qualifications: [
      "Ph.D. in Computer Science, University of Waterloo",
      "M.Sc. in Algorithms, Cornell University",
      "B.Sc. in Mathematics, University of Ilorin"
    ],
    researchInterests: [
      "Algorithm Design and Analysis",
      "Graph Algorithms",
      "Dynamic Programming",
      "Computational Complexity"
    ],
    publications: [
      "Advanced Algorithm Techniques (2023)",
      "Competitive Programming Handbook (2022)",
      "Data Structures Simplified (2021)"
    ],
    borderColor: "#10b981",
    gradient: "linear-gradient(165deg, #10b981, #000)"
  },
  {
    id: "13",
    name: "Dr. Kunle Ajayi",
    role: "Senior Lecturer",
    department: "Software Engineering",
    photo: "https://i.pravatar.cc/400?img=59",
    email: "k.ajayi@university.edu.ng",
    phone: "+234 803 456 7902",
    office: "Computer Lab 2, Room 205",
    specialization: ["Operating Systems", "System Programming", "Linux Administration"],
    bio: "Dr. Kunle Ajayi is an expert in operating systems and low-level system programming. He has contributed to several open-source OS projects and teaches advanced courses on kernel development and system administration.",
    qualifications: [
      "Ph.D. in Operating Systems, University of Texas at Austin",
      "M.Sc. in Computer Systems, Carnegie Mellon University",
      "B.Sc. in Computer Science, Lagos State University"
    ],
    researchInterests: [
      "Operating System Design",
      "Kernel Development",
      "System Security",
      "Virtualization"
    ],
    publications: [
      "Modern Operating System Concepts (2023)",
      "Linux Kernel Programming (2022)",
      "System Administration Best Practices (2021)"
    ],
    borderColor: "#ef4444",
    gradient: "linear-gradient(195deg, #ef4444, #000)"
  },
  {
    id: "14",
    name: "Dr. Zainab Ibrahim",
    role: "Senior Lecturer",
    department: "Software Engineering",
    photo: "https://i.pravatar.cc/400?img=43",
    email: "z.ibrahim@university.edu.ng",
    phone: "+234 803 456 7903",
    office: "Research Lab 3, Room 306",
    specialization: ["Natural Language Processing", "Computational Linguistics", "Text Mining"],
    bio: "Dr. Zainab Ibrahim specializes in natural language processing with a focus on African languages. Her research aims to make NLP technologies more accessible and inclusive for diverse linguistic communities.",
    qualifications: [
      "Ph.D. in Computational Linguistics, University of Edinburgh",
      "M.Sc. in Natural Language Processing, University of Amsterdam",
      "B.Sc. in Linguistics and Computer Science, University of Maiduguri"
    ],
    researchInterests: [
      "Machine Translation",
      "Sentiment Analysis",
      "Speech Recognition",
      "African Language Processing"
    ],
    publications: [
      "NLP for Low-Resource Languages (2023)",
      "Text Mining Techniques (2022)",
      "Computational Linguistics in Africa (2021)"
    ],
    borderColor: "#a855f7",
    gradient: "linear-gradient(225deg, #a855f7, #000)"
  },
  {
    id: "15",
    name: "Dr. Chidi Nnaji",
    role: "Senior Lecturer",
    department: "Software Engineering",
    photo: "https://i.pravatar.cc/400?img=60",
    email: "c.nnaji@university.edu.ng",
    phone: "+234 803 456 7904",
    office: "Engineering Wing, Room 401",
    specialization: ["Computer Networks", "Network Programming", "5G Technology"],
    bio: "Dr. Chidi Nnaji is a networking specialist who has worked on major telecommunications projects across Africa. His expertise in network protocols and 5G technology makes him a sought-after consultant and educator.",
    qualifications: [
      "Ph.D. in Computer Networks, RWTH Aachen University",
      "M.Sc. in Telecommunications, KTH Royal Institute of Technology",
      "B.Sc. in Electrical/Electronics Engineering, University of Lagos"
    ],
    researchInterests: [
      "Network Protocols",
      "Wireless Networks",
      "5G and Beyond",
      "Network Optimization"
    ],
    publications: [
      "5G Networks: Architecture and Applications (2023)",
      "Computer Networks Fundamentals (2022)",
      "Network Security Protocols (2021)"
    ],
    borderColor: "#06b6d4",
    gradient: "linear-gradient(135deg, #06b6d4, #000)"
  },
  {
    id: "16",
    name: "Dr. Grace Obioma",
    role: "Lecturer",
    department: "Software Engineering",
    photo: "https://i.pravatar.cc/400?img=41",
    email: "g.obioma@university.edu.ng",
    phone: "+234 803 456 7905",
    office: "Academic Building B, Room 201",
    specialization: ["Software Design Patterns", "Object-Oriented Programming", "Clean Code"],
    bio: "Dr. Grace Obioma is dedicated to teaching software engineering best practices and design principles. She emphasizes clean code and maintainable software architecture in her courses, preparing students for professional development careers.",
    qualifications: [
      "Ph.D. in Software Engineering, University of York",
      "M.Sc. in Computer Science, University of Essex",
      "B.Sc. in Computer Science, Rivers State University"
    ],
    researchInterests: [
      "Design Patterns",
      "Software Refactoring",
      "Code Quality",
      "Technical Debt Management"
    ],
    publications: [
      "Design Patterns for Modern Applications (2023)",
      "Clean Code Principles (2022)",
      "Object-Oriented Design (2021)"
    ],
    borderColor: "#f43f5e",
    gradient: "linear-gradient(155deg, #f43f5e, #000)"
  },
  {
    id: "17",
    name: "Dr. Uche Nnamdi",
    role: "Lecturer",
    department: "Software Engineering",
    photo: "https://i.pravatar.cc/400?img=57",
    email: "u.nnamdi@university.edu.ng",
    phone: "+234 803 456 7906",
    office: "Computing Center, Room 102",
    specialization: ["Computer Vision", "Image Processing", "Pattern Recognition"],
    bio: "Dr. Uche Nnamdi works at the intersection of computer vision and artificial intelligence. His research on image processing has applications in healthcare, security, and autonomous systems.",
    qualifications: [
      "Ph.D. in Computer Vision, University of Bristol",
      "M.Sc. in Pattern Recognition, University of Oxford",
      "B.Sc. in Computer Science, Nnamdi Azikiwe University"
    ],
    researchInterests: [
      "Object Detection",
      "Image Classification",
      "Facial Recognition",
      "Medical Image Analysis"
    ],
    publications: [
      "Deep Learning for Computer Vision (2023)",
      "Image Processing Techniques (2022)",
      "Pattern Recognition in Medical Imaging (2021)"
    ],
    borderColor: "#84cc16",
    gradient: "linear-gradient(185deg, #84cc16, #000)"
  },
  {
    id: "18",
    name: "Dr. Hauwa Musa",
    role: "Lecturer",
    department: "Software Engineering",
    photo: "https://i.pravatar.cc/400?img=46",
    email: "h.musa@university.edu.ng",
    phone: "+234 803 456 7907",
    office: "Teaching Complex, Room 305",
    specialization: ["Software Requirements Engineering", "Systems Analysis", "UML"],
    bio: "Dr. Hauwa Musa specializes in software requirements engineering and systems analysis. She trains students in gathering, analyzing, and documenting software requirements, ensuring they understand the critical first steps of software development.",
    qualifications: [
      "Ph.D. in Software Engineering, University of New South Wales",
      "M.Sc. in Information Systems, University of Melbourne",
      "B.Sc. in Computer Science, Kaduna State University"
    ],
    researchInterests: [
      "Requirements Elicitation",
      "Business Process Modeling",
      "UML and Modeling Tools",
      "Requirements Validation"
    ],
    publications: [
      "Requirements Engineering Best Practices (2023)",
      "Systems Analysis and Design (2022)",
      "UML for Software Engineers (2021)"
    ],
    borderColor: "#3b82f6",
    gradient: "linear-gradient(145deg, #3b82f6, #000)"
  },
  {
    id: "19",
    name: "Dr. Segun Adebisi",
    role: "Lecturer",
    department: "Software Engineering",
    photo: "https://i.pravatar.cc/400?img=67",
    email: "s.adebisi@university.edu.ng",
    phone: "+234 803 456 7908",
    office: "Software Studio, Room 104",
    specialization: ["Frontend Development", "React", "Modern CSS"],
    bio: "Dr. Segun Adebisi is a frontend development specialist who keeps pace with the rapidly evolving web technologies. He teaches modern JavaScript frameworks and CSS techniques, emphasizing responsive and accessible design.",
    qualifications: [
      "Ph.D. in Web Technologies, University of Leeds",
      "M.Sc. in Human-Computer Interaction, University of Nottingham",
      "B.Sc. in Computer Science, Ekiti State University"
    ],
    researchInterests: [
      "Frontend Frameworks",
      "Responsive Web Design",
      "CSS-in-JS",
      "Web Accessibility"
    ],
    publications: [
      "React: Advanced Concepts (2023)",
      "Modern CSS Techniques (2022)",
      "Building Responsive Interfaces (2021)"
    ],
    borderColor: "#d946ef",
    gradient: "linear-gradient(215deg, #d946ef, #000)"
  },
  {
    id: "20",
    name: "Dr. Yetunde Ojo",
    role: "Lecturer",
    department: "Software Engineering",
    photo: "https://i.pravatar.cc/400?img=50",
    email: "y.ojo@university.edu.ng",
    phone: "+234 803 456 7909",
    office: "Innovation Lab, Room 203",
    specialization: ["API Development", "Microservices", "Backend Engineering"],
    bio: "Dr. Yetunde Ojo is a backend engineering expert who teaches students how to build robust, scalable APIs and microservices architectures. Her practical approach ensures students are industry-ready upon graduation.",
    qualifications: [
      "Ph.D. in Distributed Systems, Technical University of Denmark",
      "M.Sc. in Software Architecture, Aalborg University",
      "B.Sc. in Computer Science, Olabisi Onabanjo University"
    ],
    researchInterests: [
      "RESTful API Design",
      "Microservices Architecture",
      "API Security",
      "Service Mesh"
    ],
    publications: [
      "Microservices Design Patterns (2023)",
      "Building Scalable APIs (2022)",
      "Backend Engineering Principles (2021)"
    ],
    borderColor: "#0ea5e9",
    gradient: "linear-gradient(165deg, #0ea5e9, #000)"
  }
];