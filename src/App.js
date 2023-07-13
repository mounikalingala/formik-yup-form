import { useFormik } from 'formik';
import './App.css';
import { userSchema } from './schema';

const onSubmit = () => {
  console.log("submitted")
}

function App() {
  const {values,errors,touched,handleBlur,handleChange,handleSubmit}= useFormik({
    initialValues:{
      name: "",
      email: "",
      password: "",
      confirmpassword:""
    },
    validationSchema:userSchema,onSubmit,
  })
  console.log(errors)
  return (
    <div className='App'>
      <h1>Register Form</h1>
      <form onSubmit={handleSubmit}>
        <div className='inputs-container'>
      <label htmlFor='name'>Name</label>
      <br/>
      <input type="text" id='name' name='name'
        value={values.name} className={errors.name?"input-error":""}
        onChange={handleChange} onBlur={handleBlur}
        />
        {errors.name && touched.name && <p className='error' >{errors.name}</p>} 
      <br/>
      <label htmlFor='email'>Email</label>
      <br/>
      <input type="email" id='email' name='email'
        value={values.email} className={errors.email?"input-error":""}
        onChange={handleChange} onBlur={handleBlur}
        />
        {errors.email && touched.email && <p className='error' >{errors.email}</p>} 
      <br/>
      <label htmlFor='password'>Password</label>
      <br/>
      <input type="password" id='password' name='password'
        value={values.password} className={errors.password && touched.errors?"input-error":""}
      onChange={handleChange} onBlur={handleBlur}
        />
       {errors.password && touched.password && <p className='error' >{errors.password}</p>} 
        <br />
        <label htmlFor='confirmpassword'>Confirm Password</label>
      <br/>
      <input type="password" id='confirmpassword' name='confirmpassword'
        value={values.confirmpassword} className={errors.confirmpassword?"input-error":""}
      onChange={handleChange} onBlur={handleBlur}
        />
        {errors.confirmpassword && touched.confirmpassword && <p className='error' >{errors.confirmpassword}</p>} 
          <br />
        </div>
        <button className='' type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default App;
