import { useContext } from "react";
import ChatSection from "./components/chatsection/ChatSection";
import Sepration from "./components/sepration/Sepration";
import Sidebar from "./components/sidebar/sidebar";
import { dataContext } from "./context/UserContext";
function App() {
  // let data = useContext(dataContext);
  // console.log(data);
  return (
    <>
      <Sidebar />
      <Sepration />
      <ChatSection />
    </>
  );
}

export default App;
