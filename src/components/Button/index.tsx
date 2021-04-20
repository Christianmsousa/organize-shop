import React from 'react';
import { ButtonComponent } from './style';
import { FaSignInAlt } from 'react-icons/fa';
import { animate, motion } from 'framer-motion';
import Image from 'next/image';
// Animations
const easing = [0.6, -0.5, 0.01, 0.99];

const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
  },

  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing,
    },
  },
};

interface ButtonPropos {
  title: string;
  type?: string;
}

const Button: React.FC<ButtonPropos> = ({ children, title }) => {
  return (
    <>
      <motion.div variants={fadeInUp}>
        <ButtonComponent type="submit">
          <Image src="/assets/ArrowIcon.svg" width={15} height={15} />
          <span>{title}</span>
        </ButtonComponent>
        {children}
      </motion.div>
    </>
  );
};

export default Button;
