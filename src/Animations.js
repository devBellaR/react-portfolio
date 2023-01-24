// Frontpage animation

 export const backgroundAnim = {
     hidden: {
         opacity: 0, 
     },
     show: {
         opacity: 1,
         transition: {
             duration: 1,
         }
     }
 }

 export const titleAnim = {
    hidden: {
        opacity: 0, 
        y: 50
    },
    show: {
        opacity: 1, 
        y: 0,
        transition: {
            duration: 1.5,
        }
        
    }
};

export const buttonAnim = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            delay: 1,
            duration: 2
        }
    }
};


// Nav animation

export const navAnim = {
    hidden: {
        opacity: 0
    },
    show: {
        opacity: 1, 
        transition: {
            duration: 3,
            transform: "ease-in",
        }
    },
};

// Scroll reveal animation

export const scrollReveal = {
    hidden: {
        opacity: 0,
        y: '10%',
        transition: { 
            duration: .5,
            ease: "easeInOut"
        },
    },
    show: {
      opacity: 1,
      y: '0%',
      transition: {
        ease: "easeInOut",
        duration: .5,
        staggerChildren: .5,
        delayChildren: 1,
      },
    },
};