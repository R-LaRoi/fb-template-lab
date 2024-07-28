import {Nav} from "./Nav"

interface HeaderProps{
title: string;
sub_title: string;

}

const navMenu = [ "Womens", "Men's", "On The Street", "The Catwalk", "AdWatch", "About"]

export function Header({title,sub_title}: HeaderProps){

return(

  <section>
    <h1 className="main-title">  {title} </h1>
    <h3 className="sub-main">{sub_title}</h3>
    <Nav  menu={navMenu}/>
  </section>

)


}