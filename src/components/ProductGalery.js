import React from 'react'


function ProductGalery(elementos) {
  //  console.log(elementos)
  console.log(elementos)
    return (
        <div className="galeria">
            <section><img src={elementos.elementos}
                    className="imagenDetalle"
                    alt="imagen de producto"/>
            </section>
            {/* <section className="contadores">
                {elementos.elementos.map(function (x){
                    return (<span className="bolitaContadora"/>)
                })}
                
            </section> */}
        </div>
    )
}

export default ProductGalery
