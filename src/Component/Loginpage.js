import React  from 'react'
import { Form,Formik,Field } from 'formik' 
import  * as yup from 'yup'
import 'bootstrap/dist/css/bootstrap.min.css';

function Loginpage() {
    const intialValues={
        email:'',
        password:''
    }
    const validationSchema=yup.object({
        email:yup.string().email('Invalid Email format').required('Required'),
        password:yup.string().required('Password Required')
    })
    const onSubmit=values=>{
           console.log(values)
    }
    return (
        <Formik initialValues={intialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
           {
<Form>
    <div className="container  mt-5">
        <div className="row align-items-center">
            <div className="col-md-3">

            </div>
            <div className="col-md-4 shadow-sm">
            <h2>Login Page</h2>
<div className="form-group mt-3">
    <label htmlFor="email" className="mb-3">Email Address</label>
    <Field name="email" className="form-control" type="email" />
</div>

<div className="form-group mt-3">
    <label htmlFor="Password" className="mb-3">Password</label>
    <Field name="Password" className="form-control" type="password" />
</div>
<div className="form-group mt-5 mb-3">
    <button type="submit" className="btn btn-primary">Submit</button>
</div>
<div className="form-group mt-2 mb-3">
    <a href='/forgetpage'>Forget Password</a>
</div>
</div>
</div>
        </div>
</Form>
                // formik=>{
                //      return <Form>
                //        <formcontrol
                //         control="input"
                //         type="email"
                //         label='Email'
                //         name='email'
                //        />
                //          <formcontrol
                //         control="input"
                //         type="password"
                //         label='Password'
                //         name='password'
                //        />
                //        <button type='submit' disabled={!formik.isValid}>Submit</button>

                       
                //      </Form>
                // }
           }
        </Formik>
    )
    
}


export default Loginpage
