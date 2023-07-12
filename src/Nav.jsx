import React from 'react'
import { Link } from 'react-router-dom'
import hoglogo from './asset/hogwarts.png'

const Nav = () => {
  return (
    <div className='Nav'>
    <ul>
    <img id='logo' src={hoglogo} height={60} alt="" />
  <h4><li>  <Link className='navtext' style={{ color: "grey", textDecoration: "none" }} to = "/Home">Home</Link>  </li></h4>
  <h4><li>  <Link className='navtext' style={{ color: "grey", textDecoration: "none" }} to = "/Electronics">Electronics</Link> </li></h4>
  <h4><li>  <Link className='navtext' style={{ color: "grey", textDecoration: "none" }} to = "/Fashion">Fashion</Link>  </li></h4>
  <h4><li>  <Link className='navtext' style={{ color: "grey", textDecoration: "none" }} to = "/Grocery">Grocery</Link>  </li></h4>
  <h4><li>  <Link className='navtext' style={{ color: "grey", textDecoration: "none" }} to = "/Mobiles">Mobiles</Link>  </li></h4>
  <h4><li>  <Link className='navtext' style={{ color: "grey", textDecoration: "none" }} to = "/TopOffers">offers</Link>  </li></h4>
  <h4><li>  <Link className='navtext' style={{ color: "grey", textDecoration: "none" }} to = "/Travels">Travel</Link>  </li></h4>
  <input id='search' type="search" placeholder='Search Here' /> 

  {/* <button id='click'>Click Me</button> */}
<Link to="/Home"><button style={{cursor:"pointer"}} id='click'>Click Me</button></Link>

</ul>

{/* <hr /> */}
    </div>

  )
}

export default Nav;