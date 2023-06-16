export const transition = { type: "spring", duration: 1.5 };

export const slideAnimation = (direction) => {
  return {
    initial: {
      x: direction === "left" ? -550 : direction === "right" ? 450 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -550 : 0,
      opacity: 0,
      transition: { ...transition, delay: 0 },
    },
    animate: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: { ...transition, delay: 0.5 },
    },
    exit: {
      x: direction === "left" ? -550 : direction === "right" ? 550 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -550: 0,
      transition: { ...transition, delay: 0 },
    },
  };
};



export const fadeAnimation = {
  initial: {
    opacity: 0,
    transition: { ...transition, delay: 0.25 },
  },
  animate: {
    opacity: 1,
    transition: { ...transition, delay: 0.25 },
  },
  exit: {
    opacity: 0,
    transition: { ...transition, delay: 0.25 },
  },
};

export const headTextAnimation = {
  initial: { x: 100, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 5,
    stiffness: 40,
    restDelta: 0.001,
    duration: 1.5,
  },
};

export const headContentAnimation = {
  initial: { y: 100, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 7,
    stiffness: 30,
    restDelta: 0.001,
    duration: 1.5,
    delay: 0.2,
    delayChildren: 0.2,
  },
};

export const headContainerAnimation = {
  initial: { x: -100, opacity: 0, transition: { ...transition, delay: 0.5 } },
  animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0 } },
  exit: { x: -100, opacity: 0, transition: { ...transition, delay: 0 } },
};


export const workorderContainerAnimation = {
  initial: { x: -300, opacity: 0, transition: { ...transition, delay: 0.5 } },
  animate: { x: 0, opacity: 1, transition: { ...transition, delay: 0.5 } },
  exit: { x: -300, opacity: 0, transition: { ...transition, delay: 0 } },
};

export const workorderTextAnimation = {
  initial: { x: -300, opacity: 0 },
  animate: { x: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 5,
    stiffness: 40,
    restDelta: 0.001,
    duration: 0.3,
  },
  exit:{ x: -300, opacity: 0, transition: {...transition, delay: 0 }}
};

export const workorderContentAnimation = {
  initial: { y: -300, opacity: 0 },
  animate: { y: 0, opacity: 1 },
  transition: {
    type: "spring",
    damping: 7,
    stiffness: 30,
    restDelta: 0.001,
    duration: 0.6,
    delay: 0.2,
    delayChildren: 0.2,
  },
  exit:{ x: -300, opacity: 0, transition: {...transition, delay: 0 }}
};


