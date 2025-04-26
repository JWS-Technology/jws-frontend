
import { motion, useAnimation } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Code, Layers, Database, Globe, Server } from "lucide-react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

interface Technology {
  name: string;
  logo: string;
  description: string;
  color: string;
  icon: React.ElementType;
}

const TechStackScroll = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const controls = useAnimation();
  const containerRef = useRef<HTMLDivElement>(null);
  
  const technologies: Technology[] = [
    {
      name: "React",
      logo: "/lovable-uploads/47497b1d-b110-4737-abe3-ebf01ae8c243.png",
      description: "A JavaScript library for building user interfaces with reusable components",
      color: "blue-400",
      icon: Code
    },
    {
      name: "Next.js",
      logo: "/lovable-uploads/62df2610-5e4e-4be9-9dc5-c154242e9c89.png",
      description: "React framework for production with hybrid static & server rendering",
      color: "gray-800",
      icon: Globe
    },
    {
      name: "Node.js",
      logo: "/lovable-uploads/708f9e32-840d-46a4-aaa4-75ad2689e16f.png",
      description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
      color: "green-500",
      icon: Server
    },
    {
      name: "MongoDB",
      logo: "/lovable-uploads/752a1366-6aea-49ad-be21-341fe7476d14.png",
      description: "Document-oriented NoSQL database for modern applications",
      color: "green-600",
      icon: Database
    },
    {
      name: "PostgreSQL",
      logo: "/lovable-uploads/8acfad30-aa90-4edd-b779-aafd43058584.png",
      description: "Powerful, open source object-relational database system",
      color: "blue-500",
      icon: Database
    },
    {
      name: "TypeScript",
      logo: "/lovable-uploads/ada582c7-709e-480e-8494-1461b602567c.png",
      description: "Strongly typed programming language that builds on JavaScript",
      color: "blue-600",
      icon: Layers
    }
  ];

  // Setup intersection observer to trigger animation when component is in view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
          controls.start("visible");
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, [controls]);

  // Duplicate the array for seamless scrolling
  const scrollTechnologies = [...technologies, ...technologies];

  return (
    <div className="w-full overflow-hidden bg-gradient-to-b from-blue-50/50 via-white/90 to-white py-20" ref={containerRef}>
      <div className="container mx-auto px-4">
        <motion.div 
          className="text-center max-w-2xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our <span className="text-blue-600 heading-glow">Tech Stack</span>
          </h2>
          <p className="text-gray-600">
            We leverage cutting-edge technologies to build scalable, efficient, and innovative solutions
          </p>
        </motion.div>

        <div 
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Backdrop filter for glass effect */}
          <div className="absolute inset-0 backdrop-blur-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-2xl pointer-events-none"></div>
          
          <motion.div 
            className="flex gap-12 py-8 mx-auto max-w-5xl"
            animate={{
              x: isHovered ? 0 : "-50%"
            }}
            transition={{
              duration: isHovered ? 0 : 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {scrollTechnologies.map((tech, index) => (
              <HoverCard key={`${tech.name}-${index}`}>
                <HoverCardTrigger asChild>
                  <motion.div
                    className="flex flex-col items-center justify-center gap-4 min-w-[140px]"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div className="relative w-28 h-28 flex items-center justify-center group">
                      {/* Subtle backdrop glow effect */}
                      <motion.div 
                        className={`absolute inset-0 bg-${tech.color}/5 rounded-xl opacity-0 group-hover:opacity-100`}
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                      
                      {/* Glass card effect */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/30 rounded-xl backdrop-blur-sm shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      
                      {/* Tech logo */}
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="w-16 h-16 object-contain filter-none transition-all duration-300 group-hover:scale-110 relative z-10"
                        loading="lazy"
                      />
                      
                      {/* Decorative icon in background */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-10 transition-opacity duration-300">
                        <tech.icon className="w-24 h-24 text-blue-500" />
                      </div>
                    </div>
                    <span className="text-sm font-medium text-gray-700">{tech.name}</span>
                  </motion.div>
                </HoverCardTrigger>
                <HoverCardContent className="w-80 p-4 shadow-xl bg-white/95 backdrop-blur border border-blue-100/50">
                  <div className="flex gap-3">
                    <div className="p-2 rounded-md bg-blue-100/50">
                      <tech.icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-1">{tech.name}</h4>
                      <p className="text-gray-600 text-sm">{tech.description}</p>
                    </div>
                  </div>
                </HoverCardContent>
              </HoverCard>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechStackScroll;
