import { useState, useEffect } from "react";
import { products } from "../data/products";
import ItemList from "./ItemList";

function ItemListContainer (){
  const [items, setItems] = useState([])
  const getProduct = ()=>{
    return new Promise ((res, rej)=> {
      setTimeout(()=>{
        res(products)
      }, 2000)
    })
  }
  useEffect(()=> {
    getProduct()
    .then(res => setItems(res))
    },[])
  
  return(
    <div>
   <ItemList items = {items}/>
    </div>
  )
}
export default ItemListContainer