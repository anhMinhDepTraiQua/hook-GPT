import React from 'react';
import { useState } from 'react'
import { useEffect } from 'react';
function ClickQuest() {
    const [count, setCount] = useState(0);
    useEffect(() => {
       console.log(`Ngươi vừa đạt tới cấp độ count = ${count}`);
       
    },[count]);
  return (
    <button onClick={() => setCount(count + 1)}>
        Clicked {count} times
    </button>
  )
}

export default ClickQuest;