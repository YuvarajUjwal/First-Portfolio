import React, { useRef,useContext } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
//import {DarkModeContext} from './Context'

const FormComponent = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = () => {
    if (
      Object.keys(errors).length === 0 &&
      validations.fname !== "" &&
      validations.lname !== "" &&
      validations.email !== "" &&
      validations.message !== ""
    ) {
      emailjs
        .sendForm(
          import.meta.env.VITE_SERVICE_ID,
          import.meta.env.VITE_TEMPLATE_ID,
          form.current,
          {
            publicKey: import.meta.env.VITE_PUBLIC_KEY
          }
        )
        .then(
          () => {
            toast.success("Message Sent Successfully!");
            form.current.reset();
          },
          (error) => {
            toast.error("Failed to send, try again!");
            form.current.reset();
          }
        );
    } else {
      toast.error("Please fill all the fields");
    }
  };

  const validations = {
    fname: {
      required: "First Name required!",
      minLength: {
        value: 3,
        message: "First Name should be at-least 3 characters!"
      }
    },
    lname: {
      required: "Last Name required!",
      minLength: {
        value: 3,
        message: "Last Name should be at-least 3 characters!"
      }
    },
    email: {
      required: "Email is required!",
      pattern: {
        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
        message: "Email is not valid!"
      }
    },
    message: {
      required: "Message is required!",
      minLength: {
        value: 5,
        message: "Message should be at-least 5 characters!"
      }
    }
  };


  return (
    <div name="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-28">
      <div className="mb-10">
        <h1 className=" text-3xl md:text-4xl uppercase pb-2 font-bold text-center text-[#e9590d]">
          Get In Touch
        </h1>
        <p className=" text-lg md:text-xl text-center text-[#0a192f] italic">
          Reach out to me
        </p>
      </div>

      <form ref={form} onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div>
            <div className="flex flex-col">
              <label className="uppercase text-sm py-2" hidden htmlFor="fname">
                First Name:
              </label>
              <input
                className={`border-2 rounded-lg p-3 flex bg-transparent focus:text-[#0a192f] focus:outline-none focus:border-[#0a192f] valid:text-[#0a192f] placeholder:text-[#0a192f] resize-none ${
                  errors.fname
                    ? "border-[#FF0000] focus:border-[#ff0000]"
                    : "border-[#0a192f]"
                }`}
                type="text"
                id="fname"
                placeholder="First Name"
                autoComplete="on"
                {...register("fname", validations.fname)}
              />
            </div>
            <p className="text-[#FF0000]">
              {" "}
              {errors.fname && (
                <span className="flex gap-1 items-center">
                  {" "}
                  <AiOutlineExclamationCircle /> {errors.fname.message}
                </span>
              )}
            </p>
          </div>
          <div>
            <div className="flex flex-col">
              <label className="uppercase text-sm py-2" hidden htmlFor="lname">
                Last Name:
              </label>
              <input
                className={`border-2 rounded-lg p-3 flex bg-transparent focus:text-[#0a192f] focus:outline-none focus:border-[#0a192f] valid:text-[#0a192f] placeholder:text-[#0a192f] resize-none ${
                  errors.lname
                    ? "border-[#FF0000] focus:border-[#ff0000]"
                    : "border-[#0a192f]"
                }`}
                type="text"
                id="lname"
                placeholder="Last Name"
                autoComplete="on"
                {...register("lname", validations.lname)}
              />
            </div>
            <p className="text-[#FF0000]">
              {" "}
              {errors.lname && (
                <span className="flex gap-1 items-center">
                  {" "}
                  <AiOutlineExclamationCircle /> {errors.lname.message}
                </span>
              )}
            </p>
          </div>
        </div>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2" hidden htmlFor="email">
            Email:
          </label>
          <input
            className={`border-2 rounded-lg p-3 flex bg-transparent focus:text-[#0a192f] focus:outline-none focus:border-[#0a192f] invalid:text-[#0a192f] valid:text-[#0a192f] placeholder:text-[#0a192f]  ${
              errors.email
                ? "border-[#FF0000] focus:border-[#ff0000]"
                : "border-[#0a192f]"
            }`}
            type="email"
            id="email"
            placeholder="Email"
            autoComplete="on"
            {...register("email", validations.email)}
          />
        </div>
        <p className="text-[#FF0000]">
          {" "}
          {errors.email && (
            <span className="flex gap-1 items-center">
              {" "}
              <AiOutlineExclamationCircle /> {errors.email.message}
            </span>
          )}
        </p>
        <div className="flex flex-col py-2">
          <label className="uppercase text-sm py-2" hidden htmlFor="message">
            Message:
          </label>
          <textarea
            className={`border-2 rounded-lg p-3 flex bg-transparent focus:text-[#0a192f] focus:outline-none focus:border-[#0a192f] valid:text-[#0a192f] placeholder:text-[#0a192f] resize-none ${
              errors.message
                ? "border-[#FF0000] focus:border-[#ff0000]"
                : "border-[#0a192f]"
            }`}
            id="message"
            autoComplete="on"
            placeholder="Message"
            rows={8}
            {...register("message", validations.message)}
          ></textarea>
        </div>
        <p className="text-[#FF0000]">
          {" "}
          {errors.message && (
            <span className="flex gap-1 items-center">
              {" "}
              <AiOutlineExclamationCircle /> {errors.message.message}
            </span>
          )}
        </p>

        <button
          className="bg-[#e9590d] border-none text-[#d8d4dc] mt-4  w-full p-4 rounded-md cursor-pointer lg:hover:scale-105 active:scale-110 duration-300"
          type="submit"
        >
          Send Message
        </button>
      </form>
      <ToastContainer theme="colored" position="top-center" autoClose="2000" />
    </div>
  );
};

export default FormComponent;
