import React, { createContext, useState } from "react";
import main from "../gemini";
export const dataContext = createContext();
function UserContext({ children }) {
  const [input, setInput] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [recentPromt, setRecentPromt] = useState("");
  async function sent(input) {
    setLoading(true);
    setShowResult(true);
    setRecentPromt(input);
    let chunk = await main(input);
    setResultData(chunk);
    setLoading(false); // Stop loading after getting answer
    setInput(""); // Clear input box after sending
  }
  const data = {
    input,
    setInput,
    sent,
    loading,
    showResult,
    setShowResult,
    setLoading,
    resultData,
    setResultData,
    recentPromt,
    setRecentPromt,
  };
  return (
    <>
      <dataContext.Provider value={data}>{children}</dataContext.Provider>
    </>
  );
}
export default UserContext;
