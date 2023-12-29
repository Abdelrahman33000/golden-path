import React, { useState } from 'react'
import './NavBar.css'
import { Link } from 'react-router-dom';
const NavBar = () => {
  const [showModel, setShowModel] = useState(false);

    const lists = [
        { name: " Home", url: "/"  , id:"1"},
        { name: " About", url: "/about" , id:"2"},
        { name: " Projects", url: "/projects " , id:"3"},
        { name: " Products", url: "/products " , id:"4"},
        { name: " Contact Us", url: "/Contact" , id:"5"},
      ];
  return (  
      <div className="mainNav container-fluid  py-10 ps-4">
  <button
    className="btn1  icon-menu"
    onClick={() => {
      setShowModel(true);
    }}
  />
  <div />
  <nav>
    {lists.map((list) => (
      <Link className="list" to={list.url} key={list.id}>
        {list.name}
      </Link>
    ))}
  </nav>

  {showModel && (
    <div className="model">
      <div className="popup">
        <div style={{ textAlign: "right" }}>
          <button className="icon-close"
            
            onClick={() => {
              setShowModel(false);
            }}
          />
          
        </div>
        {lists.map((list) => (
          <Link onClick={() => {
            setShowModel(false);
          }} className="list" to={list.url} key={list.id}>
            {list.name}
          </Link>
        ))}
      </div>
    </div>
  )}
</div>
  )
}

export default NavBar
