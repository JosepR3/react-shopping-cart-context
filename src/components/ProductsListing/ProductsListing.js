import React, {useContext} from "react";

import ItemCard from "../ItemCard";
import ProductContext from "../../contexts/ProductContext";

function ProductsListing({...props}) {

  const {products} = useContext(ProductContext)
  return (
    <section className="row" {...props}>
      {products.map((product) => (
        <ItemCard
          key={product.id}
          id={product.id}
          img={product.img}
          title={product.title}
          shortDescription={product.shortDescription}
          upVotes={product.votes.upVotes}
          downVotes={product.votes.downVotes}
          isFavorite={product.isFavorite}
        />
      ))}
    </section>
  );
}

export default ProductsListing;
