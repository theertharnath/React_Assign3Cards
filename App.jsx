
import React from 'react'
// import './App.css'
import PageOne from './PageOne'
import PageTwo from './PageTwo'
import PageThree from './PageThree'
import Footer from './Footer'
import DesignOne from './DesignOne'
import DesignTwo from './DesignTwo'
import DesignThree from './DesignThree'
import './App.css'

const App = () => {
  return (
    //React Fragment
    <> 
    <div class="container">
      <DesignOne />
      <DesignTwo />
      <DesignThree />
    </div>
      {/* html Project Code */}
      {/* <PageOne />
      <PageTwo />
      <PageThree />
      <Footer /> */}
    </>
  )
}

export default App
// -----------------------------------------------------------DEFAULT CODE for APP.jsx
// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
