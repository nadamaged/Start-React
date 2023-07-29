
import { Link } from 'react-router-dom';
export default function Navbar() {
    return <>
        <nav className="navbar navbar-expand-lg p-">
            <div className="container">
                <Link className="navbar-brand text-white fw-bold fs-2 py-3 px-5" href="#" to="">Start React</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                         {/* <li className="nav-item">
                            <Link className='nav-link active text-white fw-bold py-3 fs-5' to="">Home</Link>
                        </li>  */}
                        <li className="nav-item">
                            <Link className='nav-link active text-white fw-bold py-3 fs-5' to="portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white fw-bold fs-5 py-3" to="about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-white fw-bold fs-5 py-3 pe-5" to="Contact">Contact</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
}




