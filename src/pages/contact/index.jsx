import React, { useState } from "react";
import "./style.css";
import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
  });

  // watching all input fields
  const firstName = watch("firstName");
  const lastName = watch("lastName");
  const email = watch("email");
  const message = watch("message");
  const check = watch("check");

  // handleSubmit button

  const isValid = firstName && lastName && email && message && check;

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <p>Hi there, contact me to ask me aboout anything you have in mind.</p>
      <form
        onSubmit={handleSubmit((data) => {
          console.log(data);
        })}
      >
        <div className="names">
          {/* FIRST NAME FIELD */}

          <div className="firstName flex">
            <label>First name</label>
            <input
              {...register("firstName", {
                required: "Please enter first name",
                pattern: {
                  value: /[a-zA-Z]+/,
                  message: "please enter only alphabets",
                },
              })}
              className={`${errors.firstName ? "input--err" : ""}`}
              type="text"
              id="first_name"
              placeholder="Enter your first name"
            />
            {errors.firstName && (
              <p className="error">{errors.firstName.message}</p>
            )}
          </div>

          {/* LAST NAME FIELD */}

          <div className="lastName flex">
            <label>Last name</label>
            <input
              {...register("lastName", {
                required: "Please enter last name ",
                pattern: {
                  value: /[a-zA-Z]+/,
                  message: "please enter only alphabets",
                },
              })}
              className={`${errors.lastName ? "input--err" : ""}`}
              type="text"
              id="last_name"
              placeholder="Enter your last name"
            />
            {errors.lastName && (
              <p className="error">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        {/* EMAIL FIELD */}

        <div className="email flex">
          <label>Email</label>
          <input
            {...register("email", {
              required: "Please enter your email address",
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: "Please enter a valid email",
              },
            })}
            className={`${errors.email ? "input--err" : ""}`}
            id="email"
            placeholder="yourname@email.com"
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        {/* TEXT AREA FIELD */}

        <div className="message flex">
          <label>Message</label>
          <textarea
            {...register("message", { required: "Please enter a message" })}
            className={`${errors.message ? "input--err" : ""}`}
            id="message"
            cols="30"
            rows="5"
            placeholder="Send me a message and I'll reply you as soon as possible..."
          ></textarea>
          {errors.message && <p className="error">{errors.message.message}</p>}
        </div>

        {/* CHECKBOX FIELD */}

        <div className="agree">
          <input
            {...register("check", { required: "please check the box " })}
            type="checkbox"
          />
          <p>You agree to providing your data to sito who may contact you.</p>
          {errors.check && <i className="error">{errors.check.message}</i>}
        </div>
        <div className="btn">
          <button disabled={!isValid} className={``} id="btn__submit">
            Send message
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
