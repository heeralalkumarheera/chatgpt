import React, { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPlus } from "react-icons/fa";
import { BiSolidMessage } from "react-icons/bi";
import "./Sidebar.css";
function Sidebar() {
  const [extend, setExtend] = useState(false);
  return (
    <div className="sidebar">
      <GiHamburgerMenu
        id="ham"
        onClick={() => {
          setExtend((prev) => !prev);
        }}
      />
      <div className="newchat">
        <FaPlus />
       {extend? <p>New Chat</p>:null}
      </div>
      <div className="recent">
        <BiSolidMessage />
        {extend? <p>Who are You!</p>:null}
      </div>
    </div>
  );
}
export default Sidebar;
