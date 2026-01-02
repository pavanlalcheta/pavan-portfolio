import { useState } from "react";
import emailjs from "emailjs-com";

const ContactMe = () => {
  const [form, setForm] = useState([
    {
      name: "",
      email: "",
      message: "",
    },
  ]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send("service_c9dzu7k", "template_o36nd8r", form, "AwxOeagzX25bZ4tTC")
      .then(() => {
        alert("Message sent Successfully...!");
        setForm({name: "", email: "", message: "" });
      })
      .catch(() => {
        alert("Something went Wrong!Try Again..");
      });
  };

  return (
    <div className="bg-[#13151b] py-12 px-6">
      <h2 className="text-3xl text-blue-500 font-bold text-center mb-6">Contact Me</h2>
      <div className="max-w-3xl mx-auto bg-[#1a1d25] p-6 rounded-xl">
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="FullName"
            className="w-full bg-transparent border border-gray-600 text-white px-4 py-2 rounded"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full bg-transparent border border-gray-600 text-white px-4 py-2 rounded"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows="6"
            className="w-full bg-transparent border border-gray-600 text-white px-4 py-2 rounded"
          />

          <button className="w-full border border-blue-500 text-blue-500 py-2 rounded hover:bg-blue-500 hover:text-white">
            Send Message
          </button>
            <p className="text-gray-500 text-center">Or Contect  me direactly:
               <br></br> pavanlalcheta203@gmail.com
               <br></br> +918160519203
            </p>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;