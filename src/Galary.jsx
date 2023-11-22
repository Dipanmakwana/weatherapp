import { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Menu from "./Menu";
import Card from "./Card";
import Buttons from "./Buttons";

const allCat = [ ... new Set(Menu.map((cEle) => {return cEle.category})), "all"];

const Restorent = () =>{
    const [name, setName] = useState(Menu);
    const [cat , setCat] = useState(allCat);

    const Filter = (category) =>{
        if(category === 'all'){
            setName(Menu);
            return;
        }
        const update = Menu.filter((cvalue)=>{
            return cvalue.category === category;
        })

        setName(update);
    }
    return(
        <> 
            <div className="container">
                <h1 className="text-center my-4">Order Your Favourite Dish </h1>
                <hr />
                <Buttons Filter={Filter} name={cat} />
                <Card name={name} />
            </div>
        </>
    )
}

export default Restorent;