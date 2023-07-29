import React from 'react';

export default function Contact() {
    return (
        <section className='page-section ' id='contact'>
            <div className='container'>
                <h2 className='text-uppercase  text-center pt-5 pb-3'>contact me</h2>

                <div>
                    <div className="d-flex text-center">
                        <hr className="text-dark w-50 p-2 mx-3"></hr>
                        <i class="fa-solid fa-star text-dark text-center fs-2 mb-2"></i>

                        <hr className="text-dark w-50 p-2 mx-3"></hr>


                    </div>
                    <div className=' row flex' >
                        <div className='col-md-8 mx-auto'>
                            <form name='sentMessage' id='contactForm'>
                                <div className='control-group floating-label-form-group controls mb-0 pb-2'>

                                    <input class="form-control" id="name" type="text"
                                        placeholder="Name" required="required" data-validation-required-message="Please enter your name."></input>

                                </div>
                                <div className='control-group floating-label-form-group controls mb-0 pb-2'>

                                    <input class="form-control" id="email" type="email"
                                        placeholder="email address" required="required" data-validation-required-message="Please enter your email."></input>

                                </div>
                                <div className='control-group floating-label-form-group controls mb-0 pb-2'>

                                    <input class="form-control" id="phone" type="number"
                                        placeholder="mobile phone" required="required" data-validation-required-message="Please enter your mobile phone."></input>

                                </div>
                                <div className='control-group floating-label-form-group controls mb-0 pb-2'>

                                    <textarea className='form-control  ' placeholder='message' id='Message' rows='5' required='required' data-validation-required-message="Please enter a message"></textarea>


                                </div>
                                <div class="form-group">
                                    <button class="btn  btn-xl btn-primary m-3" id="sendMessageButton" type="submit">Send</button></div>


                            </form>

                        </div>

                    </div>


                </div>
</div>
        </section>
    )
}
