import { useState } from "react";
import styles from "./signIn.module.scss";
import { Row, Col, Container } from "react-bootstrap";

type loginState = {
  email: string;
  password: string;
  togglePass: boolean;
  showPass: boolean;
};

export const LoginPage = () => {
  const [login, setLogin] = useState<loginState>({
    email: "",
    password: "",
    showPass: false,
    togglePass: false,
  });
  const [error, setErrors] = useState<any>({
    email: false,
    password: false,
    wholeError: false,
  });

  const handleUserInput = (e: any) => {
    const { name, value } = e.target;
    setLogin((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setErrors({ ...error, email: false, password: false , wholeError: false,});
  };

  const handleToggle = () => {
    setLogin((prevData) => ({
      ...prevData,
      togglePass: !login.togglePass,
    }));
  };

  const handleSubmit = () => {
    try {
      if (login?.email?.trim() === "" && login?.password?.trim() === "") {
        setErrors({ ...error, email: true, password: true });
        return;
      } else if (
        login?.email?.trim() === "" &&
        login?.password?.trim() !== ""
      ) {
        setErrors({ ...error, email: true });
        return;
      } else if (
        login?.email?.trim() !== "" &&
        login?.password?.trim() === ""
      ) {
        setErrors({ ...error, password: true });
        return;
      } else{
        
      }
    } catch (err) {
      console.log(err);
    }
  };

  console.log("login:::", login);
  return (
    <>
      <div className={styles.loginheader}>
        <Col>
          <Container>
            <div className={styles.headerview}>
              <div className={styles.logotext}>Zudu AI</div>
            </div>
          </Container>
        </Col>
      </div>
      <Container fluid className={styles.mainloginscreen}>
        <Row className={styles.logincenter}>
          <Col sm={5}>
            <Row className={`${styles.innersections} ${styles.loginright}`}>
              <Col sm={12}>
                <h4>Log in</h4>
                <div className={styles.loginborder}>
                  <Row>
                    <Col sm={12}>
                      <label>Email</label>
                      <input
                        type="input"
                        value={login.email}
                        className={`${styles.emailinput}`}
                        placeholder="Username"
                        name="email"
                        onChange={handleUserInput}
                        autoFocus={true}
                      />
                      {error.email && (
                        <span
                          className={`${styles.errorText} ${styles.invaliderrorText}`}
                        >
                          {"Enter the Email ID"}
                        </span>
                      )}
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={12}>
                      <label>Password</label>
                      <input
                        className={`${styles.passwordbox}`}
                        value={login.password}
                        type={login.togglePass ? "input" : "password"}
                        placeholder="Password"
                        name="password"
                        onChange={handleUserInput}
                        onKeyDown={(e: any) => {}}
                      />
                      {login.password !== "" && (
                        <span
                          className={styles.loginpass}
                          onClick={handleToggle}
                        >
                          {!login.togglePass ? (
                            <svg
                              width="24px"
                              height="24px"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path
                                  d="M2 2L22 22"
                                  stroke="#000000"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>{" "}
                                <path
                                  d="M6.71277 6.7226C3.66479 8.79527 2 12 2 12C2 12 5.63636 19 12 19C14.0503 19 15.8174 18.2734 17.2711 17.2884M11 5.05822C11.3254 5.02013 11.6588 5 12 5C18.3636 5 22 12 22 12C22 12 21.3082 13.3317 20 14.8335"
                                  stroke="#000000"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>{" "}
                                <path
                                  d="M14 14.2362C13.4692 14.7112 12.7684 15.0001 12 15.0001C10.3431 15.0001 9 13.657 9 12.0001C9 11.1764 9.33193 10.4303 9.86932 9.88818"
                                  stroke="#000000"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>{" "}
                              </g>
                            </svg>
                          ) : (
                            <svg
                              width="32px"
                              height="32px"
                              viewBox="0 0 32 32"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                              <g
                                id="SVGRepo_tracerCarrier"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                              ></g>
                              <g id="SVGRepo_iconCarrier">
                                {" "}
                                <path
                                  d="M1 12C1 12 5 4 12 4C19 4 23 12 23 12"
                                  stroke="#000000"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>{" "}
                                <path
                                  d="M1 12C1 12 5 20 12 20C19 20 23 12 23 12"
                                  stroke="#000000"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></path>{" "}
                                <circle
                                  cx="12"
                                  cy="12"
                                  r="3"
                                  stroke="#000000"
                                  stroke-width="2"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                ></circle>{" "}
                              </g>
                            </svg>
                          )}
                        </span>
                      )}

                      {error.password && (
                        <span
                          className={`${styles.errorText}  ${styles.invaliderrorText}`}
                        >
                          {"Enter the Password "}
                        </span>
                      )}
                    </Col>
                  </Row>

                  <Row>
                    <Col sm={12}>
                      <button
                        onClick={handleSubmit}
                        className={`${styles.btnSignin}`}
                      >
                        Log In
                      </button>
                    </Col>
                  </Row>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
