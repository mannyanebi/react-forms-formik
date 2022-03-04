import {useFormik} from "formik";
import SignupForm from "./components/signUpForm";
import Header from "./components/header";
import './App.css';

function App() {
  // const formik = useFormik({
  //   initialValues: {
  //     email: "",
  //     firstName: "",
  //     lastName: "",
  //   },
  //   onSubmit: values => {
  //     console.log(values)
  //   }
  // })
  return (
    <div className="App">
      {/*<SignupForm/>*/}
        <button>Hello World</button>
        <Header planet={"Venus"}/>
      {/*<form onSubmit={formik.handleSubmit}>*/}
      {/*  <label htmlFor="email">User's Email</label>*/}
      {/*  <input type="text" name="email" id="email"*/}
      {/*         onChange={formik.handleChange}*/}
      {/*  value={formik.values.email}/>*/}

      {/*  <label htmlFor="firstName">First Name</label>*/}
      {/*  <input type="text" name="firstName" id="firstName"*/}
      {/*         onChange={formik.handleChange}*/}
      {/*  value={formik.values.firstName}/>*/}
      {/*  */}
      {/*  <label htmlFor="lastName">First Name</label>*/}
      {/*  <input type="text" name="lastName" id="lastName"*/}
      {/*         onChange={formik.handleChange}*/}
      {/*  value={formik.values.lastName}/>*/}

      {/*  <button type="submit">Submit</button>*/}
      {/*</form>*/}
    </div>
  );
}

export default App;
