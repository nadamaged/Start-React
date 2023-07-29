
import image from "../Images/avataaars.svg";
export default function Home() {
    return <>
    <section id="Home">
        <header className='vh-100 d-flex justify-content-center align-items-center'>
            <div className="text-center">
                <img className='w-75' src={image} alt="" />
                <h1 className="text-white fw-bolder">START REACT</h1>

                <div className="d-flex text-center">
                <hr className="text-white w-50 p-2 mx-3"></hr>
                <i class="fa-solid fa-star text-white text-center fs-2 mb-2"></i>
                <hr className="text-white w-50 p-2 mx-3"></hr>
                </div>
                <p className="text-white fs-5">Graphic Artist - Web Designer - Illustrator</p>
            </div>

        </header>

        </section>
    </>
}