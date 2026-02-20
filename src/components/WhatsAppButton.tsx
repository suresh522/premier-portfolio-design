import { motion } from "framer-motion";

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/919700067784?text=Hi%2C%20I%20need%20packers%20and%20movers%20service"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110 md:h-16 md:w-16"
      aria-label="Chat on WhatsApp"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7 md:h-8 md:w-8 fill-white">
        <path d="M16.004 0h-.008C7.174 0 0 7.176 0 16c0 3.5 1.128 6.744 3.046 9.378L1.054 31.29l6.118-1.958A15.906 15.906 0 0016.004 32C24.826 32 32 24.822 32 16S24.826 0 16.004 0zm9.316 22.612c-.39 1.1-1.932 2.014-3.178 2.282-.854.18-1.968.324-5.72-1.228-4.804-1.986-7.898-6.856-8.138-7.174-.23-.318-1.932-2.574-1.932-4.908s1.222-3.482 1.656-3.96c.434-.478.948-.598 1.264-.598.316 0 .632.004.908.016.292.014.684-.11 1.07.816.39.942 1.326 3.236 1.442 3.472.116.236.194.512.038.83-.156.318-.234.516-.468.796-.234.28-.492.624-.702.838-.234.236-.478.492-.206.966.272.474 1.212 2 2.602 3.24 1.786 1.594 3.292 2.088 3.766 2.322.474.234.752.196 1.028-.118.278-.316 1.186-1.382 1.504-1.856.316-.474.634-.39 1.07-.234.434.156 2.762 1.302 3.236 1.54.474.236.79.356.908.554.116.196.116 1.148-.274 2.248z" />
      </svg>
    </motion.a>
  );
};

export default WhatsAppButton;
