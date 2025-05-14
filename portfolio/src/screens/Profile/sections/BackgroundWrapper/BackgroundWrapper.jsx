import React from "react";
import "./style.css";

export const BackgroundWrapper = () => {
  return (
    <div className="background-wrapper">
      <div className="background-2">
        <div className="container-22">
          <div className="div-wrapper-3">
            <div className="text-wrapper-10">Contact</div>
          </div>
        </div>

        <div className="form">
          <div className="label">
            <div className="container-22">
              <div className="div-wrapper-3">
                <div className="text-wrapper-11">Full Name</div>
              </div>
            </div>

            <div className="overlay">
              <div className="input">
                <div className="container-23">
                  <div className="text-wrapper-12">John Doe</div>
                </div>
              </div>

              <div className="border" />
            </div>
          </div>

          <div className="label-2">
            <div className="container-22">
              <div className="div-wrapper-3">
                <label className="text-wrapper-11" htmlFor="input-1">
                  Email
                </label>
              </div>
            </div>

            <div className="overlay">
              <div className="input">
                <input
                  className="container-24"
                  id="input-1"
                  placeholder="example@gmail.com"
                  type="email"
                />
              </div>

              <div className="border" />
            </div>
          </div>

          <div className="label-2">
            <div className="container-22">
              <div className="div-wrapper-3">
                <div className="text-wrapper-11">Message</div>
              </div>
            </div>

            <div className="textarea-wrapper">
              <div className="textarea">
                <div className="container-25">
                  <div className="text-wrapper-13">Your message...</div>
                </div>
              </div>
            </div>
          </div>

          <button className="button-wrapper">
            <button className="button">
              <div className="container-22">
                <div className="container-26">
                  <div className="text-wrapper-14">Submit</div>
                </div>
              </div>
            </button>
          </button>
        </div>
      </div>
    </div>
  );
};
