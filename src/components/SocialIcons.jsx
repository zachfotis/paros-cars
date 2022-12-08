import { FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';
import { motion } from 'framer-motion';

const SocialIcons = () => {
  return (
    <div className="flex justify-center items-center gap-10">
      <motion.div whileHover={{ scale: 1.1 }}>
        <FiInstagram className="text-3xl cursor-pointer" />
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <FiTwitter className="text-3xl cursor-pointer" />
      </motion.div>
      <motion.div whileHover={{ scale: 1.1 }}>
        <FiFacebook className="text-3xl cursor-pointer" />
      </motion.div>
    </div>
  );
};
export default SocialIcons;
