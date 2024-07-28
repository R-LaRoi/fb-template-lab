
import {Nav} from "./Nav"

interface FooterProps{
label: string;


}
const navMenu = [ "Womens", "Men's", "On The Street", "The Catwalk", "AdWatch", "About"]

export function Footer({label}: FooterProps){

return(

<div className="links">
    <hr/>
        <Nav  menu={navMenu}/>
        <small>{label}</small>
</div>

)


}