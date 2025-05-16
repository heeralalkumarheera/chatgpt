import NameUpdater from './Component/NameUpdate';
import LikeButton from './Component/LikeButton';
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <LikeButton />
      <h1>My React App</h1>
      <NameUpdater />
    </div>
  );
}
export default Counter;

