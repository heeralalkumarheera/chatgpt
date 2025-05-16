import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <h1>Conditional Rendering Example</h1>
      <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Log Out" : "Log In"}
      </button>
    </div>
  );
}

export default App;
