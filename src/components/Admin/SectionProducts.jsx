import React, {useState} from 'react'
import Table from './Table'

//Firebase
import {firestore} from '../../services/Firebase-config'
import ModalProduct from './ModalProduct';

function SectionProducts ({data}) {
  const [id, setId] = useState('');
  const [name,setName] = useState('');
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [category, setCategory] = useState('')
  const [image, setImage] = useState('')
  const [show, setShow] = useState(false)

  const showModal = () => setShow(true)
  
  const hideModal = () => setShow(false) 
  
  const handlerId = (e) => setId(e.target.value.toLowerCase())

  const handlerName = (e) => setName(e.target.value.toLowerCase())
  
  const handlerDescription = (e) => setDescription(e.target.value.toUpperCase())
  
  const handlerPrice = (e) => setPrice(e.target.value)
  
  const handlerCategorie = (e) => setCategory(e.target.value.toLowerCase())
  
  const handlerImage = (e) => setImage(e.target.value)

  const addProductData = async () => {
    try 
    {
      await firestore.collection('products').add({
        id: id,
			  title: name,
			  description: description,
			  price: price,
        category: category,
        image: image
		  })
    } 
    catch (e) 
    {
      alert(e)
    }
  }

  const editProductData = async (productId,name,description,price,category,image) => {
    try 
    {
      await firestore.collection('products').doc(productId).update({
        title: name,
			  description: description,
			  price: price,
        category: category,
        image: image
      })
    }
    catch (e)
    {
      alert(e)
    }
  }

  const deleteProduct = async (postId) => {
  try
  {
  await firestore.collection("products").doc(postId).delete();
  }
  catch (e)
  {
    alert(e)
  }
}

  return (
    <>
      <div className="container-section-products">
        <h2>Productos</h2>
        <input type="submit" value="Agregar Producto" className="button" onClick={()=> showModal()}/>      
      </div>
      <ModalProduct handleClose={hideModal} show={show}>
        <form className="register-form">
          <input type="text" placeholder="Id" maxLength="10" onChange={handlerId}/>
          <input type="text" placeholder="Nombre" maxLength="30" onChange={handlerName}/>
          <input type="text" placeholder="Descripcion" maxLength="190" onChange={handlerDescription}/>
          <input type="number" placeholder="Precio" max="6" onChange={handlerPrice}/>
          <input type="text" placeholder="Categoria" maxLength="15" onChange={handlerCategorie}/>
          <input type="text" placeholder="Imagen" maxLength="150" onChange={handlerImage}/>
        </form>
        <button onClick={()=>addProductData()}>Guardar</button>
      </ModalProduct> 
      <Table data={data}/>
    </>
  )
}
export default SectionProducts