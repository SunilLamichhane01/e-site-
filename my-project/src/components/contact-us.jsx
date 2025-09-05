import React from "react";
import { useForm } from "react-hook-form";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
  };

  return (
    <section className="min-h-screen mt-10">
      {/* Hero Section */}
      <div className="relative w-full h-96">
        <img
          src="./contactbg.jpg"
          alt="bgpic"
          className="w-full h-96 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="mt-2 text-lg">We’d love to hear from you!</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-4xl mx-auto py-12 px-6 grid md:grid-cols-2 gap-8">
        {/* Left Side Info */}
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-3xl font-bold mb-4">Send us a Message</h2>

          <div className="flex items-start space-x-3">
            <FaPhoneAlt className="text-green-600 mt-1" />
            <p className="text-gray-600">
              <span className="font-semibold">Phone:</span> <br /> +999999999
            </p>
          </div>

          <div className="flex items-start space-x-3">
            <FaEnvelope className="text-green-600 mt-1" />
            <p className="text-gray-600">
              <span className="font-semibold">Email:</span> <br />{" "}
              Mailme1@gmail.com
            </p>
          </div>

          <div className="flex items-start space-x-3">
            <FaMapMarkerAlt className="text-green-600 mt-1" />
            <p className="text-gray-600">
              <span className="font-semibold">Address:</span> <br /> 2972
              Gaindakot, Chitwan
            </p>
          </div>
        </div>

        {/* Form */}
        <form
          className="space-y-4 bg-gray-100 p-6 rounded-2xl shadow-lg"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              {...register("name", { required: "Name is required" })}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Invalid email format",
                },
              })}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              rows="4"
              placeholder="Write your message..."
              {...register("message", { required: "Message is required" })}
              className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
            {errors.message && (
              <span className="text-red-500 text-sm">
                {errors.message.message}
              </span>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;
