import Name from '../components/Name';
import Age from '../components/Age';
import Nationality from '../components/Nationality'
import { motion, AnimatePresence, useMotionValue, useTransform, useInView, useScroll,}  from 'framer-motion'
import { useState, useRef } from 'react';

  const SelfIntro = () => {
    const name = "Peter Parker"
    const age = "100";
    const nationality = "USA"
    const[toggle, setToggle] = useState(false)
    const ref = useRef(null)
    const isInView = useInView(ref)
    const { scrollYProgress } = useScroll({
      target: ref,
      offset: ["start 50%", "end start"]
    })
    const x = useMotionValue(0)
  //   useMotionValueEvent(x, "change", 
  // latest => console.log(latest)
  // )
    const rotate = useTransform(scrollYProgress, [0, 1],
    ["0deg", "180deg"])
    const scale = useTransform(x, [-200, 0, 200], [1.5, 1, 1.5])
    return (
      <div className="cont self-intro">
        <motion.div
        layout
        style={{ rotate, x, scale }}
        ref={ref}
        drag='x'
        dragConstraints={{
          left: -100,
          right: 100,
        }}
        // dragElastic={0}
        // dragMomentum={false}
        className='self-box'
        initial={{opacity:  0, y:  0}}
        whileInView={{opacity: 1, y:  0}}
        viewport={{
          margin: "-100px",
          once: "true"
        }}
        transition={{duration: .5, ease: "easeInOut"}}
        >
          <motion.div 
          animate={{ y : isInView ? "-90px" : " 0"}}
          transition={{duration: 1,}}
          style={{width: "300px", height: "70px", background: "#0c0c0c", position: "absolute", top:  0, left: 0,}} />
          
          <motion.div
          animate={{ y : isInView ? "90px" : " 0"}}
          transition={{duration: 1,}} 
          style={{width: "300px", height: "70px", background: "#fb7000", position: "absolute", bottom: 0, left: 0}}/>
     <Name myname={name}/>
     <Age age={age}/>
     <Nationality nationality={nationality}/>
    <AnimatePresence mode='pop'>
    {toggle && <Button/>}
    </AnimatePresence>
     <motion.button 
     initial={{opacity:  0, y: 100}}
     animate={{opacity: 1, y:  0}}
     transition={{duration: .5, type: 'spring'}}
     whileHover={{scale: 1.1}}
     whileTap={{scale:  0.95}}
     style={{cursor: 'pointer'}}
     onHoverStart={() => (console.log("Hey"))}
     onClick={() => setToggle(!toggle)}
     layout
     >
        Click Me
     </motion.button>
     </motion.div>
    </div>
    )
 }
 
 const Button = () => {
  const allBtn = [
    {
      id: 1,
      delay : .2
    },
    {
      id: 2,
      delay : .3
    }
  ]
  return (
    <>
   {allBtn.map((btn) => {
    return(
      <>
      <motion.div 
     initial={{ opacity:  0, scale:  0, y: 100, rotate:  0 }}
    //  animate={{ x: 100, y: 100, rotate: 180, opacity: 1, scale: 1}}
    //  animate={{
    //   scale: [1, 2, 1],
    //   rotate: [ 0, 270,  0],
    //   borderRadius: ["20%", "50%", "20%"],
    // }}
    animate={{opacity: 1, scale: 1, y:  0, rotate: 360}}
    exit={{opacity:  0, scale:  0, y: 100, rotate:  0}}
     transition={{duration: 1, delay: btn.delay, type: "spring", ease: "backInOut" }}
     className='animate-div two'
     >
     My animation
     </motion.div>
     </>
    )
   })}
   </>
  )
 }
 export default SelfIntro