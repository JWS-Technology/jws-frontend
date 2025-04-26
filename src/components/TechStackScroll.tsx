
import { motion } from "framer-motion";
import { useState } from "react";

interface Technology {
  name: string;
  logo: string;
}

const TechStackScroll = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const technologies: Technology[] = [
    {
      name: "React",
      logo: "/lovable-uploads/47497b1d-b110-4737-abe3-ebf01ae8c243.png"
    },
    {
      name: "Next.js",
      logo: "/lovable-uploads/62df2610-5e4e-4be9-9dc5-c154242e9c89.png"
    },
    {
      name: "Node.js",
      logo: "/lovable-uploads/708f9e32-840d-46a4-aaa4-75ad2689e16f.png"
    },
    {
      name: "MongoDB",
      logo: "/lovable-uploads/752a1366-6aea-49ad-be21-341fe7476d14.png"
    },
    {
      name: "PostgreSQL",
      logo: "/lovable-uploads/8acfad30-aa90-4edd-b779-aafd43058584.png"
    },
    {
      name: "TypeScript",
      logo: "/lovable-uploads/ada582c7-709e-480e-8494-1461b602567c.png"
    }
  ];

  // Duplicate the array for seamless scrolling
  const scrollTechnologies = [...technologies, ...technologies];

  return (
    <div className="w-full overflow-hidden bg-gradient-to-b from-blue-50/50 to-white py-20">
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
            We use cutting-edge technologies to build scalable and efficient solutions
          </p>
        </motion.div>

        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <motion.div 
            className="flex gap-12 py-8"
            animate={{
              x: isHovered ? 0 : "-50%"
            }}
            transition={{
              duration: isHovered ? 0 : 20,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {scrollTechnologies.map((tech, index) => (
              <div
                key={`${tech.name}-${index}`}
                className="flex flex-col items-center justify-center gap-4 min-w-[120px]"
              >
                <div className="relative w-24 h-24 flex items-center justify-center group">
                  <div className="absolute inset-0 bg-blue-100/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-16 h-16 object-contain filter-none transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <span className="text-sm font-medium text-gray-700">{tech.name}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechStackScroll;
