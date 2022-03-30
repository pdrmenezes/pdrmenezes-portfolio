import "./style.css"
import data from './data'
import up_arrow from "../../assets/up-arrow.png"

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <div className="projects-title">
        <h1 className="projects-title-text">PROJETOS</h1>
        <h1 className="projects-title-text">RECENTES</h1>
      </div>
      <img alt="" src={up_arrow} className="projects-arrow" />
      <ul className="projects-list">
        {data.map(({ id, image, name, link }) => {
          return (
            <li className={id % 2 == 0 ? "project-item-list-right" : "project-item-list-left"
            }>
              <img src={image} alt={name} />
              <div className="project-description">
                <p className="project-title">{name.toUpperCase()}</p>
                <a href={link}><button type="button" target="void" href="https://instagram.com" className="projects-more">MAIS</button></a></div>
            </li>
          )

        })}
      </ul>

    </div>
  )
}