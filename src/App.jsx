import './App.css'
import JsxBarSideNav from './Components/JsxBarSideNav'
import JsxClientsA from './Components/JsxClientsA'
import JsxProfileA from './Components/JsxProfileA'

function App() {

  return (
   <>
   <div className='background'>
   <JsxBarSideNav/>
   <JsxClientsA/>
   <JsxProfileA/>
   </div>
   </>
  )
}

export default App
