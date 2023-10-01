"use client";
import { useForm, FieldErrors } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { cn } from "@/utils/cn";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { gtSuper } from "@/utils/fonts";
// contact schema
const contactSchema = yup.object({
  name: yup.string().required("Please enter your name."),
  email: yup
    .string()
    .email("Please input a valid email")
    .required("Enter your email."),
  message: yup.string().required("Please write your message."),
  isAggreed: yup.boolean().oneOf([true], "You must agree to the terms."),
});
// Button spinner component
function Spinner({ className }) {
  return (
    <div
      className={cn(
        "w-4 h-4 rounded-full animate-spin border-2 border-solid border-primary border-t-transparent",
        className
      )}
    ></div>
  );
}

// Alert component
function Alert({ className, children, error }) {
  return (
    <div
      className={cn(
        "px-4 py-2 rounded-md text-sm font-bold mb-4 text-center",
        error ? "bg-red-100 text-red-800" : "bg-green-100 text-green-800",
        className
      )}
    >
      {children}
    </div>
  );
}
// main component
function ContactFrom() {
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
      isAggreed: false,
    },
    resolver: yupResolver(contactSchema),
  });

  const { reset, handleSubmit, register, formState } = form;
  const { errors } = formState;
  const [contactInfo, setContactInfo] = useState({
    name: "",
    email: "",
    message: "",
    isAggreed: false,
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);
  // handle contact change
  const handleChange = (e) => {
    setContactInfo({
      ...contactInfo,
      [e.target.name]: e.target.value,
    });
  };
  // handle contact
  const handleContactSubmit = async (data) => {
    setIsLoading(true);
    try {
      await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      setIsLoading(false);
      reset();
      setAgreed(false);
      setError(null);
      setIsSuccess(true);
    } catch (error) {
      setIsLoading(false);
      setIsSuccess(false);
      setError(true);
    }
  };

  // remove alert
  useEffect(() => {
    let clearAlert;
    if (error || isSuccess) {
      clearAlert = setTimeout(() => {
        setError(null);
        setIsSuccess(false);
      }, 3000);
    }
    return () => {
      clearTimeout(clearAlert);
    };
  }, [error, isSuccess]);

  const errorStyle = "text-red-500 font-bold text-xs mt-2";
  return (
    <div>
      <div className="container pt-[115px] md:pt-[93px]">
        <div className="max-w-[768px]  mx-auto p-2 sm:p-7 lg:p-[64px] ">
          <h1
            className={cn(
              "text-center text-3xl md:text-[48px]  text-[#fff] font-black md:mt-[99px] leading-normal",
              gtSuper.className,
              "font-[900]"
            )}
          >
            Contact us
          </h1>

          <form
            className="my-[48px]"
            onSubmit={handleSubmit(handleContactSubmit)}
          >
            {isSuccess && <Alert>Successfully Submitted.</Alert>}
            {error && <Alert>Something went wrong!</Alert>}
            <div className="mb-[24px]">
              <label
                htmlFor="name"
                className="block text-[#fff]  leading-[24px] text-[16px] mb-[8px] font-normal"
              >
                Name
              </label>
              <input
                {...register("name")}
                className={cn(
                  "w-full  p-[12px]   leading-tight focus:outline-none border border-transparent focus:shadow-outline",
                  errors.name && "border-red-500"
                )}
                type="text"
                name="name"
                id="name"
              />
              <p className={errorStyle}>{errors.name?.message}</p>
            </div>
            <div className="mb-[24px]">
              <label className="block mb-[8px]  leading-[24px] text-[#fff] text-[16px] font-normal">
                Email
              </label>
              <input
                {...register("email")}
                className={cn(
                  "w-full p-[12px] border border-transparent  leading-tight focus:outline-none focus:shadow-outline",
                  errors.email && "border-red-500"
                )}
                type="email"
                name="email"
                id="email"
              />
              <p className={errorStyle}>{errors.email?.message}</p>
            </div>
            <div className="mb-[24px]">
              <label
                htmlFor="message"
                className="block mb-[8px]  leading-[24px] text-[#fff] text-[16px] font-normal"
              >
                Message
              </label>
              <textarea
                {...register("message")}
                rows="8"
                className={cn(
                  "block  w-full border border-transparent  text-[#505050]   leading-[24px] p-[12px] text-[16px] focus:outline-none focus:shadow-outline",
                  errors.message && "border-red-500"
                )}
                placeholder="Type your message..."
                name="message"
                id="message"
              ></textarea>
              <p className={errorStyle}>{errors.message?.message}</p>
            </div>

            <div className="flex items-center justify-center  mb-[24px]">
              <input
                {...register("isAggreed")}
                id="isAggreed"
                type="checkbox"
                className={cn(
                  "w-[18px] h-[18px] text-blue-600 bg-[#FFF] border-[#FFF] border-[1px] border-solid    focus:ring-2 cursor-pointer ring-2",
                  errors.isAggreed && "ring-2 ring-red-500"
                )}
              />
              <label
                htmlFor="isAggreed"
                className="ml-2  font-normal text-[14px] text-[#fff] cursor-pointer"
                name="agreed"
              >
                I accept the
                <Link
                  href="/#"
                  className="text-blue-600 ml-2 dark:text-blue-500 underline "
                >
                  Terms
                </Link>
              </label>
            </div>

            <div className="flex items-center justify-center">
              <button
                className="bg-[#fff]  text-primary  leading-[24px] font-normal  text-[16px] py-2 px-4  focus:outline-none focus:shadow-outline flex items-center space-x-1"
                type="submit"
              >
                {isLoading ? <Spinner /> : null}
                <span>Submit</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactFrom;
