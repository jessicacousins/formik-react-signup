import { Formik, Field, Form } from "formik";
import { useFormik } from "formik";
// import "./App.css";

function App() {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      toggle: false,
      checked: [],
      tel: "",
      date: "",
    },
    onSubmit: (values) => {
      console.log("form", values);
      alert("Sign Up Successful");
    },
    validate: (values) => {
      let errors = {};
      if (!values.email) {
        errors.email = "Field required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Username should be an email";
      }
      if (!values.password) errors.password = "Field required";
      if (!values.date) {
        errors.date = "Field required";
      } else {
        const currentDate = new Date();
        const enteredDate = new Date(values.date);
        const ageDiff = currentDate.getFullYear() - enteredDate.getFullYear();
        if (ageDiff < 18) {
          errors.date = "You must be at least 18 years old to sign up";
        }
      }

      return errors;
    },
  });

  return (
    <div className="card">
      <div className="card-body">
        <form onSubmit={formik.handleSubmit}>
          <div className="form-group">
            <h3>Welcome</h3>
            <h5>Please Sign Up</h5>
            <label htmlFor="emailField" className="email">
              Username
            </label>
            <input
              type="text"
              id="emailField"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="form-control"
              placeholder="Enter email here..."
              autoComplete="username"
            />
            {formik.errors.email && (
              <div id="emailError" style={{ color: "red" }}>
                {formik.errors.email}
              </div>
            )}
          </div>
          <div className="form-group">
            <label className="password" htmlFor="pswField">
              Password
            </label>
            <input
              type="password"
              id="pswField"
              name="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              placeholder="Enter password here..."
              className="form-control"
              autoComplete="current-password"
            />
            {formik.errors.password && (
              <div id="pswError" style={{ color: "red" }}>
                {formik.errors.password}
              </div>
            )}
          </div>

          <label className="date" htmlFor="dateField">
            Users must be 18 years or older
          </label>
          <input
            type="date"
            name="date"
            id="dateField"
            className="form-control"
            onChange={formik.handleChange}
            value={formik.values.date}
          />
          {formik.errors.date && (
            <div id="dateError" style={{ color: "red" }}>
              {formik.errors.date}
            </div>
          )}
          <div>
            <label htmlFor="telField" className="tel">
              Phone # <span className="optional">(optional)</span>
            </label>
            <input
              type="tel"
              className="form-control"
              name="tel"
              id="telField"
              placeholder="555-555-555"
              onChange={formik.handleChange}
              value={formik.values.tel}
            />
          </div>
          <div className="receive-updates">
            <label htmlFor="">Receive Updates:</label>
            <div className="checkbox-group">
              <label className="radio-label radio-one">
                <input type="radio" name="checked" value="Yes" />
                Yes
              </label>
              <label className="radio-label radio-two">
                <input type="radio" name="checked" value="No" />
                No
              </label>
            </div>
          </div>
          <div className="d-grid gap-2 col-6 mx-auto">
            <button id="submitBtn" type="submit" className="btn">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
