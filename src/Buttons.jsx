import React from "react";

const Buttons = ({Filter, name}) =>{
    return(
        <div className=" d-flex justify-content-around flex-wrap ">
        {name.map((item, index)=>{
            return(
            <>
                <button key={index} className="btn btn-warning my-2" onClick={() => Filter(item)}>{item}</button>
            </>
            )
        })}
        </div>
    )
}

export default Buttons;