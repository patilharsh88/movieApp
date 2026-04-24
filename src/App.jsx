import './App.css'
import MovieCard from './components/MovieCard'
import Home from './pages/Home'

function App() {
  
  let mNo=2;

  return (

    <>
     <Home/>
    </>
  )
}

export default App

//  {(mNo==1)?
//             < MovieCard movie={{title:"Volverine",nam:"x-men",release:"2000" }} /> :
//             < MovieCard movie={{title:"Volverine 2",nam:"x-men 2",release:"2002 " }} />
//       }