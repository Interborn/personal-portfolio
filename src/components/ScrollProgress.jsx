import React from 'react'
import { motion, useScroll, useSpring } from "framer-motion"

const ScrollProgress = () => {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
    });

  return (
    <div className="hidden sm:block relative w-full overflow-hidden">
        <motion.div className="progress-bar bottom-0 left-0 right-0 h-[3px] bg-stone-300 origin-[0%]" style={{ scaleX }} />
    </div>
  )
}

export default ScrollProgress