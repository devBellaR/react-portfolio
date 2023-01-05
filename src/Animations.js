// Frontpage animation

 export const backgroundAnim = {
     hidden: {
         opacity: 0, 
         y: -1000,
     },
     show: {
         opacity: 1,
         y: 0,
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
            duration: 3,
            staggerChildren: 1,
        }
        
    }
};

export const buttonAnim = {
    hidden: {
        opacity: 0,
        scale: 0,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 4
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
        opacity: 0 , 
        transition: { 
            duration: 0.5,
        },
    },
    show: {
      opacity: 1,
      transition: {
        duration: 0.5,
        staggerChildren: .5,
      },
    },
    exit: {
        opacity: 0,
        transition: { 
            duration: 0.5,
        },
    },
};


export const imageAnim = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 1
        }
    }
}

export const textAnim = {
    hidden: {
        opacity: 0,
        scale: 0,
    },
    show: {
        opacity: 1,
        scale: 1,
        transition: {
            duration: 2
        }
    }
}