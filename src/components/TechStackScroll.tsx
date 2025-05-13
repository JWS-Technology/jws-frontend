
import { motion, useAnimation, useMotionValue, useTransform } from "framer-motion";
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
  const scrollXPosition = useMotionValue(0);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [scrollWidth, setScrollWidth] = useState(0);
  
  const technologies: Technology[] = [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      description: "A JavaScript library for building user interfaces with reusable components",
      color: "blue-400",
      icon: Code
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      description: "React framework for production with hybrid static & server rendering",
      color: "gray-800",
      icon: Globe
    },
    {
      name: "Node.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
      color: "green-500",
      icon: Server
    },
    {
      name: "MongoDB",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      description: "Document-oriented NoSQL database for modern applications",
      color: "green-600",
      icon: Database
    },
    {
      name: "PostgreSQL",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      description: "Powerful, open source object-relational database system",
      color: "blue-500",
      icon: Database
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      description: "Strongly typed programming language that builds on JavaScript",
      color: "blue-600",
      icon: Layers
    }
  ];

  // Calculate the total width of scrollable content
  useEffect(() => {
    if (scrollRef.current) {
      const width = scrollRef.current.scrollWidth / 2;
      setScrollWidth(width);
    }
  }, []);

  // Control the scroll animation
  useEffect(() => {
    if (isInView && !isHovered && scrollWidth > 0) {
      const infiniteScroll = async () => {
        await controls.start({
          x: -scrollWidth,
          transition: {
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop"
          }
        });
      };
      
      infiniteScroll();
    } else if (isHovered) {
      controls.stop();
    } else {
      controls.start({
        x: scrollXPosition.get(),
        transition: { duration: 0 }
      });
    }
  }, [controls, isHovered, isInView, scrollWidth, scrollXPosition]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsInView(true);
        } else {
          setIsInView(false);
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
  }, []);

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
          <div className="absolute inset-0 backdrop-blur-[2px] bg-gradient-to-r from-transparent via-white/40 to-transparent rounded-2xl pointer-events-none"></div>
          
          <div className="overflow-hidden">
            <motion.div 
              ref={scrollRef}
              className="flex gap-12 py-8 mx-auto max-w-5xl"
              style={{ x: scrollXPosition }}
              animate={controls}
            >
              {[...technologies, ...technologies].map((tech, index) => (
                <HoverCard key={`${tech.name}-${index}`}>
                  <HoverCardTrigger asChild>
                    <motion.div
                      className="flex flex-col items-center justify-center gap-4 min-w-[140px] cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="relative w-28 h-28 flex items-center justify-center group">
                        <div className="absolute inset-0 bg-white/50 backdrop-blur-sm rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        
                        <img
                          src={tech.logo}
                          alt={tech.name}
                          className="w-16 h-16 object-contain relative z-10 transition-all duration-300 group-hover:scale-110"
                          loading="lazy"
                        />
                        
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
    </div>
  );
};

export default TechStackScroll;
