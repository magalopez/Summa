/* eslint-disable no-undef */
import React from 'react'
import Card from './Card'
import Categories from './Categories'


function ContainerProducts ({data, categories, changeCategory, displayCategory, modal, show}) {


  console.log(show)
  const itemCategory = categories.map((category) => {
    return <Categories name={category} event={()=>{changeCategory(category)}} />
  }); 

  // Filters
  const filteredCategory = data.filter(({category}) =>
  displayCategory === category || displayCategory === "todos"
 ).map(({ title, price, description, id, image, count})=>( 
 <Card key={`ProductItem-${title}`} id={id} title={title} price={price} description={description} image={image} modal={modal} counter={count}/>
 ));

  return(
    <>
      <nav className="nav_categories">
        <ul>
          {itemCategory}
        </ul>
      </nav>
      <section className="container-products">
        {filteredCategory} 
      </section>
    </>
  );
}

export default ContainerProducts;

