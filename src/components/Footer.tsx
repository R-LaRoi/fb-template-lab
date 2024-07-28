
interface FooterProps{
menu: string[];


}


export function Footer({menu,}: FooterProps){

return(

<footer><ul>
          <li >{menu}</li>
  
      </ul>
<div>2013 Valet Industries</div>
        </footer>
)


}