import { v4 as uuid4 } from "uuid"

export const departments = [
  "All", "Engineering", "Marketing", "Design", "Research"
]

export const positions = [
  {
    id: uuid4(),
    title: "Backend Developer",
    description: "Responsible for server-side application logic and integration of the work front-end developers do.",
    responsibilities: [
      "Develop and maintain server-side logic using Node.js and Express.",
      "Integrate databases and manage data flow.",
      "Implement security and data protection measures.",
      "Collaborate with frontend developers to design APIs."
    ],
    requirements: [
      "Proficient in Node.js, Express, and MongoDB.",
      "Experience with RESTful APIs.",
      "Understanding of server-side templating languages.",
      "Knowledge of Docker and Kubernetes."
    ],
    location: "Jaipur",
    type: "Full-Time",
    qualification: "Bachelor’s degree in Computer Science or related field.",
    datePosted: "2025-01-10",
    deadline: "2025-02-10",
    department: "Engineering"
  },
  {
    id: uuid4(),
    title: "Frontend Developer",
    description: "Develop user-facing features and ensure the technical feasibility of UI/UX designs.",
    responsibilities: [
      "Build responsive web interfaces using React and Tailwind CSS.",
      "Ensure cross-browser compatibility.",
      "Optimize applications for speed and scalability.",
      "Collaborate with designers to implement UI designs."
    ],
    requirements: [
      "Strong experience with JavaScript, React, and Tailwind CSS.",
      "Knowledge of accessibility standards.",
      "Experience with version control (Git).",
      "Attention to detail in UI/UX implementation."
    ],
    location: "Bengaluru",
    type: "Full-Time",
    qualification: "Bachelor’s degree in Computer Science or related field.",
    datePosted: "2025-01-12",
    deadline: "2025-02-12",
    department: "Engineering"
  },
  {
    id: uuid4(),
    title: "Full Stack Developer",
    description: "Handle both frontend and backend development tasks for web applications.",
    responsibilities: [
      "Develop and integrate APIs.",
      "Implement scalable front-end solutions.",
      "Ensure application security and data protection.",
      "Troubleshoot and debug software issues."
    ],
    requirements: [
      "Proficiency in React, Node.js, and MongoDB.",
      "Experience with Docker and CI/CD pipelines.",
      "Strong understanding of RESTful APIs.",
      "Knowledge of cloud platforms like AWS or GCP."
    ],
    location: "Remote",
    type: "Full-Time",
    qualification: "Bachelor’s degree in Computer Science or related field.",
    datePosted: "2025-01-08",
    deadline: "2025-02-08",
    department: "Engineering"
  },
  {
    id: uuid4(),
    title: "Mobile App Developer",
    description: "Develop and maintain mobile applications for iOS and Android.",
    responsibilities: [
      "Design and build advanced mobile applications.",
      "Work with cross-functional teams to define features.",
      "Fix bugs and improve application performance.",
      "Ensure app store deployment standards are met."
    ],
    requirements: [
      "Experience with Flutter or React Native.",
      "Strong understanding of mobile UI/UX principles.",
      "Knowledge of REST APIs and cloud messaging.",
      "Familiarity with app store publishing processes."
    ],
    location: "Remote",
    type: "Full-Time",
    qualification: "Bachelor’s degree in Software Engineering.",
    datePosted: "2025-01-11",
    deadline: "2025-02-15",
    department: "Engineering"
  },
  {
    id: uuid4(),
    title: "DevOps Engineer",
    description: "Implement and manage CI/CD pipelines and cloud infrastructure.",
    responsibilities: [
      "Automate deployment and infrastructure management.",
      "Monitor system performance and reliability.",
      "Maintain cloud resources and scaling strategies.",
      "Ensure security compliance across infrastructure."
    ],
    requirements: [
      "Experience with AWS, Docker, and Kubernetes.",
      "Proficient in CI/CD tools like Jenkins and GitHub Actions.",
      "Strong scripting skills in Python or Bash.",
      "Understanding of infrastructure as code (Terraform)."
    ],
    location: "Bengaluru",
    type: "Full-Time",
    qualification: "Bachelor’s degree in Computer Science.",
    datePosted: "2025-01-05",
    deadline: "2025-02-05",
    department: "Engineering"
  },
  {
    id: uuid4(),
    title: "UI/UX Designer",
    description: "Design intuitive and user-friendly interfaces for digital products.",
    responsibilities: [
      "Create wireframes, prototypes, and high-fidelity designs.",
      "Conduct user research and usability testing.",
      "Collaborate with developers to implement designs.",
      "Ensure design consistency across platforms."
    ],
    requirements: [
      "Proficiency in Figma, Sketch, or Adobe XD.",
      "Strong understanding of user-centered design.",
      "Portfolio demonstrating UI/UX design skills.",
      "Attention to detail and creativity."
    ],
    location: "Jaipur",
    type: "Full-Time",
    qualification: "Bachelor’s degree in Design or related field.",
    datePosted: "2025-01-09",
    deadline: "2025-02-09",
    department: "Design"
  },
  {
    id: uuid4(),
    title: "Graphic Designer",
    description: "Create visual content for marketing and branding purposes.",
    responsibilities: [
      "Design graphics for social media and websites.",
      "Develop marketing materials and brand assets.",
      "Collaborate with marketing teams for campaigns.",
      "Ensure visual consistency across platforms."
    ],
    requirements: [
      "Proficiency in Adobe Creative Suite (Photoshop, Illustrator).",
      "Creativity and a strong eye for design.",
      "Excellent communication and collaboration skills.",
      "Experience with branding and identity design."
    ],
    location: "Remote",
    type: "Part-Time",
    qualification: "Bachelor’s degree in Graphic Design.",
    datePosted: "2025-01-07",
    deadline: "2025-02-07",
    department: "Design"
  },
  {
    id: uuid4(),
    title: "Digital Marketing Executive",
    description: "Plan and execute online marketing campaigns.",
    responsibilities: [
      "Develop and implement SEO strategies.",
      "Manage social media marketing campaigns.",
      "Analyze performance metrics and optimize strategies.",
      "Collaborate with design teams for content creation."
    ],
    requirements: [
      "Experience with Google Analytics and SEO tools.",
      "Knowledge of social media marketing trends.",
      "Strong communication and analytical skills.",
      "Ability to create engaging content."
    ],
    location: "Jaipur",
    type: "Full-Time",
    qualification: "Bachelor’s degree in Marketing.",
    datePosted: "2025-01-06",
    deadline: "2025-02-06",
    department: "Marketing"
  },
  {
    id: uuid4(),
    title: "Social Media Manager",
    description: "Manage and grow social media presence across platforms.",
    responsibilities: [
      "Develop social media strategies.",
      "Engage with followers and respond to inquiries.",
      "Analyze performance data and adjust strategies.",
      "Collaborate with content creators for campaigns."
    ],
    requirements: [
      "Strong understanding of social media platforms.",
      "Experience with content creation and curation.",
      "Excellent communication skills.",
      "Knowledge of analytics tools."
    ],
    location: "Remote",
    type: "Full-Time",
    qualification: "Bachelor’s degree in Marketing or Communications.",
    datePosted: "2025-01-08",
    deadline: "2025-02-08",
    department: "Marketing"
  }, {
    id: uuid4(),
    title: "Backend Developer",
    description: "Responsible for server-side application logic and integration of the work front-end developers do.",
    responsibilities: [
      "Develop and maintain server-side logic using Node.js and Express.",
      "Integrate databases and manage data flow.",
      "Implement security and data protection measures.",
      "Collaborate with frontend developers to design APIs."
    ],
    requirements: [
      "Proficient in Node.js, Express, and MongoDB.",
      "Experience with RESTful APIs.",
      "Understanding of server-side templating languages.",
      "Knowledge of Docker and Kubernetes."
    ],
    location: "Jaipur",
    type: "Full-Time",
    qualification: "Bachelor’s degree in Computer Science or related field.",
    datePosted: "2025-01-10",
    deadline: "2025-02-10",
    department: "Engineering"
  },
  {
    id: uuid4(),
    title: "Business Development Manager",
    description: "Drive company growth by identifying new business opportunities and building client relationships.",
    responsibilities: [
      "Identify and pursue new business opportunities.",
      "Develop and maintain client relationships.",
      "Collaborate with marketing and product teams to align strategies.",
      "Conduct market research to identify trends and opportunities."
    ],
    requirements: [
      "Proven experience in business development or sales.",
      "Excellent communication and negotiation skills.",
      "Ability to develop and implement growth strategies.",
      "Strong market research and analytical skills."
    ],
    location: "Bengaluru",
    type: "Full-Time",
    qualification: "Bachelor’s degree in Business Administration or related field.",
    datePosted: "2025-01-12",
    deadline: "2025-02-12",
    department: "Marketing"
  },
  {
    id: uuid4(),
    title: "Market Research Analyst",
    description: "Analyze market trends and competitor strategies to guide business decisions.",
    responsibilities: [
      "Collect and analyze market data.",
      "Prepare reports on market trends and consumer behavior.",
      "Identify opportunities for market expansion.",
      "Assist in developing marketing strategies based on research findings."
    ],
    requirements: [
      "Strong analytical and critical thinking skills.",
      "Proficiency in data analysis tools (Excel, Google Analytics).",
      "Excellent written and verbal communication.",
      "Detail-oriented with strong organizational skills."
    ],
    location: "Remote",
    type: "Full-Time",
    qualification: "Bachelor’s degree in Business, Marketing, or Statistics.",
    datePosted: "2025-01-11",
    deadline: "2025-02-15",
    department: "Research"
  },
  {
    id: uuid4(),
    title: "Research Scientist",
    description: "Conduct innovative research and contribute to product development and technology solutions.",
    responsibilities: [
      "Design and execute research experiments.",
      "Analyze data and interpret results to improve products.",
      "Collaborate with product teams to implement research findings.",
      "Publish research papers and attend conferences."
    ],
    requirements: [
      "Ph.D. in Computer Science, Engineering, or a related field.",
      "Strong analytical and problem-solving skills.",
      "Experience with data modeling and analysis.",
      "Excellent research and technical writing skills."
    ],
    location: "Bengaluru",
    type: "Full-Time",
    qualification: "Ph.D. or Master’s degree in relevant fields.",
    datePosted: "2025-01-08",
    deadline: "2025-02-10",
    department: "Research"
  },
  {
    id: uuid4(),
    title: "User Researcher",
    description: "Conduct user research to help improve product design and user experience.",
    responsibilities: [
      "Plan and conduct user interviews and usability tests.",
      "Analyze research data and identify user pain points.",
      "Collaborate with designers and product teams to improve UX.",
      "Deliver actionable insights through reports and presentations."
    ],
    requirements: [
      "Experience with qualitative and quantitative research methods.",
      "Strong communication and presentation skills.",
      "Familiarity with user research tools (UserTesting, Hotjar).",
      "Background in psychology, human-computer interaction, or related fields."
    ],
    location: "Remote",
    type: "Full-Time",
    qualification: "Bachelor’s degree in Psychology, HCI, or related field.",
    datePosted: "2025-01-10",
    deadline: "2025-02-15",
    department: "Research"
  }
];
