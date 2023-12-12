import React, { useRef } from "react";
import { useState } from "react";
import Footer from "./Footer";
import emailjs from 'emailjs-com';

function ContactDetailCard() {
  const [status, setStatus] = useState("Submit");//for handle submit button and form subbmit
  const [input1, setInput1] = useState({ height: "2px", click: false });
  const [input2, setInput2] = useState({ height: "2px", click: false });
  const [input3, setInput3] = useState({ height: "5px", click: false });



  const form = useRef();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    // const { name, email, message } = e.target.elements;
    // let details = {
    //   name: name.value,
    //   email: email.value,
    //   message: message.value,
    // };
    console.log(form.current)
    emailjs.sendForm('service_sl9tq9x', 'template_cxb5tz5', form.current, 'vA0Z4qBeHSM3e6Coo')
    .then((result) => {
      // console.log(result);
      // setStatus("Submit");
      alert("Votre email a été envoyé avec succès");
  }, (error) => {
      alert(error.text);
  });
    // let response = await fetch(
    //   "https://backend-portfolio-ktnbrtimo-1atul0s-projects.vercel.app/contact",
    //   {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json;charset=utf-8",
    //     },
    //     body: JSON.stringify(details),
    //   }
    // );
    // setStatus("Submit");
    // // let result = await response.json();
    // alert(result.status);
  };
  const handleInputClick1 = () => {
    // Increase the height on input click
    setInput1({ click: true, height: "40px" }); // Adjust the desired height
  };
  const handleInputClick2 = () => {
    // Increase the height on input click
    setInput2({ click: true, height: "40px" }); // Adjust the desired height
  };
  const handleInputClick3 = () => {
    // Increase the height on input click
    setInput3({ click: true, height: "80px" }); // Adjust the desired height
  };

  return (
    <section>
      <div className="bg-white dark:bg-black rounded-2xl ">
        <div className="px-7 md:px-14 pt-14  ">
          <div className="flex md:space-x-7 space-x-2">
            <h2 className="text-4xl text-black dark:text-white font-semibold ">Contact</h2>
            <div className=" relative ">
              <hr className="w-20 md:w-52 h-1 bg-red-500  top-1/2 absolute rounded-lg " />
            </div>
          </div>
          <div className="my-5 bg-gray-100 dark:bg-slate-900 rounded-lg p-5 md:px-10  ">

            {/* contact message  */}
            <div className="my-5">
              <p className="text-xl">
                I am eager to know  your{" "}
                <span className="text-xl text-red-500 font-semibold">
                  Thoughts and Ideas !
                </span>
              </p>
            </div>

            {/* contact form  */}
            <form ref={form} onSubmit={handleSubmit} className="space-y-10">
              {/* for name  */}
              <div className="" onClick={handleInputClick1}>
                <label
                  className={"block " + (input1.click ? "text-pink-600" : "")}
                  htmlFor="name"
                >
                  Name*
                </label>
                <input
                  style={{ outline: "none", height: input1.height }}
                  className={"w-11/12  bg-transparent border-b-2"+(input1.click ? " border-b-pink-600" : " border-b-gray-400")}
                  type="text"
                  id="name"
                  name="user_name"
                  required
                />
              </div>

              {/* for email  */}
              <div onClick={handleInputClick2}>
                <label
                  className={"block " + (input2.click ? "text-purple-500" : "")}
                  htmlFor="email"
                >
                  Email*
                </label>
                <input
                  style={{ outline: "none", height: input2.height }}
                  className={"w-11/12  bg-transparent border-b-2"+(input2.click ? " border-b-purple-500" : " border-b-gray-400")}
                  type="email"
                  id="email"
                  name="user_email"
                  required
                />
              </div>

              {/* for text area  */}
              <div onClick={handleInputClick3}>
                <label
                  className={"block " + (input3.click ? "text-green-500" : "")}
                  htmlFor="message"
                >
                  Message*
                </label>
                <textarea
               
                  style={{ outline: "none",height:input3.height}}
                  className={"w-11/12  bg-transparent border-b-2"+(input3.click ? " border-b-green-500" : " border-b-gray-400")}
                  id="message"
                  name="message"
                  required
                />
              </div>
              <button
                type="submit"
                className="py-2 px-5 bg-blue-100 hover:bg-red-600 hover:text-white   rounded-lg border border-black"
              >
                {status}
              </button>
            </form>{" "}
          </div>
        </div>

        <Footer />
      </div>
    </section>
  );
}
export default ContactDetailCard;
