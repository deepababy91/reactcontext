 import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Button } from 'react-bootstrap';



export default function Account() {
  const formik = useFormik({
    initialValues: {
      full_name: "",
      email: "",
      password: "",
      confirm_password: ""
    },
    validationSchema: Yup.object({
      full_name: Yup.string()
        .min(2, "Mininum 2 characters")
        .max(15, "Maximum 15 characters")
        .required("Required!"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Required!"),
      password: Yup.string()
        .min(8, "Minimum 8 characters")
        .required("Required!"),
      confirm_password: Yup.string()
        .oneOf([Yup.ref("password")], "Password's not match")
        .required("Required!")
    }),
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    }
  });

  return (
    <div className="signup">
      <h1 style={{color:'rgb(209, 193, 193)'}}>SIGN UP Here</h1>

      <form onSubmit={formik.handleSubmit} className="signupform">
        <div>
          <label className="formlabel">Full Name</label>
          <input className="forminput"
            type="text"
            name="full_name"
            value={formik.values.full_name}
            onChange={formik.handleChange}
          />
          {formik.errors.full_name && formik.touched.full_name && (
            <p className="formp">{formik.errors.full_name}</p>
          )}
        </div>
        <div>
          <label className="formlabel">Email</label>
          <input className="forminput"
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
          />
          {formik.errors.email && formik.touched.email && (
            <p className="formp">{formik.errors.email}</p>
          )}
        </div>
        <div>
          <label className="formlabel">Password</label>
          <input className="forminput"
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
          />
          {formik.errors.password && formik.touched.password && (
            <p className="formp">{formik.errors.password}</p>
          )}
        </div>
        <div>
          <label className="formlabel">Confirm Password</label>
          <input className="forminput"
            type="password"
            name="confirm_password"
            value={formik.values.confirm_password}
            onChange={formik.handleChange}
          />
          {formik.errors.confirm_password &&
            formik.touched.confirm_password && (
              <p className="formp">{formik.errors.confirm_password}</p>
            )}
        </div>
        <div>
        <br/>
      
        <Button color="primary" type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}