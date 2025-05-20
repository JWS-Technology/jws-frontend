import { motion } from "framer-motion";
import { Phone, Mail, Github, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import ContactForm from "../components/ContactForm";

const Contact = () => {
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
              Get in <span className="text-blue-600 heading-glow">Touch</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Have a project in mind? Let's discuss how we can help bring your
              vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
                <p className="text-gray-600 mb-8">
                  Fill out the form and our team will get back to you within 24
                  hours.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <FaWhatsapp className="text-blue-600 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Whatsapp</h3>
                    <a
                      href="https://wa.me/918248026750?text=Hi%20JWS%20team%2C%20I'm%20interested%20in%20your%20web%20development%20services.%20Can%20we%20schedule%20a%20quick%20call%20to%20discuss%20my%20project%3F"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      +91 918248026750
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Mail className="text-blue-600 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <a
                      href="mailto:rakeshjoe52@gmail.com"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      hellow.jws@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Github className="text-blue-600 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">GitHub</h3>
                    <a
                      href="https://github.com/joe-webservices"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      github.com/joe-webservices
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <MapPin className="text-blue-600 w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Location</h3>
                    <p className="text-gray-600">Working Remotely Worldwide</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <div className="relative p-6 bg-blue-600 text-white rounded-lg overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-2">
                      Let's build something amazing together!
                    </h3>
                    <p className="opacity-90 mb-4">
                      Have questions about our services or want to discuss a
                      project? Feel free to reach out.
                    </p>
                    <div className="flex space-x-4">
                      <a
                        href="https://github.com/joe-webservices"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                        aria-label="GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                      <a
                        href="mailto:rakeshjoe52@gmail.com"
                        className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors"
                        aria-label="Email"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                  {/* Background decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 rounded-full opacity-50 -translate-y-1/2 translate-x-1/2"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-blue-700 rounded-full opacity-50 translate-y-1/2 -translate-x-1/2"></div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-lg p-6 shadow-md relative z-10"
            >
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">Send us a message</h2>
                <p className="text-gray-600">
                  We'll get back to you as soon as possible.
                </p>
              </div>

              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
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
              Frequently Asked{" "}
              <span className="text-blue-600 heading-glow">Questions</span>
            </h2>
            <p className="text-gray-600">
              Common questions about our services and process
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                question: "What type of projects do you work on?",
                answer:
                  "We specialize in web applications, e-commerce websites, corporate websites, and custom web solutions. Our expertise spans across various industries including tech, education, healthcare, and more.",
              },
              {
                question: "How long does it take to complete a project?",
                answer:
                  "Project timelines vary based on complexity and scope. A simple website might take 2-3 weeks, while a complex web application could take 2-3 months. We'll provide you with a detailed timeline during the discovery phase.",
              },
              {
                question: "Do you provide ongoing support after launch?",
                answer:
                  "Yes, we offer various maintenance and support packages to ensure your website remains secure, up-to-date, and performs optimally after launch. Our support services include regular updates, security patches, and technical assistance.",
              },
              {
                question: "What is your pricing structure?",
                answer:
                  "Our pricing is project-based and depends on the complexity, features, and timeline. We provide detailed quotes after understanding your specific requirements. For simple websites, pricing starts at $X, while complex web applications start at $Y.",
              },
              {
                question: "How do you handle revisions and feedback?",
                answer:
                  "We incorporate revision rounds into our project timeline. After each phase (design, development), you'll have the opportunity to provide feedback. We value collaboration and work closely with you to ensure the final product meets your expectations.",
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-sm"
              >
                <h3 className="text-xl font-bold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
