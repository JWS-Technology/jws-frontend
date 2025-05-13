import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import { Link } from "react-router-dom";

const Projects = () => {
  const projects = [
    {
      title: "Engzine",
      description:
        "An ISSN-certified e-magazine website built for the Department of English, St. Joseph's College, Trichy. Offers a smooth, mobile-responsive reading experience with a clean layout.",
      techStack: ["HTML", "CSS", "JavaScript"],
      image: "https://joerakesh-portfolio.netlify.app/Projects/engzine.jpeg",
      link: "#",
    },
    {
      title: "Mergen",
      description:
        "A digital e-journal platform developed for the Department of English, St. Joseph's College, Trichy. Tailored for academic journal publishing with structured content.",
      techStack: ["HTML", "CSS", "JavaScript"],
      image: "https://joerakesh-portfolio.netlify.app/Projects/mergen.jpg",
      link: "#",
    },
  ];

  const clientTestimonials = [
    {
      name: "Sarah Johnson",
      position: "Marketing Director",
      company: "TechCorp",
      testimonial:
        "Joe WebServices delivered a beautiful website that perfectly represents our brand. Their attention to detail and commitment to quality was impressive.",
    },
    {
      name: "Michael Chen",
      position: "Founder",
      company: "Startup Hub",
      testimonial:
        "Working with Joe WebServices was a great experience. They understood our requirements perfectly and delivered a website that exceeded our expectations.",
    },
    {
      name: "Emily Williams",
      position: "CEO",
      company: "Creative Solutions",
      testimonial:
        "Joe WebServices helped us modernize our online presence with a responsive, user-friendly website that has significantly improved our customer engagement.",
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
              Our <span className="text-blue-600 heading-glow">Projects</span>
            </h1>
            <p className="text-lg text-gray-700 mb-8">
              Explore our portfolio of web development projects
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                techStack={project.techStack}
                image={project.image}
                link={project.link}
                delay={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Project Process */}
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
              Our Project{" "}
              <span className="text-blue-600 heading-glow">Approach</span>
            </h2>
            <p className="text-gray-600">
              How we turn your ideas into successful web applications
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Discovery",
                description:
                  "We begin by understanding your business goals, target audience, and project requirements. This helps us create a clear roadmap for your project.",
              },
              {
                step: "02",
                title: "Design & Development",
                description:
                  "Our designers and developers work together to create a visually appealing and functional website tailored to your specific needs.",
              },
              {
                step: "03",
                title: "Delivery & Support",
                description:
                  "After thorough testing, we deploy your project and provide ongoing support to ensure it continues to meet your business needs.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg p-6 shadow-md relative overflow-hidden"
              >
                <span className="absolute -right-4 -top-4 text-9xl font-bold text-blue-50">
                  {step.step}
                </span>
                <div className="relative z-10">
                  <h3 className="text-xl font-bold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Client{" "}
              <span className="text-blue-600 heading-glow">Testimonials</span>
            </h2>
            <p className="text-gray-600">
              What our clients say about working with us
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {clientTestimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-100 rounded-lg p-6 shadow-md relative"
              >
                <div className="text-5xl text-blue-100 absolute top-4 left-4">
                  "
                </div>
                <div className="relative z-10">
                  <p className="text-gray-600 mb-6 italic">
                    "{testimonial.testimonial}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold mr-3">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

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
              Have a project in mind?
            </motion.h2>
            <motion.p
              className="text-xl mb-8 opacity-90"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              Let's discuss how we can help bring your vision to life.
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
                Start a Project
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
