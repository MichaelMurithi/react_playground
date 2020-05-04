import React, { useState } from "react";

const HookCounter = () => {
  const initialCount = 0;
  //   Initializes use state hook
  const [count, setCount] = useState(initialCount);
  return (
    <div>
      Count: {count}
      <br />
      <button onClick={() => setCount(initialCount)}>Reset</button>
      {/* Count value is modified based on previous state */}
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increament
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decreament
      </button>
    </div>
  );
};

export default HookCounter;
