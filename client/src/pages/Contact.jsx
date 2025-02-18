import { useState } from "react"

export const Contact = () => {

  const[contact, setContact] = useState({
    username: "",
    email: "",
    message: ""
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // setContact({
    //   ...contact,
    //   [name] : value
    // });

    setContact((prev) => ({
      ...prev,
      [name] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(contact);
  }

  return (
    <>
      <section className="section-contact">  
        <div className="contact-content container">
          <h1 className="main-heading">Contact Us</h1>
        </div>
        {/* contact page main */}
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <img src="/image/my_pic.jpg" alt="we are always ready to help" />
          </div>
          {/* contact form content actual */}
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input 
                type="text" 
                name="username" 
                id="username"
                autoComplete="off"
                value={contact.username}
                onChange={handleInput}
                required 
                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input 
                type="email" 
                name="email" 
                id="email"
                autoComplete="off"
                value={contact.email}
                onChange={handleInput}
                required 
                />
              </div>

              <div>
                <label htmlFor="message">message</label><br />
                <textarea 
                name="message" 
                id="message" 
                autoComplete="off"
                value={contact.message}
                onChange={handleInput}
                required
                cols="30" 
                rows="6"
                ></textarea>
              </div>

              <div>
                <button type="submit">submit</button>
              </div>

            </form>
          </section>
        </div>

        <section className="mb-3">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57203.83396032114!2d75.83890731284389!3d22.728159954051673!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fcad1b410ddb%3A0x96ec4da356240f4!2sIndore%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1739889029128!5m2!1sen!2sin" 
          width="100%" 
          height="450" 
          // style="border:0;" 
          allowfullscreen="" 
          loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>
      </section>
    </>
  )
}