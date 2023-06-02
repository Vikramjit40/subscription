import React,{useState} from 'react'
import Link from 'next/link'
import {Modal,ModalHeader,ModalBody} from 'reactstrap'
const Bottombar = () => {
    const [modal, setModal] = useState(false);
    const toggle = () => setModal(!modal);
  return (
    <div className='bottomBar' style={{display:"none"}}>
        <div style={{
            padding:"1rem",
        display:"flex",
        overflow: "hidden",
        backgroundColor: "#ffffff",
        position: "fixed",
        bottom: "0",
        width: "100%",
        alignItems:"center",
        justifyContent:"space-around",
        boxShadow:"rgba(0, 0, 0, 0.1) 0px 0px 0px 1px,rgba(0, 0, 0, 0.2) 0px 5px 10px,rgba(0, 0, 0, 0.4) 0px 15px 40px"
      }}>
      <Link href="/"><svg stroke="currentColor" fill="rgba(0,0,0,0.48)" stroke-width="0" viewBox="0 0 24 24" focusable="false" class="chakra-icon css-xabh51" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="M19 10H5c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h14c1.103 0 2-.897 2-2v-8c0-1.103-.897-2-2-2zM5 20v-8h14l.002 8H5zM5 6h14v2H5zm2-4h10v2H7z"></path></svg></Link>
    <button onClick={toggle} className='focus:outline-none' style={{border:"none",backgroundColor:"black",borderRadius:"20px",padding:"2px"}}><svg stroke="currentColor" fill="white" stroke-width="0" viewBox="0 0 24 24" font-size="32" aria-hidden="true" focusable="false" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path></svg></button>
    <Modal fullscreen style={{overflow:"hidden",borderRadius:"12px",border:"none",zIndex:"1"}} isOpen={modal} fade={false} toggle={toggle}  >
            <ModalHeader style={{backgroundColor:"#f7fafc"}} toggle={toggle}><h3 style={{marginLeft:"165px",padding:"10px 0px"}}>Add Subscriptions</h3></ModalHeader>
                <ModalBody style={{backgroundColor:"#f7fafc"}}>
                    <input id="servicesearch" style={{fontSize:"18px",padding:"10px 5px",width:"100%",color:"black"}} type="text" placeholder='Search for a service'></input>
                    <div id="searchforservice" className='text-center mt-2 p-12 '>
                      <svg className='mb-5 mt-11' stroke="currentColor" fill="#718096" stroke-width="0" viewBox="0 0 24 24" focusable="false" class="chakra-icon css-ag9myg" height="3.5em" width="3.5em" xmlns="http://www.w3.org/2000/svg"><path d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path><path d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z"></path></svg>
                      <p style={{color:"rgba(0,0,0,0.64)",fontSize:"16px"}}>Search for a service or add one from scratch</p>
                    <p style={{fontSize:"16px"}}>Have a CSV file <a id="upload" href="/">Upload it here</a></p>
                    </div>
                    <button style={{backgroundColor:"rgba(0,0,0,0.80)",borderRadius:"8px",border:"none", color:"white", width:"100%",padding:"12px 0px",fontSize:"18px"}}>Add from scratch</button>
                </ModalBody>
            </Modal>
    <Link href="/duration"><svg stroke="currentColor" fill="rgba(0,0,0,0.48)" stroke-width="0" viewBox="0 0 24 24" focusable="false" class="chakra-icon css-1g15gt6" height="2.5em" width="2.5em" xmlns="http://www.w3.org/2000/svg"><path d="M20 7h-4V4c0-1.103-.897-2-2-2h-4c-1.103 0-2 .897-2 2v5H4c-1.103 0-2 .897-2 2v9a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1V9c0-1.103-.897-2-2-2zM4 11h4v8H4v-8zm6-1V4h4v15h-4v-9zm10 9h-4V9h4v10z"></path></svg></Link>
    </div></div>
  )
}

export default Bottombar
