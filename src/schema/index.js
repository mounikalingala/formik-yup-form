import * as yup from "yup"

const passwordRules = /^(?=,*\d)(?=,*[a-z])(?=,*[A-Z]).{5,}$/;
export const userSchema = yup.object().shape({
    name: yup.string().required("Required"),
    email: yup.string().email("Please enter a valid Email").required("Required"),
    password: yup.string().min(5).matches(passwordRules,{message:"Please create a strong password" }).required("Required"),
    confirmpassword:yup.string().oneOf([yup.ref("password"),null], "Password must match").required("Required"),
})