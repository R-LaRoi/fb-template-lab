import { Header } from './components/Header'
import { postData } from "./components/postData";
import { Post } from "./components/Post";
import './App.css'

function App() {


  return (
   <>
<Header  title="Sartre's List"  sub_title='Best Dressed'/>
{postData.map((post:any, index: number) => (
        <Post key={index} post={post} />
      ))}
   </>
  )
}

export default App
