import	{ servicioToken } from './servicioToken'
export async function servicioSpotify(){

    const URI="https://api.spotify.com/v1/artists/15UsOTVnJzReFVN1VCnxy4/top-tracks?market=ES"
    const TOKEN= await servicioToken()
    const PETICION={
        method:"GET",
        headers:{Authorization:TOKEN}
    }
    fetch(URI,PETICION)
    let respuesta=await fetch(URI,PETICION)
    let datos =await respuesta.json()

    return datos

}