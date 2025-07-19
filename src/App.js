import React, { useState, useEffect } from "react";

// Main App component
const App = () => {
  // State to manage the active section for navigation (optional, for future expansion)
  const [activeSection, setActiveSection] = useState("about");

  // Portfolio data extracted from your resume
  const portfolioData = {
    name: "Manvendra Kushwaha",
    tagline:
      "Electronics and Instrumentation Engineering Student | Web Development | Robotics",
    about:
      "Results-driven 3rd-year Electronics and Instrumentation Engineering student at NIT Silchar, with a strong foundation in problem-solving, full-stack web development, and robotics. Experienced in collaborative projects, competitive coding, and eager to contribute to software development or embedded systems roles.",
    skills: [
      "C++",
      "HTML",
      "CSS",
      "JavaScript",
      "Arduino",
      "Node.js",
      "Bootstrap",
      "Tailwind CSS",
      "Git",
      "Arduino IDE",
      "VS Code",
      "Data Structures & Algorithms",
      "Web Development",
      "Machine Learning",
      "Robotics",
      "Teamwork",
      "Communication",
      "Problem-Solving",
      "Adaptability",
      "Time Management",
      "Agile",
      "Scrum",
    ],
    projects: [
      {
        title: "Rat In Maze Robot (Arduino-based)",
        description:
          "Designed an autonomous robot using Arduino UNO, IR Sensors, and motor drivers to solve mazes. Outperformed 50+ teams, ranked top 12 out of 60+ teams in Rat In Maze competition. Demonstrated path-finding logic, sensor-based decision making, and collaborative teamwork.",
        technologies: ["Arduino UNO", "IR Sensors", "Motor Drivers", "C++"],
        link: "#", // Placeholder link, update if you have a project repository or video
      },
    ],
    contact: {
      phone: "7379475125",
      email: "manvendrakushwahamk625@gmail.com",
      linkedin: "https://www.linkedin.com/in/manvendra-kushwaha-018a3a238/",
      github: "https://github.com/manvendra47",
      leetcode: "https://leetcode.com/u/geniusnotnot7/",
      geeksforgeeks: "https://www.geeksforgeeks.org/user/mansh55q9/",
      codeforces: "https://codeforces.com/profile/Geniusnotnot7",
    },
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800 antialiased">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-600 to-purple-700 text-white p-6 shadow-lg rounded-b-3xl">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-4xl font-extrabold tracking-tight mb-2 md:mb-0">
            {portfolioData.name}
          </h1>
          <p className="text-xl font-light opacity-90">
            {portfolioData.tagline}
          </p>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="container mx-auto px-4 py-8">
        {/* About Me Section */}
        <section id="about" className="bg-white p-8 rounded-xl shadow-lg mb-12">
          <h2 className="text-3xl font-bold text-blue-700 mb-6 border-b-2 border-blue-200 pb-2">
            About Me
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            {portfolioData.about}
          </p>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="bg-white p-8 rounded-xl shadow-lg mb-12"
        >
          <h2 className="text-3xl font-bold text-purple-700 mb-6 border-b-2 border-purple-200 pb-2">
            Skills
          </h2>
          <div className="flex flex-wrap gap-3">
            {portfolioData.skills.map((skill, index) => (
              <span
                key={index}
                className="bg-purple-100 text-purple-800 px-4 py-2 rounded-full text-md font-medium shadow-sm hover:bg-purple-200 transition duration-300 ease-in-out"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="bg-white p-8 rounded-xl shadow-lg mb-12"
        >
          <h2 className="text-3xl font-bold text-green-700 mb-6 border-b-2 border-green-200 pb-2">
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {portfolioData.projects.map((project, index) => (
              <div
                key={index}
                className="bg-gray-50 p-6 rounded-lg shadow-md border border-gray-100 hover:shadow-xl transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold text-green-800 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-base">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-green-600 text-white px-5 py-2 rounded-lg text-md font-medium hover:bg-green-700 transition duration-300 ease-in-out shadow-md"
                >
                  View Project
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="bg-white p-8 rounded-xl shadow-lg mb-12"
        >
          <h2 className="text-3xl font-bold text-red-700 mb-6 border-b-2 border-red-200 pb-2">
            Contact Me
          </h2>
          <div className="text-lg text-gray-700 space-y-4">
            <p>
              <span className="font-semibold">Phone:</span>{" "}
              <a
                href={`tel:${portfolioData.contact.phone}`}
                className="text-blue-600 hover:underline"
              >
                {portfolioData.contact.phone}
              </a>
            </p>
            <p>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="text-blue-600 hover:underline"
              >
                {portfolioData.contact.email}
              </a>
            </p>
            <p>
              <span className="font-semibold">LinkedIn:</span>{" "}
              <a
                href={portfolioData.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {portfolioData.contact.linkedin}
              </a>
            </p>
            <p>
              <span className="font-semibold">GitHub:</span>{" "}
              <a
                href={portfolioData.contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {portfolioData.contact.github}
              </a>
            </p>
            <p>
              <span className="font-semibold">LeetCode:</span>{" "}
              <a
                href={portfolioData.contact.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {portfolioData.contact.leetcode}
              </a>
            </p>
            <p>
              <span className="font-semibold">GeeksforGeeks:</span>{" "}
              <a
                href={portfolioData.contact.geeksforgeeks}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {portfolioData.contact.geeksforgeeks}
              </a>
            </p>
            <p>
              <span className="font-semibold">Codeforces:</span>{" "}
              <a
                href={portfolioData.contact.codeforces}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                {portfolioData.contact.codeforces}
              </a>
            </p>
          </div>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white p-6 text-center rounded-t-3xl">
        <p className="text-sm opacity-80">
          &copy; {new Date().getFullYear()} {portfolioData.name}. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default App;
