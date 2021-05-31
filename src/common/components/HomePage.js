import React  from "react";
import 'bootstrap/dist/css/bootstrap.css'
import '../components/Homepage.css'


const HomePage=()=>{

    return(
        <div className='container'>
            <div className='row h-100 mr-lg-5 ml-lg-5'>
                <br></br>
                <div class="links mt-5">
                    <a href="https://github.com/sanketAPatel/mernFE" class="button" target="blank">Github FrontEnd</a><br/>
                <a href="https://github.com/sanketAPatel/mernBE" class="button" target="blank">Github BackEnd</a><br/>
            <a href="https://mernbe.herokuapp.com/api/employees" class="button" target="blank">Backend Deploy</a><br/>
            <a href="http://sanketapatel.com" class="button" target="blank">Sanket portfolio</a><br/>

</div>

            </div>
        </div>
    );


}

export  default  HomePage