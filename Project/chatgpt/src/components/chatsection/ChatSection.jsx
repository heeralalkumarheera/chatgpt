import React, { useContext } from "react";
import "./ChatSection.css";
import Darkmode from "../Darkmode/Darkmode";
import { IoSend } from "react-icons/io5";
import { dataContext } from "../../context/UserContext";
import user from "../../assets/user.png";
import ai from "../../assets/ai.png";
function ChatSection() {
  // let { sent, input, setInput, showResult,resultData} = useContext(dataContext);
  let { sent, input, setInput, showResult, resultData, loading ,recentPrompt} = useContext(dataContext);
  return (
    <div className="chatsection">
      <div className="topsection">
        {!showResult ? (
          <div className="heading">
            <span>Hello Shiva</span>
            <span>I am your own Assistant</span>
            <span>What can i help you</span>
          </div>
        ) : 
          <>
            <div className="result">
              <div className="userbox"></div>
              <img src={user} alt="" width="60px"/>
              <p>{recentPrompt}</p>
            </div>
            <div className="aibox">
  <img src={ai} alt="" width="60px"/>
  <p>
    {loading ? "Loading..." : resultData}
  </p>
</div>
          </>
        }
      </div>
      <div className="bottomsection">
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="Type your message here..."
          value={input}
        />
        <button
          id="sentbtn"
          onClick={() => {
            sent(input);
          }}
        >
          <IoSend />
        </button>
        <Darkmode />
      </div>
    </div>
  );
}
export default ChatSection;
