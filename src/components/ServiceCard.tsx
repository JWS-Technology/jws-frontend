
import { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const ServiceCard = ({ icon: Icon, title, description, delay = 0 }: ServiceCardProps) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      viewport={{ once: true }}
      className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all group"
    >
      <div className="w-14 h-14 bg-blue-50 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-100 transition-colors">
        <Icon className="text-blue-600 w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
};

export default ServiceCard;
