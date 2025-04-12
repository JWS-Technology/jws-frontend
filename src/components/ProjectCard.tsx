
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  techStack: string[];
  image: string;
  link?: string;
  delay?: number;
}

const ProjectCard = ({ title, description, techStack, image, link, delay = 0 }: ProjectCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      className="rounded-lg overflow-hidden shadow-md group relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-52">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className={`absolute inset-0 bg-blue-900/70 transition-opacity duration-300 flex items-center justify-center ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          {link && (
            <a 
              href={link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-blue-600 px-4 py-2 rounded-md flex items-center gap-1 hover:bg-blue-50 transition-colors"
            >
              View Project <ArrowUpRight className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
        <p className="text-gray-600 mb-3">{description}</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech, index) => (
            <span 
              key={index} 
              className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
