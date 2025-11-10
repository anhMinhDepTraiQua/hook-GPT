import React from 'react';
import { useState } from 'react'
import { useEffect } from 'react';
function ClickQuest() {
    const [count, setCount] = useState(0);
    useEffect(() => {
       console.log(`Ngươi vừa đạt tới cấp độ count = ${count}`);
       
    },[count]);
    if (count === 10) {
        alert("Chúc mừng! Bạn đã hoàn thành nhiệm vụ Click Quest!");
        setCount(0);
        const increaseButton = document.querySelector('.increase');
        increaseButton.style.userSelect = 'none';
    }
  return (
    <div>
        <h1>Clicked {count} times</h1>
    <button className='increase' onClick={() => setCount(count + 1)}>
        increase
    </button>
    <button onClick={() => setCount(0)}>Reset</button>
    </div>
  )
}

export default ClickQuest;