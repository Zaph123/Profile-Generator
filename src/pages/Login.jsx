import { FaUser,FaLock } from 'react-icons/fa';
import lock from '../assets/svg/lock.svg'

import '../css/login.css'

 const Login = () => {
    return (
        <section className="w-full min-h-screen flex items-center justify-center">
            <div className="flex flex-col items-center gap-[30px] py-[20px] bg-white  form-body w-full max-w-[450px] h-auto">
                <div className='self-start px-[20px]'>
                  <h1 className='text-4xl font-bold text-[#0c0c0c]'>Login</h1>
                  <p className='text-[#585858]'>Hi, Welcome back 👏</p>
                </div> 
                <div className="inner w-full h-auto p-[10px] flex flex-col items-start justify-center gap-[30px]">
                    <div className="input-box relative w-full px-[10px]">
                        <input
                         type="text" 
                         name="name" 
                         id="uname" 
                         className="w-full peer"
                         required/>
                        <label htmlFor="uname" className="peer-focus:top-0 peer-focus:text-[#8a67b4] peer-focus:text-[14px] peer-valid:top-0 flex items-center justify-center gap-2 bg-[#fff] text-[#858585] pointer-events-none p-[5px] transition-all duration-300 ease-in-out absolute top-[50%] left-[15px] -translate-y-2/4">
                        <FaUser className='fill-none stroke-current' strokeWidth="50"/>
                        <span>Username</span>
                        
                        </label>
                    </div>
                    <div className="input-box relative input-box w-full px-[10px]">
                        <input
                         type="password" 
                         name="passwd" 
                         id="passwd" 
                         className="w-full peer"
                         required/>
                        <label htmlFor="passwd" className="peer-focus:top-0 peer-focus:text-[#8a67b4] peer-focus:text-[14px] peer-valid:top-0 flex items-center justify-center gap-2 bg-[#fff] text-[#858585] pointer-events-none p-[5px] transition-all duration-300 ease-in-out absolute top-[50%] left-[15px] -translate-y-2/4">
                        {/* <FaLock className='fill-none stroke-current' strokeWidth="50"/> */}
                        <svg xmlns="http://www.w3.org/2000/svg" className='fill-none stroke-current' strokeWidth="1" width="22" height="22" viewBox="0 0 24 24"><path d="M12 2C9.243 2 7 4.243 7 7v2H6c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v2H9V7zm9.002 13H13v-2.278c.595-.347 1-.985 1-1.722 0-1.103-.897-2-2-2s-2 .897-2 2c0 .736.405 1.375 1 1.722V20H6v-9h12l.002 9z">
                            </path></svg>
                        <span>Password</span>
                        </label>
                    </div>
                    <div className='w-full flex items-center justify-between px-[10px]'>
                        <div className='flex items-center gap-2 text-[#585858]'>
                            <input className='w-[15px] h-[15px] outline-none focus:outline-none cursor-pointer' type="checkbox" name="check" id="rememberMe" />
                            <label htmlFor="rememberMe">Remember me</label>
                        </div>
                        <a href="#" className='text-[#6366f1] hover:text-[#3033e7] hover:underline'>Forgot password?</a>
                    </div>
                    <div className='w-full h-[50px] px-[10px] rounded-[10px]'>
                        <button type="submit" className='text-lg text-white rounded-[10px] w-full h-full bg-[#6366F1] hover:bg-[#4345be]'>Login</button>
                    </div>
                    <div className='px-[10px] flex items-center justify-center w-full'>
                        <p className='text-[#585858]'>Not registered yet? <a href="#" className='text-[#6366f1] hover:text-[#3033e7]'>Create an Account</a></p>
                    </div>
                </div>
            </div>
        </section>
    )
 }

 export default Login;