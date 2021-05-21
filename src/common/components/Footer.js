
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer =()=>{
    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-sm-12">
                    <MDBFooter color="blue" className="font-small pt-4 mt-4">
                        <MDBContainer fluid className="text-center text-md-left">
                            <MDBRow>
                                 <MDBCol md="6" >

                                    <ul>
                                        <li className="list-unstyled" >
                                            <a href="#!"  ></a>
                                        </li>

                                    </ul>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                        <div className="footer-copyright text-center py-3">
                            <MDBContainer fluid>
                                &copy; {new Date().getFullYear()} Copyright: <a href="https://www.sanketapatel.com"> sanketapatel.com </a>
                            </MDBContainer>
                        </div>
                    </MDBFooter>




                </div>
            </div>
        </div>

    );
}

export default  Footer