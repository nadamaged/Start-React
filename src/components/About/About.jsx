import React from 'react';

export default function About() {
    return (
        <section className=' page-section-about text-white  pb-3 ' id='About'>
            <div className='container  py-5'>
                <h2 className='text-uppercase text-white text-center mb-4 mt-2'>about</h2>

                <div className='d-flex'>
                    <hr className="text-white w-50 p-2 mx-3"></hr>
                    <i class="fa-solid fa-star text-white text-center fs-2 mb-4"></i>
                    <hr className="text-white w-50 p-2 mx-3"></hr>
                </div>
                <div className='row justify-content-center align-item-center'>
                    <div className='col-lg-4 ml-auto'>
                        <p className='lead'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                    </div>
                    <div className='col-lg-4 ml-auto'>
                        <p className='lead'>You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>

                    </div>
                </div>




            </div>

        </section>

    )
}