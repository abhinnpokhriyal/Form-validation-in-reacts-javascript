import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

export default function Signup() {

    const formik = useFormik({
        initialValues: {
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmpassword: "",
            phone: "",
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
            .max(15, "Must be 15 characters or less")
            .required("Required"),
            lastName: Yup.string()
            .max(20, "Must be 20 characters or less")
            .required("Required"),
            email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
            password: Yup.string()
            .required("Please Enter your password")
            .max(12).required('Password is required')
            .matches(
                /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{5,}$/,
                "Max 12 and min 5 characters password with one Uppercase, one lowercase, one Number and one special case Character"
              ),
            confirmpassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords does not match')
            .required("Please confirm your password"),
            phone: Yup.number()
            .typeError("That doesn't look like a phone number")
            .positive("A phone number can't start with a minus")
            .integer("A phone number can't include a decimal point")
            .min(10)
            .required('A phone number is required'),
        }),
        onSubmit: (values) => {
            console.log(values);
        },
    }); 
    
    return (
        <form onSubmit={formik.handleSubmit}>
            <h1>Sign Up Form</h1>
            <div className="input-conatiner">
                <input id="firstName" name="firstName" type="text" placeholder="First Name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.firstName} />
                {formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null}
            </div>
            <div className="input-conatiner">
                <input id="lastName" name="lastName" type="text" placeholder="Last Name" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.lastName} />
                {formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null}
            </div>
            <div className="input-conatiner">
                <input id="email" name="email" type="email" placeholder="Email" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
                {formik.errors.email ? <p>{formik.errors.email}</p> : null}
            </div>
            <div className="input-conatiner">
                <input id="password" name="password" type="password" placeholder="Password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.password} />
                {formik.errors.password ? <p>{formik.errors.password}</p> : null}
            </div>
            <div className="input-conatiner">
                <input id="confirmpassword" name="confirmpassword" type="password" placeholder="Confirm Password" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.confirmpassword} />
                {formik.errors.confirmpassword ? <p>{formik.errors.confirmpassword}</p> : null}
            </div>
            <div className="input-conatiner">
                <input id="phone" name="phone" type="tel" placeholder="Phone" onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.phone} />
                {formik.errors.phone ? <p>{formik.errors.phone}</p> : null}
            </div>
            <button type="submit">Submit</button>
        </form>
    )
}