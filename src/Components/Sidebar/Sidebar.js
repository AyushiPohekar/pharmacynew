import React, { useState } from 'react'
import UpperSidebar from './UpperSidebar';
import SideNavlink from './SideNavlink';
import { BiLogOutCircle } from "react-icons/bi";
import { MdCreateNewFolder } from "react-icons/md";
import Modal from "@mui/material/Modal";
import PopUp from './PopUp';
import "./Sidebar.scss"


const Sidebar = ({children}) => {
    const [isOpen, setIsOpen] = useState(true);
    const toggle = () => setIsOpen(!isOpen);


    //material Ui Modal states
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="Container">
    <div  className={isOpen?"sidebar":"closeSidebar"}>
      <div className="upperSidebar">
        <UpperSidebar isOpen={isOpen} toggle={toggle} />
      </div>
      <div className="lowerSidebar">
        <div className="linkdiv">
          <SideNavlink isOpen={isOpen} />
        </div>
        <div
          className="Creatediv"
          style={{ display: isOpen ? "block" : "none" }}
        >
          <button onClick={handleOpen}>
            <MdCreateNewFolder /> <span>Create new Order</span>
          </button>

          {/* material ui modal */}
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <PopUp handleClose={handleClose} />
          </Modal>
        </div>
        <div className="logoutDiv">
          <BiLogOutCircle className="logouticon" />
          <span>Logout</span>
        </div>
      </div>
    </div>

    <main>
      <div className='symboldiv'></div>
      <img src='/images/image 3.png' className='capsuleimg'/>
      <div className='capsuleTitle'><span>CAPSULE</span><span>BUSINESS</span>
      </div>
      <div>{children}</div>
      
      </main>
  </div>
  )
}

export default Sidebar