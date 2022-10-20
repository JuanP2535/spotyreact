import { Caroucel } from '../Carrousel/Carousel.js'
import { Integrantes } from '../Integrantes/Integrantes.js'
import './Historia.css'
export function Historia() {

    return (
        <>
            <Caroucel></Caroucel>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-12 col-md-3 mt-5'>
                        <Integrantes></Integrantes>
                    </div>
                </div>
            </div>
        </>
    )
}