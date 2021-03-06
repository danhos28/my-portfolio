import emailjs from "emailjs-com";

const Footer = () => {
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_47rrnzo",
        "template_slwpqsb",
        e.target,
        "user_uHz0OqI0w0Wv8q0Bd5t20"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div
      id="contact"
      className="w-full bg-waves-footer dark:bg-waves-footer-dark text-white bg-cover bg-center py-12 font-body flex flex-col gap-12 items-center px-4"
    >
      <div className="flex flex-col gap-3">
        <h1 className="text-2xl sm:text-3xl font-bold">Contact Me</h1>
        <p className="text-center text-xl">Get in Touch</p>
      </div>
      <div className="flex w-full sm:w-3/4 gap-2">
        <div className="flex flex-col gap-4 w-[40%] pl-8 bg-red-200">
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <div className="flex flex-col">
              <p className="font-bold">Call Me</p>
              <p>999-999-999</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <div className="flex flex-col">
              <p className="font-bold">Email</p>
              <p>999-999-999</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <div className="flex flex-col">
              <p className="font-bold">Location</p>
              <p>999-999-999</p>
            </div>
          </div>
        </div>
        <form
          onSubmit={sendEmail}
          className="flex justify-center flex-col gap-4 w-full sm:w-[60%]"
        >
          <div className="flex flex-row gap-4">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input"
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="input"
          />

          <textarea
            name="message"
            placeholder="Message"
            className="w-full h-24 p-2 rounded-sm border-2"
          />
          <input
            type="submit"
            value="SEND"
            className="h-12 bg-primary text-white cursor-pointer hover:bg-[#2e00b6] transition-all duration-200"
          />
        </form>
      </div>
      <div className="flex mt-6 gap-4 text-white">
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://github.com/danhos28"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
          >
            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path>
          </svg>
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.linkedin.com/in/danielhosea/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            stroke="currentColor"
          >
            <path d="M19 0H5a5 5 0 00-5 5v14a5 5 0 005 5h14a5 5 0 005-5V5a5 5 0 00-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z"></path>
          </svg>
        </a>
        <a
          target="_blank"
          rel="noreferrer noopener"
          href="https://www.linkedin.com/in/danielhosea/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-10 h-11"
            viewBox="0 4 24 24"
            fill="currentColor"
            stroke="currentColor"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Footer;
