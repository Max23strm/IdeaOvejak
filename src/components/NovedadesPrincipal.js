import React from 'react'
import Item from './Item'
import { Navigation, Pagination, Autoplay, Scrollbar } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "../styles/NovedadesPrincipal.css"
import { Link } from 'react-router-dom';

function NovedadesPrincipal(data) {

    
    let camisetas=data.data
    return (
        <section className='principalNovedades'>
            <h2>Los más populares</h2>
            <section className='principalGaleria'>
                <Swiper 
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                slidesPerView={window.innerWidth<800?1:
                    window.innerWidth<1000?2:
                    window.innerWidth<1500?3:
                    4}
                spaceBetween={100}
                scrollbar={true}
                autoplay={{delay:"5000"}}
                >
                    {camisetas.map((element)=>element.popular?
                    <SwiperSlide key={element.id}>
                        <Link  to={`/Item/${element.id}`}>
                            <Item clase="home"  camiseta={element}/>
                        </Link>
                    </SwiperSlide>:null)}
                </Swiper>
            </section>
        </section>
    )
}

export default NovedadesPrincipal
