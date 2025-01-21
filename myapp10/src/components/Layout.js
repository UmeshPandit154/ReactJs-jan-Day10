import React from "react"
import Header from "./Layouts/Header"
import Aside from "./Layouts/Aside"
import Footer from "./Layouts/Footer"


export default function Layout(props) {
  return (
    <>
    <Header/>
     <main>
         <div className="container h-100 a_cont">
             <div className='row h-100'>
               <Aside cls="a_leftaside ">Left Aside</Aside>
                {props.children}
                <Aside cls="a_rightaside ">Right Aside</Aside>
             </div>
         </div>
     </main>
     <Footer/>
 </>
  )
}
