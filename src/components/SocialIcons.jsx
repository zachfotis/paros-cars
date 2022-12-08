import { FiInstagram, FiTwitter, FiFacebook } from 'react-icons/fi';

const SocialIcons = () => {
  return (
    <div className="flex justify-center items-center gap-10">
      <FiInstagram className="text-3xl" />
      <FiTwitter className="text-3xl" />
      <FiFacebook className="text-3xl" />
    </div>
  );
};
export default SocialIcons;
