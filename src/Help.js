import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Formik, Field, Form } from 'formik';
import { Button } from 'react-bootstrap';


export default function Help() {
  return (
    <div>

        <h1 className="signup" style={{color:'rgb(209, 193, 193)'}}>Contact Us</h1>
      <Formik
            initialValues={{ name: '', email: '', subject: '', content: '' }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 1000);
            }}
        >
            {({ isSubmitting }) => (
                <Form className="signupform">
                    <div className="form-group">
                        <label htmlFor="name" className="formlabel" >Name</label>
                        <Field name="name" className="form-control" type="text" required style={{height:'28px'}}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email" className="formlabel">Email Address</label>
                        <Field name="email" className="form-control" type="email" style={{height:'28px'}} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject" className="formlabel">Subject</label>
                        <Field name="subject" className="form-control" type="text" style={{height:'28px'}}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="content" className="formlabel">Content</label>
                        <Field name="content" className="form-control" as="textarea"/>
                    </div>
                    <div className="form-group">
                    <Button color="primary" type="submit" style={{fontFamily:'Oleo Script'}}>Submit</Button>
                    </div>

                </Form>
            )}
        </Formik>
        </div>
    );
};
 
