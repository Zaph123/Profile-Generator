/* eslint-disable react/prop-types */
import { Link, Outlet } from 'react-router-dom'
import { useState} from 'react'
import { easeInOut, motion } from 'framer-motion'

 const Home = () => {
  const [active, setActive] = useState(1)
  const subLinks = [
    {
      id: 1,
      to: "/",
      name: "Home"
    },
    {
      id: 2,
      to: "/question",
      name: "Questions"
    },
    {
      id: 3,
      to: "/swiper",
      name: "Swiper"
    },
  ]
  const onActive = (id) => {
    console.log(id)
    setActive(id)
    console.log(setActive)
}

    return(
    <main>
      <motion.div 
      style={{transformOrigin: "left"}}
      className="sub-link"
      initial={{opacity: 0, scaleX: 0, y: "-100px"}}
      animate={{opacity: 1, scaleX: 1, y: "0px"}}
      transition={{duration: .5, ease: easeInOut, type: "spring"}}
      >
        {subLinks.map((links) => {
          return (
           <>
            <Link 
            to={links.to} 
            activeClass="active" 
            className={`link ${links.id === active ? "active" : ""}`}
            onClick={() => onActive(links.id)}
            >
              {links.name}
              {links.id === active && (<motion.div
              className='overlay' 
              layoutId='activeId'
              transition={{duration: .2}}
              />)}
            </Link>
           </> 
          )
        })}
        </motion.div>
     
        <Outlet />
      
   </main>
       
    )
}
export default Home