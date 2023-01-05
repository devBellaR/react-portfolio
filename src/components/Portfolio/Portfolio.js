import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

// Imports
import { images } from "./ImageData";

import { 
    PortfolioContainer,
    Title,
    SubTitle,
    Container
} from './PortfolioStyles';

// Animations
import { scrollReveal } from '../../Animations';
import { useScroll } from "../../UseScroll";

const variants = {
    enter: {
      opacity: 0,
    },
    center: {
      opacity: 1
    },
    exit: {
      opacity: 0
    }
};


  const useSlideShow = ({ images, delay, onComplete }) => {
    const [index, setIndex] = useState(0);
  
    useEffect(() => {
      const newIndex = index + 1;
      setTimeout(() => {
        if (newIndex <= images.length - 1) {
          setIndex(newIndex);
        } else {
          onComplete();
        }
      }, delay);
    }, [index]); // eslint-disable-line
  
    return {
      image: images[index],
      reset: () => {
        setIndex(0);
      }
    };
  };

const Portfolio = () => {

    const [element, controls] = useScroll();

    const { image, reset } = useSlideShow({
        images,
        delay: 3000,
        onComplete: () => {
          reset();
        }
      });

    return (
    <PortfolioContainer
        id="Portfolio"
        variants={scrollReveal}
        animate={controls}
        initial="hidden"
        ref={element}>
        <SubTitle>Portfolio</SubTitle>
        <Title>Most recent work</Title>
            <Container>
            {/* Carousel slideshow here */}
            <AnimatePresence initial={false}>
                <motion.img
                    key={image}
                    src={image}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                    opacity: { duration: 1 }
                    }}
                />
            </AnimatePresence>
            </Container>
    </PortfolioContainer>
)};

export default Portfolio;
