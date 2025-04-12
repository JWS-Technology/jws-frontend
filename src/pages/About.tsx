
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const workProcess = [
    {
      title: "Discovery & Planning",
      description: "Understanding client goals and requirements in detail",
      icon: "🔍",
    },
    {
      title: "Design & Architecture",
      description: "Creating wireframes and selecting the right technology stack",
      icon: "✏️",
    },
    {
      title: "Development",
      description: "Writing clean, modular, and efficient code",
      icon: "💻",
    },
    {
      title: "Testing & Optimization",
      description: "Ensuring performance, security, and usability",
      icon: "🧪",
    },
    {
      title: "Deployment",
      description: "Setting up hosting, handover, and documentation",
      icon: "🚀",
    },
    {
      title: "Support",
      description: "Providing ongoing updates and maintenance",
      icon: "🛠️",
    },
  ];

  const values = [
    "Quality code that stands the test of time",
    "Clean, intuitive user experiences",
    "Modern, performance-focused solutions",
    "Transparent communication throughout the project",
    "Meeting deadlines and staying within budget",
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-blue-100 py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-blue-600 heading-glow">Joe WebServices</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              A freelance web development brand focused on building modern, fast, and scalable web applications
            </p>
          </motion.div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold">
                Our <span className="text-blue-600 heading-glow">Mission</span>
              </h2>
              <p className="text-gray-700">
                Joe WebServices (JWS) is a freelance web development brand dedicated to delivering exceptional web solutions that help businesses thrive in the digital landscape.
              </p>
              <p className="text-gray-700">
                We specialize in full-stack development, using modern frameworks and tools to build applications that are not only functional but also provide delightful user experiences.
              </p>
              <p className="text-gray-700">
                Our focus is on clean code, performance optimization, and creating scalable solutions that grow with your business.
              </p>
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-4">Our Core Values</h3>
                <ul className="space-y-2">
                  {values.map((value, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle2 className="text-blue-600 mr-2 h-5 w-5 mt-0.5 flex-shrink-0" />
                      <span>{value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur-md opacity-70 glow"></div>
              <div className="relative bg-white p-8 rounded-lg shadow-lg">
                <div className="aspect-video bg-blue-50 rounded-md mb-6 flex items-center justify-center">
                  <span className="text-7xl">👨‍💻</span>
                </div>
                <h3 className="text-2xl font-bold mb-4">Focused on Your Success</h3>
                <p className="text-gray-600 mb-4">
                  Every project we take on is treated with the utmost importance. We're not just building websites or applications; we're creating digital solutions that help your business succeed.
                </p>
                <Link to="/contact" className="btn-primary inline-block">
                  Let's Work Together
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Work Process */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Work <span className="text-blue-600 heading-glow">Process</span>
            </h2>
            <p className="text-gray-600">
              We follow a structured approach to ensure every project is delivered on time and exceeds expectations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {workProcess.map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all"
              >
                <div className="text-4xl mb-4">{step.icon}</div>
                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our <span className="text-blue-600 heading-glow">Tech Stack</span>
            </h2>
            <p className="text-gray-600">
              We use the latest technologies and tools to deliver high-quality web applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white rounded-lg p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 text-blue-600">Frontend</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  HTML & CSS
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  React
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Next.js
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Tailwind CSS
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 text-blue-600">Backend</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  PHP
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Node.js
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  MongoDB
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  PostgreSQL
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="bg-white rounded-lg p-6 shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 text-blue-600">Tools</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Git
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Docker
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  VS Code
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                  Figma
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Ready to start your next project?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Let's work together to create a web solution that helps your business grow.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Link 
                to="/contact" 
                className="bg-white text-blue-700 px-8 py-3 rounded-md font-bold hover:bg-blue-50 transition-colors inline-block hover:shadow-glow-white"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
