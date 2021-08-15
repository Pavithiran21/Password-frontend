import React from 'react';
import { BrowserRouter, Route,Switch } from 'react-router-dom';
import Loginpage from '../src/Component/Loginpage';
import ForgetPage from '../src/Component/Forgetpassword';
import './App.css'
import ResetPassword from './Component/Resetpassword';

function App ()
{
    return (
        <div className='App'>
            <BrowserRouter>
                <Switch>
                {/* <Route path='/'><Loginpage/></Route> */}
                <Route path='/Loginpage'><Loginpage/></Route>
                <Route path='/ForgetPage'><ForgetPage/></Route>
                <Route path='/ResetPassword'><ResetPassword/></Route>

                </Switch>
           
            </BrowserRouter>

        </div>
    )
}

export default App