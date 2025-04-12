
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Code, 
  Database, 
  Globe, 
  Layout, 
  LifeBuoy, 
  Layers, 
  Monitor, 
  RefreshCw, 
  Server, 
  Shield 
} from "lucide-react";

const Services = () => {
  const services = [
    {
      id: "web-development",
      title: "Custom Web App Development",
      description:
        "We create tailored web applications that perfectly match your business requirements. From simple websites to complex applications, our solutions are built with scalability and maintainability in mind.",
      icon: Code,
      features: [
        "Responsive and mobile-first design",
        "Interactive user interfaces",
        "Performance optimization",
        "Cross-browser compatibility",
      ],
    },
    {
      id: "architecture",
      title: "Frontend & Backend Architecture",
      description:
        "Our architectural approach ensures your application is built on solid foundations. We design robust systems that can scale with your business growth and adapt to changing requirements.",
      icon: Layers,
      features: [
        "Scalable architecture design",
        "Code organization and structure",
        "State management solutions",
        "Database schema design",
      ],
    },
    {
      id: "api-development",
      title: "API Development & Integration",
      description:
        "We build reliable APIs that connect your application with external services and data sources. Our integration services ensure smooth data flow between different parts of your system.",
      icon: Server,
      features: [
        "RESTful API design",
        "Third-party API integration",
        "API documentation",
        "Authentication and security",
      ],
    },
    {
      id: "maintenance",
      title: "Maintenance & Performance Optimization",
      description:
        "Keep your application running smoothly with our maintenance services. We optimize performance, fix bugs, and update your application to ensure it remains secure and efficient.",
      icon: RefreshCw,
      features: [
        "Regular updates and patches",
        "Performance monitoring",
        "Bug fixing and troubleshooting",
        "Security audits",
      ],
    },
    {
      id: "ui-design",
      title: "UI/UX Design",
      description:
        "Create intuitive and engaging user experiences that delight your customers. Our design approach focuses on both aesthetics and usability to create interfaces that are both beautiful and functional.",
      icon: Layout,
      features: [
        "User-centered design",
        "Wireframing and prototyping",
        "Visual design",
        "Usability testing",
      ],
    },
    {
      id: "consulting",
      title: "Technical Consulting",
      description:
        "Get expert advice on your technical challenges. Our consulting services help you make informed decisions about technology choices, architecture, and development strategies.",
      icon: LifeBuoy,
      features: [
        "Technology stack recommendations",
        "Code reviews",
        "Architecture evaluation",
        "Best practices guidance",
      ],
    },
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
              Our <span className="text-blue-600 heading-glow">Services</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              We offer comprehensive web development solutions tailored to your business needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid gap-16">
            {services.map((service, index) => (
              <motion.div 
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`grid md:grid-cols-2 gap-8 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className={`space-y-6 ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center">
                    <service.icon className="text-blue-600 w-7 h-7" />
                  </div>
                  <h2 className="text-3xl font-bold">{service.title}</h2>
                  <p className="text-gray-600">{service.description}</p>
                  
                  <div className="mt-6">
                    <h3 className="font-semibold text-lg mb-3">Key Features:</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start">
                          <span className="text-blue-600 mr-2">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? "md:order-1" : ""}`}>
                  <div className="bg-blue-50 p-6 rounded-lg h-full flex flex-col justify-center">
                    <div className="aspect-square max-w-xs mx-auto flex items-center justify-center">
                      <service.icon className="w-24 h-24 text-blue-600 opacity-80" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our <span className="text-blue-600 heading-glow">Process</span>
            </h2>
            <p className="text-gray-600">
              We follow a structured approach to deliver high-quality web solutions.
            </p>
          </motion.div>

          <div className="relative max-w-4xl mx-auto">
            {/* Connection line */}
            <div className="absolute left-16 top-0 bottom-0 w-1 bg-blue-200 hidden md:block"></div>

            {/* Process steps */}
            {[
              {
                step: "01",
                title: "Discovery & Planning",
                description: "We start by understanding your goals, requirements, and business challenges.",
              },
              {
                step: "02",
                title: "Design & Architecture",
                description: "We create wireframes and choose the right technology stack for your project.",
              },
              {
                step: "03",
                title: "Development",
                description: "Our developers write clean, efficient, and scalable code to bring your vision to life.",
              },
              {
                step: "04",
                title: "Testing & Optimization",
                description: "We thoroughly test the application and optimize it for performance and security.",
              },
              {
                step: "05",
                title: "Deployment",
                description: "We deploy your application and provide documentation and training.",
              },
              {
                step: "06",
                title: "Support",
                description: "We offer ongoing maintenance and support to keep your application running smoothly.",
              },
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="flex mb-12 last:mb-0"
              >
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-8 z-10 flex-shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Service Features */}
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
              Why Choose <span className="text-blue-600 heading-glow">Our Services</span>
            </h2>
            <p className="text-gray-600">
              We're committed to delivering exceptional results that exceed your expectations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Monitor,
                title: "Responsive Design",
                description: "All our applications are designed to work perfectly on any device and screen size.",
              },
              {
                icon: Shield,
                title: "Security First",
                description: "We prioritize security in every aspect of the development process.",
              },
              {
                icon: Globe,
                title: "SEO Friendly",
                description: "Our applications are optimized for search engines to improve your online presence.",
              },
              {
                icon: Database,
                title: "Scalable Solutions",
                description: "Our applications can grow with your business without compromising performance.",
              },
              {
                icon: RefreshCw,
                title: "Continuous Support",
                description: "We provide ongoing support and maintenance to keep your application up-to-date.",
              },
              {
                icon: Code,
                title: "Clean Code",
                description: "We write clean, maintainable code that follows best practices and industry standards.",
              },
            ].map((feature, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-100 rounded-lg p-6 shadow-sm hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="text-blue-600 w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
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
              Ready to get started?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Contact us today to discuss your project and how we can help.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link 
                to="/contact" 
                className="bg-white text-blue-700 px-8 py-3 rounded-md font-bold hover:bg-blue-50 transition-colors inline-block hover:shadow-glow-white"
              >
                Get in Touch
              </Link>
              <Link 
                to="/projects" 
                className="border-2 border-white text-white px-8 py-3 rounded-md font-bold hover:bg-white/10 transition-colors inline-block"
              >
                View Our Work
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
