import React from 'react'
import SwiperCore, { Navigation, Pagination, A11y,Autoplay, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from '../imagenes/carruselPrincipal/mainPSG.jpg'
import img2 from '../imagenes/carruselPrincipal/mainSuperRugby.jpg'
import img3 from '../imagenes/carruselPrincipal/mainVenezia.jpg'
import img4 from '../imagenes/carruselPrincipal/mainLeinstervMunster.jpg'
import depoFut from '../imagenes/carruselPrincipal/principalDeporteFutbol.jpg'
import depoRug from '../imagenes/carruselPrincipal/principalDeporteRugby.jpg'
import depoBas from '../imagenes/carruselPrincipal/principalDeporteBasquet.jpg'
import 'swiper/swiper-bundle.css';
import "../styles/Landing.css"
import { Link } from 'react-router-dom';
import NovedadesPrincipal from '../components/NovedadesPrincipal';

SwiperCore.use([Pagination,Navigation])

function Home({data}) {

    const slides=[img1,img2,img3,img4]

    return (
        <div className="landing" >
            <section className='galeriaPrincipal'>
                <Swiper  className='galeriaSwiper'   modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={50}
                slidesPerView={1}
                navigation
                autoplay={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
                >
                    {slides.map((element)=><SwiperSlide>
                        <Link to="">
                        <img src={element} className="imagenCarruselPrincipal"alt="slide" key={element.index}/>
                        </Link>
                        </SwiperSlide>)
                    }
                </Swiper>
            </section>

        {/* Segunda seccion de la pagina principal */}

            <section className='deportesPrincipal'>
                <h2>DEPORTES</h2>
                <section className='deportesImagenes'>
                    <Link to="/category/Futbol">
                        <img src={depoFut} className='depoImagen' alt="seccion de Futbol"/>
                        <h3>Futbol</h3>
                    </Link>

                    <Link to="/category/Rugby">
                        <img src={depoRug} className='depoImagen' alt="seccion de Rugby"/>
                        <h3>Rugby</h3>
                    </Link>

                    <Link to="/category/Rugby">
                        <img src={depoBas} className='depoImagen' alt="seccion de Basquet"/>
                        <h3>Basquetball</h3>
                    </Link>
                </section>
            </section>

            <NovedadesPrincipal data={data}/>
        </div>
    )
}

export default Home
