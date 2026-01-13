import { useState, useEffect, useLayoutEffect, useRef } from 'react'
import './App.css'

function Component() {
  console.log('1. Render phase - вычисляем виртуальный DOM');

  useLayoutEffect(() => {
    console.log('3. useLayoutEffect - DOM уже создан, но еще не нарисован');
    // Здесь можно безопасно читать/изменять DOM
  });

  useEffect(() => {
    console.log('5. useEffect - браузер уже всё нарисовал');
    // Здесь можно делать асинхронные операции
  });

  console.log('2. Commit phase - применяем изменения к реальному DOM');

  //console.log('Браузер: 4. Paint phase - рисуем пиксели')

  return <div>Content</div>;
}

function App() {
  const [count, setCount] = useState(0)




  return (
    <>
      <div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>

        <Component />
      </div>
      
    </>
  )
}

export default App
