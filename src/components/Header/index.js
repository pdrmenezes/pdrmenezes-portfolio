import "./style.css"

export default function Header() {

  function scrollToComponent(id) {
    document.getElementById(id).scrollIntoView();
  }

  return (
    <header>
      <a href="https://instagram.com/pdrmenezes" target={"void"} id="top"><p>@PDRMENEZES</p></a>
      <ul className="menu">
        <li className="item-menu" onClick={() => scrollToComponent("projects")}>PROJETOS</li>
        <li className="item-menu" onClick={() => scrollToComponent("contact")}>CONTATO</li>
      </ul>
    </header>
  )
}