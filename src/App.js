import "./App.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { validateEmail } from "./utils";
const schema = yup.object().shape({  
  firstName: yup.string().required("First name is required"),
  lastName: yup.string(), 
  email: yup
    .string()
    .email("Invalid email")
    .required("Email is required")
    .test("validateEmail", "Invalid email", (value) => validateEmail(value)),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
  role: yup
    .string()
    .notOneOf(['role'], "Please select a valid role")
    .required("Role is required"),
});

// Password Error Component (Optionally)
const PasswordErrorMessage = (msg) => {
  return <p className="FieldError">{msg.children}</p>;
};

function App() {
  return (
    <div className="App">
      <Formik
        initialValues={{ firstName: "", lastName: "", email: "", password: "", role: "role" }}
        validationSchema={schema}
        onSubmit={(values, { resetForm }) => {
          alert("Account created!");
          resetForm();
        }}>
        {({ isValid, dirty }) => (
          <Form>
            <fieldset>
              <h2>Sign Up</h2>

              <div className="Field">
                <label>First name <sup>*</sup></label>
                <Field name="firstName" placeholder="First name" />
                <ErrorMessage name="firstName" component="p" className="FieldError" />
              </div>

              <div className="Field">
                <label>Last name</label>
                <Field name="lastName" placeholder="Last name" />
                <ErrorMessage name="lastName" component="p" className="FieldError" />
              </div>

              <div className="Field">
                <label>Email address <sup>*</sup></label>
                <Field name="email" placeholder="Email address" />
                <ErrorMessage name="email" component="p" className="FieldError" />
              </div>

              <div className="Field">
                <label>Password <sup>*</sup></label>
                <Field name="password" type="password" placeholder="Password" />
                <ErrorMessage name="password" render={(msg) => <PasswordErrorMessage>{msg}</PasswordErrorMessage>} />
              </div>

              <div className="Field">
                <label>Role <sup>*</sup></label>
                <Field as="select" name="role">
                    <option value="role">Select a role</option>
                    <option value="individual">Individual</option>
                    <option value="business">Business</option>
                </Field>
                <ErrorMessage name="role" component="p" className="FieldError" />
              </div>

              <button type="submit" disabled={!isValid || !dirty}>
                Create account
              </button>
            </fieldset>
          </Form>
        )}

      </Formik>
    </div>
  );
}

export default App;
