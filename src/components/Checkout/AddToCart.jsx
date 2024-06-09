import React from 'react'
import { useSelector, useDispatch } from "react-redux";
import { RemoveFromCart } from '../../features/AddToCart/AddToCartSlice';
import Card from '../Card/Card'

const AddToCart = () => {
  const AddtoCartItems = useSelector((state) => state.addtocart.items);
  const dispatch = useDispatch();

  function handleRemove(id) {
    dispatch(RemoveFromCart({ id }));
  }
  return (
    <section className="Main">
      <h1 className="text-center text-red-500 text-2xl pt-5">Cart</h1>
      <div>
      {AddtoCartItems.map((item) => (
        <Card key={item.id} book={item} handleRemove={handleRemove} IsInCart={true} />
      ))}
      </div>

    </section>
  )
}

export default AddToCart