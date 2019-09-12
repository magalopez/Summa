import React, { useContext } from 'react'
import { AuthUserContext, ProductsContext } from '../Context'
import { Link } from 'react-router-dom'

//Firebase
import { authentication } from '../services/Firebase-config'

//Components
import SectionProducts from './Admin/SectionProducts';
import MenuOps from './Admin/MenuOps';


function Admin () {
  const [, setAuth ] = useContext(AuthUserContext)
  const [products, setProducts] = useContext(ProductsContext)
  
  const logout = async () => {
    try {
      await authentication.signOut()
      setAuth(false)
    } catch (e) {
      alert(e)
    }
  }

  console.log(products)
  return (
    <>
      <herder>
        <Link to="/"><h1>HOME</h1></Link>
        <h3>Administrador E-Commerce</h3>
      </herder>
      <MenuOps logout={logout}/>
      <section>
      <SectionProducts data={products}/>     
      </section>
     
    </>
  )
}

export default Admin