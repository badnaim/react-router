import { MENUS } from "../../util/data"
import "../../style/navbar.css"

export default function NavBar() {
  return (
      <nav>
        <div>
          <ul>
            {MENUS.map((menu, index) => (
              <li key={index}>
                <a href={menu.url}>{menu.name}</a>
              </li>
            ))}  
          </ul>
        </div>
      </nav>
  )
} 