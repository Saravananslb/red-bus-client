import React, { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { signInUser, signUpUser, cookie } from "../../apiCall";
import './SignIn.css';

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
//   width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export const SignIn = ({open, setOpen}) => {
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [stage, setStage] = useState('LOGIN');
  const [user, setUser] = useState({
    mobile: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSubmit = () => {
    if (stage === 'REGISTER') {
      signUpUser(user).then(res => {
        if (res && res.data) {
          if (res.data.exists) {
            setError(res.data.error);
            setStage('LOGIN');
          }
        }
      })
    }
    else if (stage === 'LOGIN') {
      signInUser(user).then(res => {
        if (res && res.data) {
          if (res.data && !res.data.error) {
            cookie.set('Authorization', res.data.authToken)
            handleClose();
          }
          else if (res.data && res.data.error) {
            setError(res.data.error);
          }
        }
      })
    }
  }

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style }}>
          <div id="signIn" className="container" >
            <div id="signInView" className="row">
              <div class="signin-image pos-rel col">
                <div class="left-side-html-text">
                  <div>Unlock the</div>
                  <div style={{marginTop: "16px"}}>Smarter Way to Travel</div>
                </div>
                <img src="https://s3.rdbuz.com/Images/webplatform/contextualLogin/desktop-payment-offers.svg" />
              </div>
              <div class="signin-module col" style={{paddingLeft: "50px"}}>
                <div class="login-container" style={{left: "-22px"}}>
                  <div class="social FC DIB">
                    <div class="margin-l-n image-mt-12" id="redbusImage"></div>
                    <div class="new-signin-header m-l-44">
                      Sign in to avail exciting discounts and cashbacks!!
                    </div>
                    <div class="server-error"></div>
                    <div class="mobileInputContainer clearfix contact-box">
                      <div class="phone_select_box clearfix">
                        <ul
                          id="selectedPhCode"
                          data-cntrycode="IND"
                          class="select_input_code"
                        >
                          + 91
                        </ul>
                        <span class="icon icon-down"></span>
                      </div>
                      <div class="country-code-container hide">
                        <div class="country-code-block bg-fff">
                          <div class="search-block-template">
                            <div class="search-block">
                              <span class="search-icon">
                                <span class="icon icon-search"></span>
                              </span>
                              <input
                                type="text"
                                class="cnInp"
                                id="cntryInput"
                                placeholder="Search for country"
                              />
                            </div>
                          </div>
                          
                        </div>
                      </div>
                      <div class="mobileInput clearfix">
                        <input
                          type="number"
                          class="IP"
                          placeholder="Enter your mobile number"
                          id="mobileNoInp"
                          value={user.mobile}
                          onChange={(e) => setUser({...user, mobile: e.target.value})}
                        />
                        
                      </div>
                    </div>
                    <div class="mobileInputContainer clearfix contact-box">
                      
                      <div class="mobileInput clearfix">
                        <input
                          type="password"
                          class="IP"
                          placeholder="Password"
                          id="passwordInp"
                          value={user.password}
                          onChange={(e) => setUser({...user, password: e.target.value})}
                        />
                        
                      </div>
                    </div>
                    <div
                      id="otp-container"
                      class="otpContainer clearfix border-r-3 otp-margin-fix "
                    >
                      <span class="f-w-b" onClick={handleSubmit}>{stage} </span>
                    </div>
                    <span id="otp-progress-loader" class=""></span>
                    <div class="text-social-acc">
                      <span class="or-text">OR, </span>
                      <span style={{cursor: 'pointer'}} onClick={() => setStage( stage === 'LOGIN' ? 'REGISTER' : 'LOGIN')} >{stage === 'LOGIN' ? 'REGISTER' : 'LOGIN'}</span>
                    </div>
                    <div class=" ">
                      <div class="info-social-acc-msg" style={{color: 'red'}}>
                        {error}
                      </div>
                      <div class="signin-screen"></div>

                      <div class="paddingTerms signin-terms">
                        By signing up, you agree to
                        <br />
                        our{" "}
                        <a
                          target="_blank"
                          href="https://www.redbus.in/info/termscondition"
                        >
                          Terms &amp; Conditions
                        </a>{" "}
                        and{" "}
                        <a
                          target="_blank"
                          href="https://www.redbus.in/info/privacypolicy"
                        >
                          Privacy Policy
                        </a>
                      </div>
                    </div>
                  </div>

                  
                </div>
              </div>

              <div class="loader">
                <div class="flipper"></div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
