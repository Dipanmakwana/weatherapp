import React from "react";

const Card = ({name}) =>{
    return(
        <div className=" container-fluid">
            <div className=" row my-5">
                <div className=" col-12 mx-auto">
                    <div className="row gy-3">

                    { name.map((item, index)=>{

                        return(
                            <div key={index} className=" col-md-4 col-12 col-md-6 col-lg-4 mx-auto" >
                                <div className="row d-flex">
                                    <div class="main-card card flex-wrap mx-auto" style={{width: '25rem'}}>
                                    <img src={item.img} class="card-img-top my-2" alt="..." />
                                    <div class="card-body">
                                        <h5 class="card-title">{item.title}</h5>
                                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div className=" d-flex">
                                            <a href="/contact" class=" w-50 btn btn-outline-primary">Order Now</a>
                                            <p className="m-auto">{item.price}</p>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card;