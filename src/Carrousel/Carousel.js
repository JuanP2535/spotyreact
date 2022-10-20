export function Caroucel() {

  return (
    <>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://firebasestorage.googleapis.com/v0/b/imagenesbatman.appspot.com/o/3.jpg?alt=media&token=5fbdf121-ca42-4366-a28c-17dcb17b2149" className="w-100" />
          </div>
          <div className="carousel-item">
            <img src='https://firebasestorage.googleapis.com/v0/b/imagenesbatman.appspot.com/o/pa.jpg?alt=media&token=dab2ac2f-3bc4-4c34-99c0-fbd0b5dde63d' className="w-100" />
          </div>
          <div className="carousel-item">
            <img src='https://firebasestorage.googleapis.com/v0/b/imagenesbatman.appspot.com/o/xxxtentacion3.jpg?alt=media&token=c8f6302e-4583-4276-8c8a-94f4d108c464' className="w-100" />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}