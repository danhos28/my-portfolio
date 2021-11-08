import emailjs from 'emailjs-com';

const Footer = () => {
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_47rrnzo',
        'template_slwpqsb',
        e.target,
        'user_uHz0OqI0w0Wv8q0Bd5t20',
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        },
      );
    e.target.reset();
  };

  return (
    <div
      id="contact"
      className="w-full bg-light dark:bg-dark py-8 font-body flex flex-col gap-12 items-center px-4"
    >
      <h1 className="text-2xl sm:text-3xl font-bold text-dark dark:text-white">
        Contact Me
      </h1>
      <form
        onSubmit={sendEmail}
        className="flex justify-center flex-col gap-4 w-full sm:w-1/3"
      >
        <div className="flex flex-row gap-4">
          <input type="text" name="name" placeholder="Name" className="input" />
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
          className="h-12 bg-darkTwo dark:bg-primary text-white"
        />
      </form>
    </div>
  );
};

export default Footer;
