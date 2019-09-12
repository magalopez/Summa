import React, {useState} from 'react'
import Table from './Table'

//Firebase
import {firestore} from '../../services/Firebase-config'
import ModalProduct from './ModalProduct';

function SectionProducts ({data}) {
  const [name,setName] = useState('');
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [category, setCategory] = useState('')
  const [image, setImage] = useState('')
  const [show, setShow] = useState(false)

  const showModal = () => setShow(true)
  
  const hideModal = () => setShow(false) 
  
  const handlerName = (e) => setName(e.target.value.toLowerCase())
  
  const handlerDescription = (e) => setDescription(e.target.value.toLowerCase())
  
  const handlerPrice = (e) => setPrice(e.target.value.toLowerCase())
  
  const handlerCategorie = (e) => setCategory(e.target.value.toLowerCase())
  
  const handlerImage = (e) => setImage(e.target.value.toLowerCase())

  const addProductData = async () => {
    try 
    {
      await firestore.collection('products').add({
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
  catch
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
          <input type="text" placeholder="nombre" onChange={handlerName}/>
          <input type="text" placeholder="descripcion" onChange={handlerDescription}/>
          <input type="number" placeholder="precio" onChange={handlerPrice}/>
          <input type="text" placeholder="categoria" onChange={handlerCategorie}/>
          <input type="text" placeholder="imagen" onChange={handlerImage}/>
        </form>
        <button onClick={()=>addProductData()}>Guardar</button>
      </ModalProduct> 
      <Table data={data}/>
    </>
  )
}
export default SectionProducts