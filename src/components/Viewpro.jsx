import React, { useState } from 'react'
import Pronav from './Pronav'

const Viewpro = () => {

const [products,changeProducts]=useState(

  [
    {"name":"salt","image":"https://m.media-amazon.com/images/I/51UW0lSOWYL._AC_UL480_FMwebp_QL65_.jpg"},
    {"name":"paste","image":"https://m.media-amazon.com/images/I/51t03GhZFXL._AC_UL480_FMwebp_QL65_.jpg"},
    {"name":"sugar","image":"https://m.media-amazon.com/images/I/713NObZICHL._AC_UL480_FMwebp_QL65_.jpg"},
    {"name":"paper","image":"https://m.media-amazon.com/images/I/51sNbRTiZJL._AC_UL480_FMwebp_QL65_.jpg"},
    {"name":"pepper","image":"https://m.media-amazon.com/images/I/61IdpKF-ouL._AC_UL480_FMwebp_QL65_.jpg"},
    {"name":"turmeric","image":"https://m.media-amazon.com/images/I/61fIm83QKJL._AC_UL480_FMwebp_QL65_.jpg"},
    {"name":"chilly","image":"https://m.media-amazon.com/images/I/61OGcUXXWSL._AC_UL480_FMwebp_QL65_.jpg"},
    {"name":"spoon","image":"https://m.media-amazon.com/images/I/81Cg5-iOIFL._AC_UL480_FMwebp_QL65_.jpg"},
  ]
)

  return (
    <div>

<Pronav/>

      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            {/* row2 */}

            <div className="row g-3">
              {/* pro1 */}

              {products.map(

                (value,index)=>{

                  return(

                    <div className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3 col-xxl-3">
                <div class="card" >
                  <img src={value.image}
                 style={{height:'400px'}}  class="card-img-top" alt="..." />
                  <div class="card-body">
                    <h5 class="card-title">{value.name}</h5>
                    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                    <a href="#" class="btn btn-primary">Go somewhere</a>
                  </div>
                </div>

              </div>
                  )
                }


              )}

              








            </div>
          </div>
        </div>
      </div>




    </div>
  )
}

export default Viewpro