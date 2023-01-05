import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const Button = styled.div`
  z-index: 3;
  cursor: pointer;
`;

const Path = (props) => (
  <motion.path
    fill="transparent"
    stroke= "#f1f1f1"
    strokeLinecap="round"
    strokeWidth="2"
    {...props}
  />
);

const transition = { duration: 0.3 };

const ToggleMenu = ({ toggle, isOpen }) => {
  return (
    <Button onClick={toggle}>
      <svg width="35" height="35" viewBox="0 0 35 35">
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 0 17 L 48 17" },
            open: { d: "M 15 40 L 19 -1", y: 7, rotate: 45 },
          }}
          transition={transition}
        />
        <Path
          animate={isOpen ? "open" : "closed"}
          initial={false}
          variants={{
            closed: { d: "M 0 26 L 48 26" },
            open: { d: "M 16 2 L 20.5 43", y: -7, rotate: -45 },
          }}
          transition={transition}
        />
      </svg>
    </Button>
  );
}

export default ToggleMenu;