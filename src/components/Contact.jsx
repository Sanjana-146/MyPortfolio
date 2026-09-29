// import { Send } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="bg-black text-white py-16 px-4">
      {/* Section Header */}
      <div className="flex items-center text-3xl font-bold text-white mb-12 justify-center">
                <div className="flex-grow ml-4 border-t border-purple-600"></div>
                <span className="text-purple-500">&lt;</span>
                <h2 className="mx-2">Contact Me</h2>
                <span className="text-purple-500">&gt;</span>
                <div className="flex-grow  border-t border-purple-600"></div>
            </div>
      <div className="text-center mt-5 mb-10">
        <h3 className="text-3xl font-bold text-fuchsia-500 mt-4">
          Let's collaborate!
        </h3>
        <p className="text-lg text-gray-300 mt-2">
          Have a project idea, an internship or job opportunity, or just want to say hello?
          <br></br>
          I'd love to hear from you!💜
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
        <div className="flex justify-center">
          <img
            src="/contactme.png"
            alt="Contact Illustration"
            className="w-[400px] md:w-[500px]"
          />
        </div>

        {/* Contact Form */}
        <form
          className="bg-zinc-900 p-6 rounded-lg shadow-lg space-y-4"
          onSubmit={(e) => e.preventDefault()}
        >
          <div>
            <label className="block mb-1 text-sm font-semibold">Name</label>
            <input
              type="text"
              placeholder="Enter your Name"
              className="w-full px-4 py-2 rounded bg-black text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold">Email</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              className="w-full px-4 py-2 rounded bg-black text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-semibold">Message</label>
            <textarea
              rows="4"
              placeholder="Enter your Message"
              className="w-full px-4 py-2 rounded bg-black text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
            ></textarea>
          </div>
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-transparent text-white border border-p hover:bg-fuchsia-500 hover:text-black font-semibold py-2 px-6 rounded transition"
          >
            Submit 
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
