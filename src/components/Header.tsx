import {Nav} from "./Nav"

interface HeaderProps{
title: string;
sub_title: string;

}

const navMenu = [ "Womens", "Men's", "On The Street", "The Catwalk", "AdWatch", "About"]

export function Header({title,sub_title}: HeaderProps){

return(

  <section>
    <h1>  {title} </h1>
    <h3>{sub_title}</h3>
    <Nav  menu={navMenu}/>
  </section>

)


}