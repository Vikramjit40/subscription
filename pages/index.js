import styles from '@/styles/Home.module.css'
import React, { useMemo, useState,useEffect } from 'react';
import Right from '@/components/Right';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import Link from 'next/link';
import classNames from 'classnames';
import SortingTable from '@/components/DataTable';
import{Modal,ModalBody,ModalHeader,ModalFooter} from 'reactstrap';
import Image from 'next/image';
const menuItems=[
  {id:1,label:"Subscriptions",icon:"/home.svg",link:"/"},
  {id:2,label:"Reports",icon:"/clock.svg",link:"/duration"},
  {id:3,label:"Settings",icon:"/setting.svg",link:"/setting"},
];
export default function Home() {
  const [modal1,setModal1]=useState(false);
  const [modal2,setModal2]=useState(false);
  const [modal3,setModal3]=useState(false);
  const rightNavToggling=()=>setModal3(!modal3);
  const toggle1=()=>setModal1(!modal1);
  const toggle2=()=>setModal2(!modal2);
  const [media,setMedia]=useState(false);
  const router = useRouter()
  const activeMenu=useMemo(()=> menuItems.find(menu=>menu.link===router.pathname ),[router.pathname] )
  
  useEffect(() => {
    document.onkeyup = function(e) {
    if (e.ctrlKey && e.which == 66) {
      setModal1(!modal1)}
};
var body = document.getElementsByTagName("BODY")[0];
  body.addEventListener("click", function () {
    setIsUserOpen(false);
    document.getElementById("user").style.display="none"
  }, false);
  body.addEventListener("click", function () {
    setIsProjectOpen(false);
    document.getElementById("projct").style.display="none"
  }, false);
  
  let myMediaQuery = window.matchMedia('(max-width: 890px)');
  function widthChangeCallback(myMediaQuery) {
    if(myMediaQuery.matches) {
      setMedia(true);  
      // document.querySelector("p").textContent = "I am wider than 599px now.";
     } else {
      setMedia(false);  
      //  document.querySelector("p").textContent = "I am narrower than 599px now.";
     }
  }
  myMediaQuery.addEventListener('change', widthChangeCallback);
});
const [isProjectOpen,setIsProjectOpen]=useState(false)
  function projecttoggling(ev){
    setIsProjectOpen(!isProjectOpen);
    setIsUserOpen(false);
    document.getElementById("user").style.display="none"
    ev.stopPropagation();

    if(isProjectOpen===false){document.getElementById("projct").style.display="block"} 
    else{document.getElementById("projct").style.display="none"} 
  }
  function showSVG(){
    document.getElementById("svgTick").style.display="initial"
    document.getElementById("probut").innerHTML="Personal"
    document.getElementById("personal").style.paddingLeft = "0px"
  }
  function hideSVG(){
    document.getElementById("svgTick").style.display="none"
    document.getElementById("probut").innerHTML="All Projects"
    document.getElementById("personal").style.paddingLeft = "19px"
  }
  const [isUserOpen,setIsUserOpen]=useState(false)
  function usertoggling(ev){
    setIsUserOpen(!isUserOpen);
    setIsProjectOpen(false);
    document.getElementById("projct").style.display="none"
    ev.stopPropagation();
    if(isUserOpen===false){document.getElementById("user").style.display="block"} 
    else{document.getElementById("user").style.display="none"} 
  }
  const getNavItemClasses=(menu)=>{
    return classNames("flex items-center mt-1 mb-3 cursor-pointer  rounded overflow-hidden whitespace-nowrap",{
        ["bg-[rgba(0,0,0,0.80)]"]: activeMenu.id === menu.id,
        ["hover:bg-hoverCol"]:activeMenu.id != menu.id,
    })
  }
  const getNavItemHoverClasses=(menu)=>{
    return classNames("text-lg text-textColor marker:font-medium ",{
        ["text-white"]: activeMenu.id === menu.id,
    })
  }
  const getNavIconHoverClasses=(menu)=>{
    return classNames({["filter invert "]: activeMenu.id === menu.id,})
  }
  return (
     <Layout >
     <div className='container-fluid ' >
      <div className='row'>
    <SortingTable />
     </div>
     </div>
     </Layout>
  )
}
