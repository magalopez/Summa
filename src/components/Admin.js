import React, { useContext, useState } from 'react'
import { AuthUserContext, ProductsContext } from '../Context'
import { Link } from 'react-router-dom'

//Firebase
import { authentication } from '../services/Firebase-config'

//Components
import SectionProducts from './Admin/SectionProducts';
import MenuOps from './Admin/MenuOps';
import SectionUsers from './Admin/SectionUsers';
import SectionOrders from './Admin/SectionOrders';

function Admin () {
  const [secProd, setSecProd] = useState(true)
  const [secUser, setSecUser] = useState(false)
  const [secOrder, setSecOrder] = useState(false)

  const [,setAuth] = useContext(AuthUserContext)
  const [products] = useContext(ProductsContext)
  
  const logout = async () => {
    try {
      await authentication.signOut()
      setAuth(false)
    } catch (e) {
      alert(e)
    }
  }
  const handlerViewSectionProducts = () => {
    setSecProd(true)
    setSecUser(false)
    setSecOrder(false)
  }
  const handlerViewSectionUsers = () => {
    setSecUser(true)
    setSecProd(false)
    setSecOrder(false)
  }
  const handlerViewSectionOrders = () => {
    setSecOrder(true)
    setSecUser(false)
    setSecProd(false)
  }

  return (
    <>
      <herder className="header">
        <Link to="/">
          <img src={"https://image.flaticon.com/icons/svg/263/263115.svg"}
               alt="icon" 
               className="home"/>
        </Link>
        <h2 className="admin">
          Administrador E-Commerce
        </h2>
        <button className="button">
          <Link className="especial" 
                to={'/Login'} 
                onClick={()=>logout()}>
            Cerrar Sesion
          </Link>
        </button>
      </herder>
      <MenuOps logout={logout} 
               products={handlerViewSectionProducts} 
               users={handlerViewSectionUsers} 
               orders={handlerViewSectionOrders}
      />
      <section className="sections">
        {secProd === true ? <SectionProducts data={products}/> : <> </>}
        {secUser === true ? <SectionUsers/> : <> </>}
        {secOrder === true ? <SectionOrders/> : <> </>}
      </section>
    </>
  )
}

export default Admin

