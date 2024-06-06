import { motion } from "framer-motion"
import { useState } from "react"
import { Link } from "react-router-dom"
import image from '../assets/empty.jpg'
import { FaFacebook, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa"

import '../css/profilecard.css'
 
 function ProfileCard() {
    const [del, setDelete] = useState(false)
    const retreiveDetails = localStorage.getItem("Details")
    const retreiveJSON = JSON.parse(retreiveDetails)
    
    const removeData = () => {
      setDelete(true)
      window.localStorage.removeItem("Details")
    }

   return (
    <div className="profile-page">
    <div className="menu">
      <div onClick={removeData} className="profile-link">Delete Card</div>
      <div><Link to='/profiles' className="profile-link" >Back</Link></div>
      {retreiveJSON && <div><Link to='/profiles/my-profile/profile-generator-card-edit' className="profile-link" >edit</Link></div>}
    </div>
    {
       retreiveJSON ?
         <ClientsProfileCard result={retreiveJSON}/> :
         <EmptyPage />
        }
    </div>
   )
 }
 

 const ClientsProfileCard = ({result}) => {
    // const [image, setImage] = useState("")
    
    return (
      <div className="profile-contnr">
             <motion.div
                 className='profile'
                 >
               <div className="image-cont">
                 <img src={result[0].coverphoto} alt="profile-img" />
                 <div className="profile-img">
                    <img src={result[0].profileImg} alt="" />
                 </div>
               </div>
                 <motion.div
                    className="intro"
                    >
                 <div className='about'>
                  <div className="col-1"> 
                     <h1>{result[0].username} <br />
                     <span>{result[0].occupation}</span>
                     </h1>
                     <p>{result[0].description}</p>
                   </div>  
                   <div className="col-2">
                    <span className="s-links">
                      <a href={result[0].facebook}><FaFacebook /></a>
                    </span>  
                    <span className="s-links">
                      <a href={result[0].linkedIn}><FaLinkedin /></a>
                    </span> 
                    <span className="s-links">
                      <a href={result[0].instagram}><FaInstagram /></a>
                    </span> 
                    <span className="s-links">
                      <a href={result[0].whatsapp}><FaWhatsapp /></a>
                    </span>
                   </div>
                 </div>
                  
                <div className='skill'>
                   <h1>Skills</h1>
                   <div className="skill-cont">
                     {result[0].skills.map((skill, i) => (
                     <div key={i} >
                     <p>{skill.skillname}</p>
                     </div>
                        ))}
                    </div>
                  </div>
           </motion.div>
          </motion.div>  
      </div>
    )
   }

   const EmptyPage = () => {
    return(
        <div  className="empty-profile-page">
         <img src={image} alt="" />
         <p style={{textAlign: "center"}}>Oops No Profile Card Found</p>
         <Link to='/profiles/profile-generator' className="empty-profile-btn">Generate New Card</Link>
        </div>
    )
   }
 export default ProfileCard
 
