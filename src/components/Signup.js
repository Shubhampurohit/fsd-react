import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [mobileNumber, setMobileNumber] = useState();

  const [nameError, setNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [mobileNumberError, setMobileNumberError] = useState(false);

  const navigate = useNavigate();

  const signupUser = async () => {
    if (!name || name == "") {
      setNameError(true);
    }
    if (!email || email == "") {
      setEmailError(true);
    }
    if (!password || password == "") {
      setPasswordError(true);
    }
    if (!mobileNumber || mobileNumber == "") {
      setMobileNumberError(true);
    }

    if (nameError || emailError || passwordError || mobileNumberError) {
      return false;
    }

    const user = {
      name: name,
      email: email,
      password: password,
      mobile_number: mobileNumber,
    };

    let result = await fetch("http://localhost:8080/auth/signup", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });

    result = await result.json();

    console.log(result);
    localStorage.setItem(
      "userData",
      JSON.stringify({
        name: result.data.name,
        id: result.data._id,
        token: result.token,
      })
    );

    setName("");
    setEmail("");
    setPassword("");
    setMobileNumber("");

    navigate("/");
  };

  return (
    <div className="vh-100" style={{ backgroundColor: "#eee" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-lg-12 col-xl-11">
            <div className="card text-black" style={{ borderRadius: "25px" }}>
              <div className="card-body p-md-5">
                <div className="row justify-content-center">
                  <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                      Sign up
                    </p>

                    <form className="mx-1 mx-md-4">
                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="text"
                            id="form3Example1c"
                            className="form-control"
                            value={name}
                            placeholder="Enter Name"
                            onChange={(value) => {
                              setName(value.target.value);
                            }}
                          />
                          {/* <label
                            className="form-label"
                            htmlFor="form3Example1c"
                            style={
                              nameError ? { color: "red" } : { color: "black" }
                            }
                          >
                            {nameError ? "Please Enter Name" : "Your Name"}
                          </label> */}
                          {nameError && (
                            <label
                              className="form-label"
                              htmlFor="form3Example1c"
                              style={{ color: "red" }}
                            >
                              "Please Enter Name"
                            </label>
                          )}
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="email"
                            id="form3Example3c"
                            className="form-control"
                            value={email}
                            onChange={(value) => {
                              setEmail(value.target.value);
                            }}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example3c"
                          >
                            Your Email
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="password"
                            id="form3Example4c"
                            className="form-control"
                            value={password}
                            onChange={(value) => {
                              setPassword(value.target.value);
                            }}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example4c"
                          >
                            Password
                          </label>
                        </div>
                      </div>

                      <div className="d-flex flex-row align-items-center mb-4">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                        <div className="form-outline flex-fill mb-0">
                          <input
                            type="number"
                            id="form3Example4cd"
                            className="form-control"
                            value={mobileNumber}
                            onChange={(value) => {
                              setMobileNumber(value.target.value);
                            }}
                          />
                          <label
                            className="form-label"
                            htmlFor="form3Example4cd"
                          >
                            Mobile Number
                          </label>
                        </div>
                      </div>

                      <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                        <button
                          type="button"
                          onClick={() => {
                            signupUser();
                          }}
                          className="btn btn-primary btn-lg"
                        >
                          Register
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                      className="img-fluid"
                      alt="Sample image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Signup;
