import React from 'react'
import Card from './Card'
import Categories from './Categories'
// import { Link } from "react-router-dom"


function Container ({data, categories, changeCategory, displayCategory,search}) {

  const itemCategory = categories.map((category) => {
    return <Categories name={category} event={()=>{changeCategory(category)}} />
  }); 

  // Filters
  const filteredCategory = data.filter(({category}) =>
  displayCategory === category || displayCategory === "todos"
 ).map(({ title, price, description, id})=>( 
 <Card key={`ProductItem-${title}`} id={id} title={title} price={price} description={description}/>
 ));

  // const filteredSearch = data.filter((element) => element.title.toLowerCase().includes(search.toLowerCase())).map(({ title, price, description})=>( <Card key={`ProductItem-${title}`} title={title} price={price} description={description}/>));

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

export default Container;

