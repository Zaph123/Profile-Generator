/* eslint-disable react/jsx-key */
// import { useState } from 'react'
import './App.css'
import Home from './pages/Home';
import Question from './pages/Question';
import Profiles from './pages/Profiles';
import Header from './components/Header';
import SkillList from './pages/SkillList';
import SelfIntro  from './pages/SelfIntro';
import ProfileCard from './components/ProfileCard';
import ProfileGenerator from './pages/ProfileGenerator';
import Viewport from './pages/Viewport';
import ProfileGeneratorEdit from './components/ProfileGeneratorEdit';
import ProfileCardHome from './components/ProfileCardHome';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SwiperComponent from './pages/Swiper';
// import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

//  const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <LayoutComponent />,
//     children: [
//       {
//         index: true,
//         element: <Home />
//       },
//       {
//         path: "/question",
//         element: <Question />
//       },
//       {
//         path: "/skills",
//         element: <SkillList />
//       }
//     ]
//   }
//  ])

//  function LayoutComponent() {
//   return(
//     <div>
//       <Header />
//       <main>
//         <Outlet />
//       </main>
//     </div>
//   )
//  }
function App() {
  // return <RouterProvider router={router}/>
  return(
  <Router basename='/Profile-Generator/'>
  <Header />
  <Routes>
    <Route path='/home' element={<Home />} >
    <Route index element={<SelfIntro />} />
    <Route path="/home/question" element={<Question />} />
    <Route path="/home/swiper" element={<SwiperComponent />} />
    </Route>
    <Route path='/' element={<Profiles />}>
      <Route index element={<SkillList />} />
      <Route path='/my-profile' element={<ProfileCard />}>
      <Route index element={<ProfileCardHome />} />
      <Route path='/my-profile/profile-generator-card-edit' element={<ProfileGeneratorEdit />}/>
      </Route>  
      <Route path='/profile-generator' element={<ProfileGenerator />} />
    </Route>
    <Route path='/viewport' element={<Viewport />}/>
   </Routes>
   </Router>
  )
}



 

export default App
