
import { motion } from "framer-motion";
import { Github, Mail, Linkedin } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  image: string;
  email?: string;
  github?: string;
  linkedin?: string;
}

const TeamCard = ({ name, role, bio, image, email, github, linkedin }: TeamMemberProps) => {
  return (
    <motion.div 
      className="bg-white rounded-lg overflow-hidden shadow-lg border border-blue-50"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -5,
        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        transition: { duration: 0.3 }
      }}
    >
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
        <div className="h-48 bg-blue-50 flex items-center justify-center">
          <Avatar className="w-32 h-32 border-4 border-white shadow-md">
            <AvatarImage src={image} alt={name} className="object-cover" />
            <AvatarFallback className="bg-blue-100 text-blue-500 text-2xl">
              {name.split(' ').map(n => n[0]).join('')}
            </AvatarFallback>
          </Avatar>
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-800">{name}</h3>
          <p className="text-blue-600 font-medium">{role}</p>
        </div>

        <p className="text-gray-600 text-center">{bio}</p>

        <div className="flex justify-center space-x-4 pt-2">
          {email && (
            <motion.a 
              href={`mailto:${email}`}
              className="text-gray-500 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.2 }}
              aria-label={`Email ${name}`}
            >
              <Mail className="h-5 w-5" />
            </motion.a>
          )}
          
          {github && (
            <motion.a 
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.2 }}
              aria-label={`${name}'s GitHub profile`}
            >
              <Github className="h-5 w-5" />
            </motion.a>
          )}
          
          {linkedin && (
            <motion.a 
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors"
              whileHover={{ scale: 1.2 }}
              aria-label={`${name}'s LinkedIn profile`}
            >
              <Linkedin className="h-5 w-5" />
            </motion.a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default TeamCard;
