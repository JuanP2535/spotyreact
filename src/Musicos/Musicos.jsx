import { Footer } from "../Footer/Footer"

export function Musicos() {


    //arreglo de objetos es el formato comun al consumir un api
    let musicos = [
        {
            etapa: "1",
            rol: "Vocalista",
            url: "https://firebasestorage.googleapis.com/v0/b/imagenesbatman.appspot.com/o/inicio.jpg?alt=media&token=2e86d157-5cd5-4701-8e05-b25f3616daa1",
        },
        {
            etapa: "2",
            rol: "Vocalista",
            url: "https://firebasestorage.googleapis.com/v0/b/imagenesbatman.appspot.com/o/xxxtentacion2.jpg?alt=media&token=8eb4a5de-6427-49ec-930b-8881aeea0121",
        },
        {
            etapa: "3",
            rol: "Vocalista",
            url: "https://firebasestorage.googleapis.com/v0/b/imagenesbatman.appspot.com/o/xxtentacionInicios.jpg?alt=media&token=90d6a79e-0e17-405c-ba78-94cd040f9e07",
        },

    ]
    let conciertoMemorables = [
        {
            fecha:"05/03/2018",
            pais:"United States",
            descripcon:"es el ultimo concierto antes de fallecer",
            foto:"https://firebasestorage.googleapis.com/v0/b/imagenesbatman.appspot.com/o/concierto2.jpg?alt=media&token=a6fc1053-13f0-458d-a815-943ae8d7db5a",
        },
        {
            fecha:"03/01/2016",
            pais:"United states",
            descripcon:"concierto mas visitado",
            foto:"https://firebasestorage.googleapis.com/v0/b/imagenesbatman.appspot.com/o/concierto.jpg?alt=media&token=a78c7367-e51f-4570-8c36-e0f28ada99a5",
        },
        {
            fecha:"12/12/2015",
            pais:"",
            descripcon:"",
            foto:"https://firebasestorage.googleapis.com/v0/b/imagenesbatman.appspot.com/o/concierto1.jpg?alt=media&token=43ed6d99-b3fa-41d3-b0b6-86a4ef39ec2d",
        },
        {
            fecha:"",
            pais:"",
            descripcon:"",
            foto:"https://firebasestorage.googleapis.com/v0/b/imagenesbatman.appspot.com/o/concierto1.jpg?alt=media&token=43ed6d99-b3fa-41d3-b0b6-86a4ef39ec2d",
        },
        {
            fecha:"",
            pais:"",
            descripcon:"",
            foto:"https://firebasestorage.googleapis.com/v0/b/imagenesbatman.appspot.com/o/concierto1.jpg?alt=media&token=43ed6d99-b3fa-41d3-b0b6-86a4ef39ec2d",
        }
    ]

    // mapeando un arreglo para hacer render
    return (
        <>
        <div className="row row-cols-1 row-cols row-cols-md-3 g-3 justify-content-center p-5">
            {
                musicos.map((musico) => {
                    return (
                       

                            <div className="col">
                                <div className="card h-100 mt-5 bg-dark text-white">
                                    <h1>{musico.rol}</h1>

                                    <img src={musico.url} className="img-fluid w-100 h-100" />
                                    <p>{musico.etapa}</p>

                                </div>
                            </div>

                        
                    )
                })
            }

           
        </div>
        
     <div className="row row-cols-1 row-cols row-cols-md-5 g-3 justify-content-center mt-5 p-5">
            {
                conciertoMemorables.map((concierto) => {
                    return (
                       

                            <div className="col">
                                <div className="card h-100 mt-5 bg-dark text-white">
                                    

                                    <img src={concierto.foto} className="img-fluid w-100 h-100" />
                                    <p>{concierto.fecha}</p>

                                </div>
                            </div>

                        
                    )
                })
            }

           
        </div>
        
        <div className="col-12 col-md-1 w-100 mt-5">
         <Footer></Footer>
     </div>
     </>
    )
}