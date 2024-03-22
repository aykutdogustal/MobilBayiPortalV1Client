import React from "react"
import { useNavigate } from "react-router-dom"

const Home = () => {

    const navigate = useNavigate();
    
    const dataMenu = [
        {
            id:null,
            name: "Home",
            routeName: "/"
        },
        {
            id:2,
            name: "Test",
            routeName: "Test"
        },
        {
            id:3,
            name: "Test Params",
            routeName: "TestParams"
        },
    ]
  return (
    <>
      <ul>

        {
            dataMenu.map((item, index) =>
            (
                <li onClick={() => navigate(`${item.routeName}/${item.id != null ? item.id : "" }`)} style={{marginBottom:'25px'}}>
                <span style={{cursor:'pointer'}}>{item.name}</span>
                </li>
            )
            )
        }

      </ul>
    </>
  )
}

export default Home
