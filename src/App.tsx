import { Header } from './components/Header'
import { postData } from "./components/postData";
import { Post } from "./components/Post";
import { Footer } from './components/Footer';
import {footerMenu} from './components/footerData'

import './App.css'

function App() {


  return (
   <>
<Header  title="Sartre's List"  sub_title='Best Dressed'/>
{postData.map((post:any, index: number) => (
        <Post key={index} post={post} />
      ))}

      {footerMenu.map((link:any, index:number)=> (
<Footer menu={link} key={index} label="Valet Industries,Inc" />
      ))}

   </>
  )
}

export default App
