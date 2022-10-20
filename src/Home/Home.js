import "./Home.css"
import { SubMenu } from "../Submenu/Submenu.js"
import { Footer } from "../Footer/Footer.js"
export function Home() {
    let descripcionBanda = 'Nacido en Plantation, Florida, XXXTentacion pasó la mayor parte de su infancia en Lauderhill. Comenzó a escribir música después de ser liberado de un centro de detención juvenil y pronto comenzó su carrera musical en SoundCloud en 2013, empleando estilos y técnicas que no eran convencionales en la música rap, como la saturación y los instrumentos pesados ​​con acompañamiento de guitarra, inspirándose en la tercera ola emo y grunge. En 2014, formó el underground colectivo Members Only junto con otros miembros, pronto se convirtió en una figura popular en SoundCloud rap, una escena de música trap que toma elementos de la música lo-fi y los Roland TR-808.4​ Jahseh ganó la atención de la corriente principal con el sencillo "Look at Me". Su álbum debut 17 (2017) está certificado como doble platino en los Estados Unidos y alcanzó el número dos en el Billboard 200. Su segundo álbum ? (2018) debutó en el número uno en el Billboard 200 y está certificado como cuádruple platino en los EE. UU. Su sencillo principal, "Sad!", alcanzó póstumamente el número uno en el Billboard Hot 100,5​ y acumuló más de 1.300 millones de visitas en YouTube y 1.700 millones de transmisiones en Spotify para noviembre de 2021, además de ser certificado Diamante por la RIAA en agosto de 2021.[cita requerida]'
    return (
        <>
            <div className="Banner">

            </div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-center">xxxTentacion</h1>
                        <p className="text-center">
                            {descripcionBanda}
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <SubMenu></SubMenu>
                <Footer></Footer>
            </div>
        </>
    )

}