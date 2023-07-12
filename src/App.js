import { useFormik } from 'formik';
import './App.css';

function App() {
  const formik = useFormik({
    initialValues:{
      name: "",
      email: "",
      password: "",
      confirmpassword:""
    },
    onSubmit:(values) => {
      console.log(formik.values)
    },
    
    validate: (values) => {
      let errors = {}
      if (!values.name) {
        errors.name = "Name is Required"
      }
      if (!values.email) {
        errors.email = "Email is Required"
      }
      if (!values.password) {
        errors.password = "Password is Required"
      }
      if (!values.confirmpassword) {
        errors.confirmpassword = "Password is Required"
      }
      return errors
    }
  })
  //console.log(formik.values)
  return (
    <div className='App'>
      <form onSubmit={formik.handleSubmit}>
      <label htmlFor='name'>Name</label>
      <br/>
      <input type="text" id='name' name='name'
        value={formik.values.name} className=""
        onChange={formik.handleChange}
        />
        {formik.errors.name ? <div className='error'>{ formik.errors.name}</div>:null}
      <br/>
      <label htmlFor='email'>Email</label>
      <br/>
      <input type="email" id='email' name='email'
        value={formik.values.email} className=""
        onChange={formik.handleChange}
        />
        {formik.errors.email ?<div className='error'>{ formik.errors.email}</div>:null}
      <br/>
      <label htmlFor='password'>Password</label>
      <br/>
      <input type="password" id='password' name='password'
        value={formik.values.password} className=""
      onChange={formik.handleChange}
        />
        {formik.errors.password ? <div className='error'>{ formik.errors.password}</div>: null}
        <br />
        <label htmlFor='confirmpassword'>Confirm Password</label>
      <br/>
      <input type="password" id='confirmpassword' name='confirmpassword'
        value={formik.values.confirmpassword} className=""
      onChange={formik.handleChange}
        />
        {formik.errors.password ? <div className='error'>{ formik.errors.password}</div>: null}
      <br/>
        <button className='' type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
