

interface NavProps{
menu: string[];

}


export function Nav({menu}: NavProps){

return(

<nav><ul>{menu.map((item, index) => (
          <li key={index}>{item}</li>
        ))}</ul></nav>
)


}