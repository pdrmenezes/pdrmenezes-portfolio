import "./style.css"
import up_arrow from '../../assets/up-arrow.png'

export default function Footer() {

  function scrollToComponent(id) {
    document.getElementById(id).scrollIntoView();
  }

  return (
    <footer>
      <img alt="Back to top arrow" src={up_arrow} onClick={() => scrollToComponent("top")} />
    </footer>
  )
}