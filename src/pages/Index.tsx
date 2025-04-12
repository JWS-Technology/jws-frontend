
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Code, Database, Globe, Layers, Rocket, Server } from "lucide-react";
import ServiceCard from "../components/ServiceCard";

const Index = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-blue-100">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="md:col-span-7 space-y-6"
            >
              <div className="inline-block px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                Full-Stack Web Development
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-blue-600 heading-glow">Modern</span> Web Solutions for Your Business
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-2xl">
                Building fast, scalable, and beautiful web applications with clean code and exceptional user experience.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Link to="/contact" className="btn-primary">
                  Get In Touch
                </Link>
                <Link to="/services" className="btn-outline">
                  Our Services
                </Link>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="md:col-span-5"
            >
              <div className="relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-lg blur-md opacity-75 glow"></div>
                <div className="relative bg-white rounded-lg shadow-lg p-6">
                  <div className="text-3xl font-bold mb-4 text-blue-600">JWS</div>
                  <div className="space-y-2 mb-6">
                    <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-2 bg-gray-200 rounded w-full"></div>
                    <div className="h-2 bg-gray-200 rounded w-2/3"></div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-blue-100 rounded-md">
                      <Code className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="p-2 bg-blue-100 rounded-md">
                      <Database className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="p-2 bg-blue-100 rounded-md">
                      <Globe className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our <span className="text-blue-600 heading-glow">Services</span>
            </motion.h2>
            <motion.p 
              className="text-gray-600"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              We offer comprehensive web development solutions tailored to your business needs.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard 
              icon={Code}
              title="Custom Web App Development"
              description="Building tailor-made web applications that perfectly match your business requirements and goals."
              delay={1}
            />
            <ServiceCard 
              icon={Layers}
              title="Frontend & Backend Architecture"
              description="Creating robust architectures that ensure your application is scalable, maintainable, and secure."
              delay={2}
            />
            <ServiceCard 
              icon={Database}
              title="API Development & Integration"
              description="Developing and integrating APIs to connect your application with external services and data sources."
              delay={3}
            />
            <ServiceCard 
              icon={Server}
              title="Maintenance & Performance Optimization"
              description="Ensuring your application remains fast, secure, and up-to-date with the latest technologies."
              delay={4}
            />
            <ServiceCard 
              icon={Globe}
              title="Responsive Web Design"
              description="Creating beautiful, mobile-friendly interfaces that work flawlessly across all devices."
              delay={5}
            />
            <ServiceCard 
              icon={Rocket}
              title="Project Consulting"
              description="Expert technical advice to help you make informed decisions about your web development projects."
              delay={6}
            />
          </div>

          <div className="text-center mt-12">
            <Link to="/services" className="btn-outline">
              Learn More About Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="bg-blue-50 py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Tech <span className="text-blue-600 heading-glow">Stack</span>
            </h2>
            <p className="text-gray-600">
              We use modern technologies to build high-performance web applications.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
            {["HTML", "CSS", "React", "Next.js", "Tailwind CSS", "PHP", "MongoDB", "Node.js", "PostgreSQL", "Git", "Docker", "AWS"].map((tech, index) => (
              <motion.div 
                key={tech}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-4 flex flex-col items-center justify-center shadow-md hover:shadow-lg transition-all hover:-translate-y-1 text-center h-24"
              >
                <span className="font-bold text-blue-600">{tech}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
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
              Ready to bring your ideas to life?
            </motion.h2>
            <motion.p 
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Let's collaborate to create something amazing together.
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
                Get Started
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
