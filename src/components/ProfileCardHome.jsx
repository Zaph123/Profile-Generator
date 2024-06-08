import { motion } from "framer-motion"
import { useState, useRef } from "react"
import { Link } from "react-router-dom"
import image from '../assets/empty.jpg'
import instagram from '../assets/instagram-logo1.png'
import facebook from '../assets/facebook2.png'
import { FaUpload, FaLinkedin, FaInstagram, FaWhatsapp, FaArrowLeft, FaTrash, FaEdit } from "react-icons/fa"

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
      {retreiveJSON && 
      (
        <>
          <div onClick={removeData} className="profile-link"><FaTrash /></div>
          <div><Link to='/my-profile/profile-generator-card-edit' className="profile-link" ><FaEdit /></Link></div>
        </>
      )}
    <div className="p-cont"><Link to='/' className="profile-link" ><FaArrowLeft /></Link></div>
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
    const [src, setSrc] = useState(result[0].coverphoto)
    
    const uploadedImage = useRef(null)
    const imageUploader = useRef(null)

    const handleImageupload = e => {
       const [file] = e.target.files;
       console.log(file)
       if(file) {
        const reader = new FileReader()
        // const { current } = uploadedImage
        // current.file = file
        reader.onload = e => {
          console.log(e)
          // current.src = e.target.result
          setSrc(e.target.result)
        }
        reader.readAsDataURL(file)
       }
       else{
        console.log("unable")
       }
    }
    

    return (
      <div className="profile-contnr">
             <motion.div
                 className='profile'
                 >
               <div className="image-cont">
                <div className="cover-photo">
                  <div className="upload">
                    <input ref={imageUploader} type="file" accept="image/*" onChange={handleImageupload}/>
                  </div>
                  <button className="upload-btn" onClick={() => imageUploader.current.click()}><FaUpload /></button>
                 <img ref={uploadedImage} src={src} alt="profile-img" />
                </div>
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
                      <a href={result[0].facebook}><img src={facebook} alt="" /></a>
                    </span>  
                    <span className="s-links">
                      <a href={result[0].linkedIn}><FaLinkedin /></a>
                    </span> 
                    <span className="s-links">
                      <a href={result[0].instagram}><img src={instagram} alt="" /></a>
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

          {// <div className="img-upload">
          //   <input ref={imageUploader} type="file" accept="image/*" onChange={handleImageupload}/>
          //   <div className="upload">
          //     <img ref={uploadedImage} />
          //   </div>
          //   <button onClick={() => imageUploader.current.click()}>Upload</button>
          // </div>
}      </div>
    )
   }

   const EmptyPage = () => {
    return(
        <div  className="empty-profile-page">
         <img src={image} alt="" />
         <p style={{textAlign: "center"}}>Oops No Profile Card Found</p>
         <Link to='/profile-generator' className="empty-profile-btn">Generate New Card</Link>
        </div>
    )
   }
 export default ProfileCard
 
