import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { motion, useScroll, useTransform } from 'framer-motion';

const SocialLinks = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [-150, 150]);

  const links = [
    {
      id: 1,
      child: <FaGithub size={25} />,
      href: 'https://github.com/Akashshajiap',
      style: 'rounded-tr-md',
    },
    {
      id: 2,
      child: <FaLinkedin size={25} />,
      href: 'https://linkedin.com/in/akash-a-p-934889315',
    },
    {
      id: 3,
      child: <FaXTwitter size={25} />,
      href: '#',
    },
    {
      id: 4,
      child: <FaInstagram size={25} />,
      href: '#',
      style: 'rounded-br-md',
    },
  ];

  return (
    <motion.div 
      style={{ y }}
      className="flex flex-col fixed top-1/2 left-0 -translate-y-1/2 z-50 gap-6 px-4"
    >
      {links.map(({ id, child, href }) => (
        <a
          key={id}
          href={href}
          target="_blank"
          rel="noreferrer"
          className="text-secondary hover:text-white transition-colors duration-300"
        >
          {child}
        </a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;
