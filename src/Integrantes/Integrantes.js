import "./Integrantes.css"
import "animate.css"
import WOW from "wowjs";
import {useEffect} from "react";

export function Integrantes(){

    useEffect(() =>{
        new WOW.WOW({
            love: false
        }).init();
    }, []) 

    return(

<>
            
            <div className="row my-5 justify-content-center">
            <div className="col-12 col-md-4 md-4 aling-self-center border-end">
                    <h2 className="text-end animate_animated animate_backInLeft"> WOS</h2>
                    <h3 className="text-end animate_animated animate_backInLeft"> Vocalista y compositor </h3>
                </div>
                <div className="col-12 col-md-4 zoom" >
                    <img src="https://firebasestorage.googleapis.com/v0/b/spotifi-3ba97.appspot.com/o/DJK7OLMVX5ARFJU7SMR7A3Z24U.webp?alt=media&token=7bfb8de8-b353-4d0f-b476-4a690291394b" alt="foto1" className="img-fluid w-100 rounded-circle animate_animated animate_backInLeft wow" data-bs-toggle="collapse" data-bs-target="#collapseExample2" />
                </div>
                
            </div>

            <div className='row mt-2'>
            <div className='col-12 col-md-4' >
                </div>
                <div className='col-12 col-md-4' >
                    <div className="collapse" id="collapseExample2">
                        
                        <div className="card card-body animate_animated animate_backInLeft">
                        Músico, actor, rapero. Voz, caja, guitarra, piano y batería. Surgió en la escena de las batallas de rap entre freestylers, y fue campeón en varias ocasiones de la competencia argentina El Quinto Escalón,​ que lo impulsó a ser uno de los artistas urbanos más reconocidos del país.
                        </div>
                    </div>
                </div>
            </div>

            <div className="row my-5 justify-content-center">
                <div className="col-12 col-md-4 zoom" >
                    <img src="https://firebasestorage.googleapis.com/v0/b/spotifi-3ba97.appspot.com/o/alexelcapo.jpg?alt=media&token=2b4bbe41-3353-4d1e-9361-1c947361bc96" alt="foto1" className="img-fluid w-100 rounded-circle animate_animated animate_backInRight" data-bs-toggle="collapse" data-bs-target="#collapseExample1" />
                </div>
                <div className="col-12 col-md-4 md-4 aling-self-center border-start">
                    <h2 className="animate_animated animate_backInRight"> AlexElCapo</h2>
                    <h3 className="animate_animated animate_backInRight"> No tiene nada que ver con la banda pero lo queria poner </h3>
                </div>
            </div>

            <div className='row mt-2'>
            <div className='col-12 col-md-4' >
                </div>
                <div className='col-12 col-md-4' >
                    <div className="collapse" id="collapseExample1">
                        <div className="card card-body m-5">
                            Que grande alex el capo, AlexElCaPOfAn De por vida
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}