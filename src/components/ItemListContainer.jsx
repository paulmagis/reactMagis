import { useState, useEffect } from "react";
import { products } from "../data/products";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

function ItemListContainer (){
  const [items, setItems] = useState([])
  const {ejes} =useParams ()
  const getProduct = ()=>{
    return new Promise ((res, rej)=> {
      setTimeout(()=>{
        res(products)
      }, 2000)
    })
  }
  useEffect(()=> {
    getProduct()
    .then(res => {
      if (!ejes){setItems(res)}
      else{ const productByEjes = res.filter(item =>item.ejes)=== ejes
        setItems(productByEjes)
      }
    })
    },[])
  
  return(
    <div>
   <ItemList items = {items}/>
    </div>
  )
}
export default ItemListContainer