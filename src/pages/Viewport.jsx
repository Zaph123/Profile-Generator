import { motion, useInView, useScroll, useMotionValueEvent } from 'framer-motion'
import { useEffect, useRef } from 'react'
import img1 from '../assets/slide-2.jpg'
import img2 from '../assets/slide-3.jpg'
import img3 from '../assets/slide-4.jpg'


function Viewport() {
    const container = useRef(null)
    const ref = useRef(null)
    const scale = useInView(ref,{
        amount: "all",
        // once: true
        // root: container,
    })

    const { scrollYProgress } = useScroll(ref)
    
    useMotionValueEvent(scrollYProgress, "change",
        latest => console.log(latest)
    )
    useEffect(() => {
        // console.log(scale)
    })

    const variant = {
        initial: {
            scale: scrollYProgress,
            transition: {
                duration: .5,
                delay: .2
            }
        },
        animate: {
            scale: scrollYProgress,
            transition: {
                duration: .5,
                delay: .2
            }
        }
    }
    
  return (
    <div className="viewport" ref={container}>
      
      <motion.div 
      ref={ref}
      className="view">

        <motion.div 
        style={{scale: scrollYProgress}}
         variants={variant}
        initial='animate'
         animate={scale ? "initial" : "animate"}
        className="scale-item" 
        >
            <img src={img1} alt="" />
        </motion.div>

        <motion.div 
        variants={variant}
        initial="initial"
        animate={scale ? "animate" : "initial"}
        className="scale-item">
            
            <img src={img2} alt="" />
        </motion.div>

      <motion.div 
       variants={variant}
      initial='animate'
       animate={scale ? "initial" : "animate"}
      className="scale-item" >
            <img src={img3} alt="" />
        </motion.div>

      </motion.div>
    </div>
  )
}

export default Viewport
