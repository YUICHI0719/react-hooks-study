import React, { useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);

  const decrement = () => setCount(count - 1);

  const add = () => setCount((previousCount) => previousCount + 10);
  const reduce = () => setCount((previousCount) => previousCount - 10);

  const reset = () => setCount(0);
  const double = () => setCount(count * 2);
  const divideThree = () =>
    setCount((previousCount) =>
      previousCount % 3 === 0 ? previousCount / 3 : previousCount
    );

  return (
    <>
      <div>count: {count}</div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={add}>+10</button>
        <button onClick={reduce}>-10</button>
      </div>
      <div>
        <button onClick={reset}>Reset</button>
        <button onClick={double}>×2</button>
        <button onClick={divideThree}>3の倍数の時だけ3で割る</button>
      </div>
    </>
  );
};

export default App;
