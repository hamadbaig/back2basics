"use client";
import React, { useRef } from "react";
import { useState } from "react";
import Partners from "../component/private/Partners";
import emailjs from "@emailjs/browser";
const Contact = () => {
  const [Name, setName] = useState("");
  const [email, setemail] = useState("");
  const [message, setmessage] = useState("");
  const [phone, setphone] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // const serviceId = "service_6gfazn1";
    // const templateId = "template_dovyfwr";
    // const publicKey = "SvzjE8cl0x69WTzFm";

    const serviceId = "service_3fy09el";

    const templateId = "template_mxaavla";

    const publicKey = "SvzjE8cl0x69WTzFm";

    const formData = {
      from_email: email,
      from_name: Name,
      phone_number: phone,
      message: message,
    };

    emailjs
      .send(serviceId, templateId, formData, publicKey)
      .then((response) => {
        console.log("Email sent successfully !", response);
        setName("");
        setemail("");
        setmessage("");
        setphone("");
      })
      .catch((error) => {
        console.log("Errror sending email", error);
      });
  };

  return (
    <section>
      <div class="relative  bg-gray-300  h-auto ">
        <form
          onSubmit={handleSubmit}
          class="px-6  pt-0  lg:px-8 lg:py-6 text-left"
        >
          <div class="pt-[4rem]">
            <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
              <div>
                <label
                  for="first-name"
                  class="block text-sm font-semibold leading-6 text-gray-600"
                >
                  First name
                </label>
                <div class="mt-2.5">
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={Name}
                    onChange={(e) => setName(e.target.value)}
                    class="block w-full rounded-md border-0 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  for="email"
                  class="block text-sm font-semibold leading-6 text-gray-600"
                >
                  Email
                </label>
                <div class="mt-2.5">
                  <input
                    type="text"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    class="block w-full rounded-md border-0bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="phone-number"
                  class="block text-sm font-semibold leading-6 text-gray-600"
                >
                  Phone number
                </label>
                <div class="mt-2.5">
                  <input
                    type="text"
                    placeholder="Your phone number"
                    value={phone}
                    onChange={(e) => setphone(e.target.value)}
                    class="block w-full rounded-md border-0bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div class="sm:col-span-2">
                <label
                  for="message"
                  class="block text-sm font-semibold leading-6 text-gray-600"
                >
                  Message
                </label>
                <div class="mt-2.5">
                  <input
                    type="text"
                    placeholder="Message"
                    value={message}
                    onChange={(e) => setmessage(e.target.value)}
                    class="block w-full rounded-md border-0 bg-white px-3.5 py-2 text-black shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div class="mt-8 flex justify-end">
              <button
                type="submit"
                class="rounded-md bg-gray-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm  focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-900"
              >
                Send message
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* <Partners /> */}
    </section>
  );
};

export default Contact;
