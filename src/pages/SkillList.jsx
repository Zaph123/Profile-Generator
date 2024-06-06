/* eslint-disable react/jsx-key */
import Skills from '../components/Skills';
import profile from '../assets/man.png'
import profile2 from '../assets/profile-1.png'
import profile3 from '../assets/profile-2.png'
import { motion } from 'framer-motion'

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, A11y, EffectCoverflow } from 'swiper/modules';
import {  useState, createContext,} from 'react';
import { Link } from 'react-router-dom';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

 export const modalContext = createContext(null)

 const SkillList = () => {

   const cardContainers = [
    {
      image: profile,
      name: 'Einstein Bassey',
      background: "#bb914c",
      introduction: "I'm a passionate Graphic Designer/Web Developer/UI-UX Enthusiast breathing life into ideas through the magic of design and technology."
    },
    {
      image: profile2,
      name: 'Sandra Bassey',
      background: "#177a5e",
      introduction: "I'm a passionate Graphic Designer/Web Developer/UI-UX Enthusiast breathing life into ideas through the magic of design and technology."
    },
    {
      image: profile3,
      name: 'Grace Andrew',
      background: '#8e1514',
      introduction: "I'm a passionate Graphic Designer/Web Developer/UI-UX Enthusiast breathing life into ideas through the magic of design and technology."
    },
    {
      image: profile3,
      name: 'Grace Andrew',
      background: '#8e1514',
      introduction: "I'm a passionate Graphic Designer/Web Developer/UI-UX Enthusiast breathing life into ideas through the magic of design and technology."
    },
    {
      image: profile3,
      name: 'Grace Andrew',
      background: '#8e1514',
      introduction: "I'm a passionate Graphic Designer/Web Developer/UI-UX Enthusiast breathing life into ideas through the magic of design and technology."
    },
    {
      image: profile3,
      name: 'Grace Andrew',
      background: '#8e1514',
      introduction: "I'm a passionate Graphic Designer/Web Developer/UI-UX Enthusiast breathing life into ideas through the magic of design and technology."
    },
   ]
 
    const skillset = [
        {
            skill : "Html & Css",
            level : "Beginners",
            color : "#e150b9",
        },
        {
            skill : "Javascript",
            level : "Intermediate",
            color : "#87a5ff"
        },
        {
            skill : "Git & Github",
            level : "Intermediate",
            color : "#fb7000"
        },
        {
            skill : "React",
            level : "Advanced",
            color : "#d8b1b1"
        }
    ]
    const [modal, displayModal] = useState(false)
    // const genModal = () => {
    //   displayModal(true)
    // }
    // const closeModal = () => {
    //   displayModal(false)
    // }
    // const genTemModal = () => {
    //   console.log("tem modal")
    // }


    

    return (
      <modalContext.Provider value={displayModal}>
      <div className='swiper-inner'>
        <div className="menu">
          <Link to="/profiles/my-profile" className='profile-link'>My Profile</Link>
        </div>
        <div className="hero">
          <h1>Profile Card generator</h1>
          <div className="btns">
          <GenerateBtn><Link className='a' to='/profiles/profile-generator'>Generate profile card</Link></GenerateBtn>
          <GenerateBtn><Link className='a'>Generate from template</Link></GenerateBtn>
          </div>
        </div>
       
       <Swiper 
       style={
        {
          "--swiper-navigation-color": "#000", 
          "--swiper-pagination-color": "#000",
        }
       }
       modules={[Navigation, Pagination, A11y, EffectCoverflow]}
       className='all-skill-section' id='Skills-sect'
       pagination={{ clickable: true }}
       navigation
       grabCursor={true}
       spaceBetween={50}
       loop = {true}
       autoplay={{delay: 2000}}
       centeredSlides = {true}
       effect={'coverflow'}
      //  slidesPerView={3}
       coverflowEffect={{
        rotate : 0,
        stretch : 0,
        depth : 50,
        modifier : 2.4,
        slideShadows: false
      }}
         breakpoints= {{
                   640:{
                       slidesPerView: 2,
                       spaceBetween: 20,
                   },
       
                  //  728: {
                  //      slidesPerView: 2,
                  //      spaceBetween: 40,
                  //  },
       
                   1024: {
                       slidesPerView: 3,
                       spaceBetween: 50,
                   }}
                  }
          >
            {cardContainers.map(cardContainer => {
             return(
             <>
              <SwiperSlide 
                className='swiper-slide'
            >
             
          <motion.div
                 className='card-container'>
                <div className="image-cont">
                   <img src={cardContainer.image} alt="profile-img" />
               <div className="profile-img">
                <img src={cardContainer.image} alt="" />
               </div>
               </div>
                <motion.div
                  className="intro"
                  >
               <div className='about'>
                
                 <h1>{cardContainer.name}</h1>
                 <p>{cardContainer.introduction}</p>
               </div>
                
              <div className='skill'>
                 <h1>Skills</h1>
                 <div className="skill-cont">
                   {skillset.map(skill => (
                    <Skills 
                      skill={skill.skill} 
                      level={skill.level} 
                      color={skill.color}/>
                      ))}
                  </div>
                </div>
         </motion.div>
        </motion.div>  
        </SwiperSlide>
          </>
        )}
        )}
       </Swiper>
        </div>
    </modalContext.Provider>
    )
 }

 const GenerateBtn = ({children}) => {
  return(
    <motion.button 
          whileTap={{
            scale: .95,
            rotate: -2
          }}
          transition={{
            duration: .125,
            ease: "easeInOut"
          }}
          className='generate-card'
          >
            {children}
          </motion.button>
  )
 }
 
 

  
 export default SkillList