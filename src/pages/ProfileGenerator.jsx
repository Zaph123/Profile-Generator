import { useState, useContext, useRef, useEffect } from "react"
import profile from '../assets/man.png'
import profile2 from '../assets/profile-1.png'
import profile3 from '../assets/profile-2.png'
import profile4 from '../assets/profile-3.png'
import profile5 from '../assets/profile-4.jpg'
import profile6 from '../assets/profile-5.jpg'
import profile7 from '../assets/profile-6.jpg'
import profile8 from '../assets/profile-7.jpg'
import profile9 from '../assets/profile-8.jpg'
import profile10 from '../assets/profile-9.jpg'
import profile11 from '../assets/profile-10.jpg'
import success from '../assets/success-gif.gif'
import landscape from '../assets/slide-5.jpg'
import { motion, AnimatePresence } from 'framer-motion'
import { FaTimes, FaHome} from 'react-icons/fa';
import { FaCartArrowDown } from "react-icons/fa"
import { modalContext } from "./SkillList";
import { Link } from "react-router-dom";
import useLocalStorage from "../components/useLocalStorage"


// const toggleBar = {
//   initial: {rotate: "45deg", y: "10px"},
//   initial1: {rotate: "-45deg", y: "-50%"},
//   exit: {rotate: "0"},
//   hide: {display: "none"},
//   show: {display: "block"},
//   transition: {
//       duration: .5, 
//       ease: "easeInOut", 
//   }
// }

