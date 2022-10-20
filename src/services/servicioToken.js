export async function servicioToken() {

    //const
    const URI = 'https://accounts.spotify.com/api/token'

    //datos
    const DATO1 = 'grant_type=client_credentials'

    const DATO2 = 'client_secret=ba9392c43edf46d1a8da47b413bdc8dd'

    const DATO3 = 'client_id=59d7740cd2df4ebd9d70618b91d7be1f'

    //peticion
    const PETICION = {
        method: "POST",
        headers: { "Content-type": "application/x-www-form-urlencoded" },
        body: DATO1 + "&" + DATO2 + "&" + DATO3

    } 

    //fetch
    let respuesta = await fetch(URI, PETICION)
    let datos = await respuesta.json()
    datos =datos.token_type+' '+datos.access_token
    //retorno de datos 
    return datos



}