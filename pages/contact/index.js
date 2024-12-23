import Circles from "../../components/Circles";
import { BsArrowRight } from "react-icons/bs";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [value, setValue] = useState("");
  const form = useRef();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSuccess(true);
          form.current.reset();
        },
        (error) => {
          setError(true);
        }
      );
  };
  return (
    <div className="h-full ">
      <div className="container flex items-center justify-center h-full py-32 mx-auto text-center xl:mt-48 xl:text-left">
        <div className="flex flex-col w-full max-w-[700px] ">
          {/* text */}
          <motion.h2
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-12 text-center h2"
          >
            Let&apos;s <span className="text-accent">connect.</span>
          </motion.h2>
          <motion.form
            onSubmit={sendEmail}
            ref={form}
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-col flex-1 w-full gap-6 mx-auto"
          >
            <div className="flex w-full gap-x-6">
              <input
                onChange={(e) => setValue(e.target.value)}
                name="user_name"
                type="text"
                placeholder="name"
                className="input"
              />
              <input
                onChange={(e) => setValue(e.target.value)}
                name="user_email"
                type="text"
                placeholder="email"
                className="lowercase input"
              />
            </div>
            <input
              onChange={(e) => setValue(e.target.value)}
              type="text"
              placeholder="subject"
              className="normal-case input"
            />
            <textarea
              onChange={(e) => setValue(e.target.value)}
              name="user_message"
              placeholder="message"
              className="normal-case textarea"
            ></textarea>
            <div className="flex-wrap items-center md:flex lg:gap-x-12">
              <button
                onChange={handleChange}
                disabled={value === ""}
                className="border border-white/50 max-w-[170px] w-[170px] mb-4 md:mb-0 justify-center overflow-hidden group hover:border-accent px-8 transition-all duration-300 flex items-center rounded-full btn"
              >
                <span className="group-hover:-translate-x-[40%]  transition-all duration-500">
                  Let&apos;s talk
                </span>
                <BsArrowRight className="translate-x-[50%] opacity-0  group-hover:flex group-hover:translate-x-10  group-hover:opacity-100 transition-all duration-300 absolute text-[22px]" />
              </button>
              {success && (
                <span className="font-medium text-accent">
                  Your message has been sent successfully!
                </span>
              )}
              {error && (
                <span className="font-medium text-red-600">
                  Something went wrong!
                </span>
              )}
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
