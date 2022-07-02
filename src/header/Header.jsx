import './header.css'
import image from "../images/header.jpg"

export default function header() {
  return (
    <div className="header mt-4">
      <div className="title">
        <span className="titleSm">Marvel</span>
        <span className="titleLg">Movies</span>
      </div>
      <img
        className="headerImg w-100"
        src={image}
      />
    </div>
  )
}
