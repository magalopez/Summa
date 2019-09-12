import React, {useState} from 'react'
import Table from './Table'

//Firebase
import {firestore} from '../../services/Firebase-config'
import ModalProduct from './ModalProduct';

function SectionProducts ({data}) {
  const [name,setName] = useState('');
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState(0)
  const [categorie, setCategorie] = useState('')
  const [image, setImage] = useState('')
  const [show, setShow] = useState(false)

  const showModal = () => setShow(true)
  const hideModal = () => setShow(false) 


  const addProductData = async () => {
    try {
      await firestore.collection('products').add({
			  name: name,
			  description: description,
			  price: price,
        categorie: categorie,
        image: image
		  })
    } catch (e) {
      alert(e)
  }
}

  console.log('show',show)

  return (
    <>
      <div className="container-section-products">
        <h2>Productos</h2>
        <input type="submit" value="Agregar Producto" className="button" onClick={()=> showModal()}/>      
      </div>
      <ModalProduct handleClose={hideModal} show={show}>
        <p>Modal</p>
        <p>Data</p>
      </ModalProduct>
      <div className='container-list'> 
        <Table data={data}/>
      </div>
    </>
  )
}
export default SectionProducts