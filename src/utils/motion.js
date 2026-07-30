export const textVariant = (delay) => ({
  hidden: { y: -30, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 80,
      damping: 18,
      delay,
    },
  },
});

export const fadeIn = (direction, type, delay, duration) => {
  const x = direction === "left" ? 40 : direction === "right" ? -40 : 0;
  const y = direction === "up" ? 40 : direction === "down" ? -40 : 0;

  return {
    hidden: { x, y, opacity: 0 },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type,
        delay,
        duration: duration || 0.45,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
};

export const zoomIn = (delay, duration) => ({
  hidden: { scale: 0.97, opacity: 0 },
  show: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "tween",
      delay,
      duration: duration || 0.45,
      ease: [0.22, 1, 0.36, 1],
    },
  },
});

export const slideIn = (direction, type, delay, duration) => {
  const x = direction === "left" ? "-30%" : direction === "right" ? "30%" : 0;
  const y = direction === "up" ? "30%" : direction === "down" ? "30%" : 0;

  return {
    hidden: { x, y },
    show: {
      x: 0,
      y: 0,
      transition: {
        type,
        delay,
        duration: duration || 0.45,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };
};

export const staggerContainer = (staggerChildren = 0.08, delayChildren = 0) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren,
    },
  },
});
