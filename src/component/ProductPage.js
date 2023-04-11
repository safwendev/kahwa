import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar"
import { food,drink } from "../data/data";
import ProuctCard from "./ProuctCard";
import '../style/product.css'
import Footer from "./Footer";


export default function ProductPage(){
    const location = useLocation();
    const state = location.state;
    const cond = state=="food"
    let data={}
    if (cond) {
        data=food
    }else {data=drink}
    console.log(data);
    return (
        <>
        <NavBar/>
        <div className="product-container" >
        {
            data.map(item =>
                <ProuctCard 
                    source={item.source}
                    title={item.title}
                    description={item.description}
                    val={item.val}
                    price={item.price}
                    />
                )
            }
            </div>
            <Footer/>
            </>
  )
}
 