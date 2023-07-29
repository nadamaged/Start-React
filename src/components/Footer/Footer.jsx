export default function Footer() {
    return <>
    <div className='d-flex flex-column g-0'>
        <footer className="footer text-center py-5">
            <div className="container">
                <div className="row">

                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Location</h4>
                        <p className="lead mb-0">
                            2215 John Daniel Drive
                            <br />
                            Clark, MO 65243
                        </p>
                    </div>

                    <div className="col-lg-4 mb-5 mb-lg-0">
                        <h4 className="text-uppercase mb-4">Around the Web</h4>
                        <a className="btn btn-outline-light btn-social mx-1 rounded-circle p-2" href="#!"><i className="fab fa-fw fa-facebook-f"></i></a>
                        <a className="btn btn-outline-light btn-social mx-1 rounded-circle p-2" href="#!"><i className="fab fa-fw fa-twitter"></i> </a>
                        <a className="btn btn-outline-light btn-social mx-1 rounded-circle p-2" href="#!"> <i className="fab fa-fw fa-linkedin-in"></i> </a>
                        <a className="btn btn-outline-light btn-social mx-1 rounded-circle p-2" href="#!"><i className="fab fa-fw fa-dribbble"></i>  </a>
                    </div>

                    <div className="col-lg-4">
                        <h4 className="text-uppercase mb-4">About Freelancer</h4>
                        <p className="lead mb-0">
                            Freelance is a free to use, MIT licensed Bootstrap theme created by Route
                        </p>
                    </div>
                </div>
            </div>
          
        </footer>
          <div className="copyright text-center text-white">
          <div className="foot p-3"><small>Copyright © Your Website 2021</small></div>
          
          </div>
          </div>




    </>
}