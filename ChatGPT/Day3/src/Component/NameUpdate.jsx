import { useState } from 'react';

function NameUpdater() {
  const [name, setName] = useState("React Learner");
  const [inputValue, setInputValue] = useState("");

  const handleUpdate = () => {
    setName(inputValue);
    setInputValue("");
  };

  return (
    <div>
      <h3>Current Name: {name}</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter new name"
      />
      <button onClick={handleUpdate}>Update Name</button>
    </div>
  );
}

export default NameUpdater;
