import { motion, useAnimationControls } from "framer-motion";
import { useState } from "react";

const TitleSpan = ({ children }) => {
  const controls = useAnimationControls();
  const [isHappening, setIsHappening] = useState(false);

  const elastic = () => {
    controls.start({
      transform: [
        "scale3d(1, 1, 1)",
        "scale3d(1.4, .55, 1)",
        "scale3d(.75, 1.25, 1)",
        "scale3d(1.25, .85, 1)",
        "scale3d(.9, 1.05, 1)",
        "scale3d(1, 1, 1)",
      ],
      transition: {
        times: [0, 0.2, 0.6],
      },
    });
    setIsHappening(true);
  };

  return (
    <motion.span
      animate={controls}
      onMouseOver={() => {
        if (!isHappening) elastic();
      }}
      onAnimationComplete={() => setIsHappening(false)}
    >
      {children}
    </motion.span>
  );
};

export default TitleSpan;
