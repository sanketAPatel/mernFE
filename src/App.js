import React from "react";
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import './App.css';
import 'bootstrap/dist/css/bootstrap.css'



import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
//
import './common/components/Header'
import './common/components/Footer'
import Header from "./common/components/Header";
import Footer from "./common/components/Footer";

import EmployeesList from './employees/views/list'
import EmployeesCreate from './employees/views/create'
import EmployeesShow from './employees/views/show'
import EmployeesUpdate from  './employees/views/update'

import DepartmentsUpdate from './departments/views/update'
import DepartmentsCreate from './departments/views/create'
import DepartmentsList from './departments/views/list'
import DepartmentsShow from './departments/views/show'




function App() {
  return (
      <div className="container">
          <div className="row">
              <div className="col-12  " >
                <Header/>
              </div>

           <BrowserRouter>


               <Switch>

                   <Route path="/" exact >
                            <h1>this is the  main page </h1>
                   </Route>

                   <Route path='/employees' exact>
                       <div id="root" />
                       <EmployeesList/>
                   </Route>

                   <Route path='/employees/create' exact>
                       <EmployeesCreate/>
                   </Route>

                   <Route path='/employees/:id/show' exact>
                       <EmployeesShow/>
                   </Route>
                   <Route path='/employees/:id/update' exact>
                       <EmployeesUpdate/>
                   </Route>

                   <Route path= '/departments' component={DepartmentsList} exact/>
                   <Route path= '/departments/:id/update' component={DepartmentsUpdate} exact/>
                   <Route path= '/departments/:id/show' component={DepartmentsShow} exact/>
                    <Route path='/departments/create' component={DepartmentsCreate} exact/>



               </Switch>


           </BrowserRouter>


              <div className="col-xs-12 ">
                  <Footer/>
              </div>
          </div>
      </div>
  );
}

export default App;
