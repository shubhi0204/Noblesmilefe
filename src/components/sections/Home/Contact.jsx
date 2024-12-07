import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ed2d0ca1-6cfd-475d-8b29-29e1edb547c6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="container mx-auto w-full">
      <form onSubmit={onSubmit}>
        <div className="mb-10">
          <input
            type="text"
            name="name"
            required
            className="border-b-2 border-stone-400 appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none text-xl placeholder:text-xl"
            placeholder="Name"
          />
        </div>
        <div className="mb-10">
          <input
            type="email"
            name="email"
            required
            className="border-b-2 border-stone-400 appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none text-xl placeholder:text-xl"
            placeholder="Email"
          />
        </div>
        <div className="mb-10">
          <input
            type="text"
            name="company"
            className="border-b-2 border-stone-400 appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none text-xl placeholder:text-xl"
            placeholder="Company"
          />
        </div>
        <div className="mb-10">
          <textarea
            name="message"
            required
            rows="2"
            className="border-b-2 border-stone-400 appearance-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none text-xl placeholder:text-xl"
            placeholder="Message"
          ></textarea>
        </div>
        <button type="submit" height={3.2} width={12} className="bg-pink-700 py-3 px-16 text-stone-100 font-semibold rounded-full">
          Send
        </button>
      </form>
      <span className="text-red-500 text-xs italic">{result}</span>
    </div>
  );
};

export default Contact;
