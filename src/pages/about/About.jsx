import { Outlet } from "react-router-dom"
import Header from "../../components/header/Header"

const About = () => {
  return (
    <div>
      <Header/>
        About
      <Outlet/>
    </div>
  )
}

export default About