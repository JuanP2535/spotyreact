import { Link } from "react-router-dom";

export function Footer() {

    return (
        <>
            <footer className="container-fluid bg-dark d-flex justify-content-center text-white mt-5 p-3 text-center">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <h4>&copy;Juan Pablo Mendoza Fernandez</h4>
                        <h4>Medellín</h4>
                        <h4>Aprendiz SURA</h4>
                        <h4>2022</h4>
                    </div>
                    <div className="col-12 col-md-6 mt-5 p-3 text-center text-white p-2">
                        <a href="https://www.linkedin.com/in/juan-pablo-mendoza-fernandez-4a6616231/">
                        <i class="bi bi-linkedin fs-1 text-white"></i>
                        </a>
                        <a href="https://github.com/JuanP2535">
                        <i class="bi bi-github fs-1 text-white"></i>
                        </a>
                    </div>
                </div>
            </footer>
        </>
    )

}