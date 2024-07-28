
interface FooterProps{
menu: string[];


}


export function Footer({menu}: FooterProps){

return(

<footer>
    <ul className="over">
    <li>{menu}</li>
    </ul>
</footer>
)


}