const ProfileGenerator = () => {
    // const modalClose = useContext(modalContext)
    const [handleError, setHandleError] = useState(false)  
    const [active, setActive] = useState("")
  
    const textareaRef = useRef(null)
    const spanRef = useRef(null)

    const [fullname, setFullName] = useState("")
    const [uname, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [desc, setDesc] = useState(textareaRef)
    const [occupation, setOccupation] = useState("")
    const [fblink, setFbLink] = useState("")
    const [linkedinlink, setLinkedInLink] = useState("")
    const [iglink, setIgLink] = useState("")
    const [walink, setWaLink] = useState("")
    const [img, setImg] = useState("")
  
    const fullNameChange = (e) => {
      setFullName(e.target.value)
    }
    const usernameChange = (e) => {
      setUsername(e.target.value)
    }
    const emailChange = (e) => {
      setEmail(e.target.value)
    }
    const textareaChange = (e) => {
      setDesc(e.target.value)
    }
    const occupationChange = (e) => {
      setOccupation(e.target.value)
    }
    const fbChange = (e) => {
      setFbLink(e.target.value)
    }
    const linkedinChange = (e) => {
      setLinkedInLink(e.target.value)
    }
    const igChange = (e) => {
      setIgLink(e.target.value)
    }
    const waChange = (e) => {
      setWaLink(e.target.value)
    }
    const getImage = (src, id) => {
      setActive(id)
      setImg(src)
    }
   

    const allSkills = []
    const [text, setText] = useState('')
    const [addSkill, setAddSkill] = useState(allSkills)
    const [err, setErr] = useState(false)
    const [close, setClose] = useState(false)
    const { setItem } = useLocalStorage("Details")
     
    const skillLogic = () => {
      const newSkill = {
        id: addSkill.length + 1,
        skillname: text.trim()
        }
       
       setAddSkill((pv) => [...pv, newSkill])
      textareaRef.current.value = ''
        setErr(false)
        setText("")
    }

     const handleTextareaKeyUp = (e) => {
      if(e.key === "Enter"){
        if(text === ""){
          setErr(true)
        }
        else{
          skillLogic()
          setErr(false)
        }
    }
     }
     
     const handleSkillChange = (e) => {
       setText(e.target.value.trim())
      //  e.target.value = ""
     }

     const addNewSkill = (e) => {
      e.preventDefault()
        if(text !== ""){
       skillLogic()
      } 
      else{
        setErr(true)
      }
     }

     

     const deleteSkill = (k) => {
        console.log(k)
        setAddSkill(del => del.filter((c) => c.id !== k))
     }

    const getDetails = (e) => {
      e.preventDefault()
       if(fullname === "" || uname === "" || email === "" || desc === "" || addSkill == []){
        // console.log("input fields")
        setHandleError(true)
        setErr(true)
       }
        else{
          setHandleError(false)
          setErr(false)
        //   modalClose(false)
          const userDetails = [
            {
              name: fullname,
              username: uname,
              email: email,
              description: desc,
              coverphoto: landscape,
              profileImg: img === "" ? profile : img,
              skills: addSkill,
              occupation: occupation,
              facebook: fblink,
              linkedIn: linkedinlink,
              instagram: iglink,
              whatsapp: walink,
            }
          ]
          
          setItem(userDetails)
          setClose(true)

        }
        
    }
    
    

    const sampleImages = [
      {
        id: "1",
        src: profile
      },
      {
        id: "2",
        src: profile2
      },
      {
        id: "3",
        src: profile3
      },
      {
        id: "4",
        src: profile4
      },
      {
        id: "5",
        src: profile5
      },
      {
        id: "6",
        src: profile6
      },
      {
        id: "7",
        src: profile7
      },
      {
        id: "8",
        src: profile8
      },
      {
        id: "9",
        src: profile9
      },
      {
        id: "10",
        src: profile10
      },
      {
        id: "11",
        src: profile11
      },
    ]

  //  const textareaValue = "I'm a passionate Graphic Designer/Web Developer/UI-UX Enthusiast breathing life into ideas through the magic of design and technology."
    
    const closeModal = () => {
      setClose(false)
    }

    return(
      <div>
        <AnimatePresence>
        {close && <GeneratorModal closeModal={closeModal}/>}
        </AnimatePresence>
      <div className='Generator'>
        <Menu />
        <div className="generator-cont">
          <div className='row1'>
        <form method="post" className="form shadow-[0_0_15px_-5px_rgba(0,0,0,0.15)]">
        <div className="inner">
         <div className='input-bx'>
          <label htmlFor="name">Full Name:</label>
           <input type="text" name='name' id='name' placeholder='E.g John Doe' onChange={fullNameChange}/>
           {handleError && (<span className="err-msg">Invalid Name</span>)}
        </div>
         <div className='input-bx'>
         <label htmlFor="username">Username:</label>
           <input type="text" name='username' id='username' placeholder='E.g Joh Doe' onChange={usernameChange}/>
           {handleError && <span className="err-msg">Invalid Username</span>}
        </div>
         <div className='input-bx'>
           <label htmlFor="email">Email:</label>
          <input type="email" name='email' id='email' placeholder='JohnDoe@gmail.com' onChange={emailChange}/>
            {handleError && <span className="err-msg">Invalid Email</span>}
         </div>
         <div className='input-bx'>
           <label htmlFor="occupation">Occupation/Job:</label>
          <input type="text" name='occupation' id='occupation' placeholder='What do you do...' onChange={occupationChange}/>
            {handleError && <span className="err-msg">Invalid input</span>}
         </div>
         <div className='input-bx'>
           <label htmlFor="description">Description:</label>
           <textarea 
           type="text" 
           name='description' 
           id='description' 
           placeholder='Add Description' 
           onChange={textareaChange} 
          //  value={desc === "" ? textareaValue : desc}
           ></textarea>
          {handleError&& <span className="err-msg">Please input something</span>}
        </div>
          
          <MySkills handleKeyUp={handleTextareaKeyUp} err={err} spanref={spanRef} myRef={textareaRef} skill={addSkill}  handleSkill={handleSkillChange} addnewskill={addNewSkill} deleteskill={deleteSkill}/>
     </div>
     <div className="social-media-links">
        <div className="row2">
        <h1>Social Media Links</h1>
         <div className='input-bx'>
           <label htmlFor="facebook">Facebook: *</label>
          <input type="text" name='facebook' id='facebook' placeholder='https://www.facebook.com' onChange={fbChange}/>
            {/* {handleError && <span className="err-msg">Invalid input</span>} */}
         </div>
         <div className='input-bx'>
           <label htmlFor="linkedin">LinkedIn: *</label>
          <input type="text" name='linkedin' id='linkedin' placeholder='https://www.linkedIn.com' onChange={linkedinChange}/>
            {/* {handleError && <span className="err-msg">Invalid input</span>} */}
         </div>
         <div className='input-bx'>
           <label htmlFor="instagram">Instagram: *</label> 
          <input type="text" name='instagram' id='instagram' placeholder='https://www.instagram.com' onChange={igChange}/>
            {/* {handleError && <span className="err-msg">Invalid input</span>} */}
         </div>
         <div className='input-bx'>
           <label htmlFor="whatsapp">Whatsapp: *</label>
          <input type="text" name='whatsapp' id='whatsapp' placeholder='https://www.whatsapp.com' onChange={waChange}/>
            {/* {handleError && <span className="err-msg">Invalid input</span>} */}
         </div>
        </div>  

       </div>
        </form>
        <div className="sample-profile-img shadow-[0_0_15px_-5px_rgba(0,0,0,0.15)]">
          <h2 className="text-[17px] font-bold">Choose Avatar*</h2>
          <div className="sample-img-cont">
          {sampleImages.map(img => (<img key={img.id} style={{border: img.id === active ? "2px solid #8a67b4" : "none"}} src={img.src} alt="" onClick={() => getImage(img.src, img.id)}/>))}
          </div>
        </div>
        </div>
        <motion.button whileTap={{scale: .95}} id="generate-btn" onClick={getDetails}>Generate Profile</motion.button>
        </div>
      </div>
      </div>
    )
   }
   
  const Menu = () => {
    const [active, setActive] = useState(false)
    const toggle = () => {
      setActive(true)
    }
    const closeMenu = () => {
      setActive(false)
    }
    return(
      <div className="menu gen">
          <h1 className='poster-name font-bold'>My profile</h1>
          <div className={`menu-link ${active ? "active" : ""}`}>
            <FaTimes className="fa-times" onClick={closeMenu}/>
          <motion.div whileTap={{scale: .95}}>
            <Link to="/" className='profile-link flex gap-2'><FaHome />Home</Link>
          </motion.div>
          <motion.div whileTap={{scale: .95}}>
            <Link to="/my-profile" className='profile-link flex gap-2'><FaCartArrowDown />Cards</Link>
          </motion.div>
          </div>
          <HamburgerMenu toggle={toggle} active={active}/>
        </div>
      
    )
  }
  
  const HamburgerMenu = ({toggle, active}) => {
    
    return(
        <motion.div 
        className="menu-bar" 
        onClick={toggle}
        transition={{duration: .5}}
        whileTap={{scale: .95}}
        >
            <motion.span 
            className='line one' 
            />
            <motion.span 
            className='line two'
            />
            <motion.span 
            className='line three'
            />
        </motion.div>
    )
}

   const MySkills = ({err, skill, handleSkill, addnewskill, deleteskill, myRef, spanref, handleKeyUp}) => {
   
    return(
        <div className="add-skills-cont">
            <h2>Skills</h2>
            <div className="list">
           {skill.map((s) => {
            return(
                <Card key={s.id} ID={s.id} name={s.skillname} del={() => deleteskill(s.id)}/>
            )
           })}
           </div>
           <textarea ref={myRef}  placeholder="New Skill..." name="skill-box" id="add-skill" onChange={handleSkill} onKeyUp={handleKeyUp}></textarea>
            {err && <span className="err-msg">Invalid Input</span>}
           <span ref={spanref} onClick={addnewskill} id="add-new-skill">Add new skill +</span>
        </div>

       
    )
   }

   const Card = ({ID, name, del}) => {
    return <span className="skill-card">
       {name}
       <div className="delete-skill" onClick={del}>
       <FaTimes className='del-icon'/>
        </div>
    </span>
}

 const GeneratorModal = ({closeModal}) => {
  return(
      <motion.div 
      initial={{scale: 0}} 
      animate={{scale: 1}} 
      transition={{duration: .125, type: "spring", ease: "easeInOut"}}
      exit={{scale: 1}} 
      className="modal-contnr">
        <div className="modal-box">
          <motion.div
          // animate={{
          //   scale: [.5, 1, .5],
          //   // rotate: [0, 180, 0],
          //   y: ["0px", "-20px", "0px"], 
          // }}
          // transition={{duration: 1.5, repeat: Infinity}}
          className="emoji"><img src={success} alt="" /></motion.div>
          <p>Your Profile has been <b style={{color: "#5a338a"}}>Successfully</b> Generated</p>
          <div className="modal-btns-box">
             <button className="modal-btn"><Link to="/my-profile" className="a">View</Link></button>
             <button className="modal-btn" onClick={closeModal}>Close</button>
          </div>
        </div>
      </motion.div>
  )
 }
   export default ProfileGenerator