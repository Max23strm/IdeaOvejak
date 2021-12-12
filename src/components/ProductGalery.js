import React from 'react'


function ProductGalery(elementos) {
    return (
        <div className="galeria">
            <section>
            {elementos.elementos.map(function (x){
                return (<img src={x}
                        key={elementos.elementos[elementos.elementos[x]]}
                        className="imagenDetalle"
                        alt="imagen de producto"/>)
            })}
            </section>
            <section className="contadores">
                {elementos.elementos.map(function (x){
                    return (<span className="bolitaContadora"/>)
                })}
                
            </section>
        </div>
    )
}

export default ProductGalery
