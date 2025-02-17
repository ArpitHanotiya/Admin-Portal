import { useState } from "react";

export const Register = () => {

  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    password: "",
  });

  //handling the input values
  const handleInput = (e) => {
    console.log(e);
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user,
      [name]: value,
    });
  };

  //handling the form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // alert(user);
    console.log(user)
  };


  return <>
    <section>
      <main>
        <div className="section-registeration">
          <div className="container grid grid-two-cols">
            <div className="registeration-image">
              <img 
                src="/image/my_pic.jpg" 
                alt="someone is trying to do registeration"
                width="500" 
                height="500" 
              />

              <div>
                <div className="registeration-form">
                  <h1 className="main-heading mb-3">registeration form</h1>
                  <br />

                  <form onSubmit={handleSubmit}>

                    <div>
                      <label htmlFor="username">username</label>
                      <input 
                      type="text" 
                      name="username"
                      placeholder="username" 
                      id="username"
                      required
                      autoComplete="off"
                      value={user.username}
                      onChange={handleInput}
                      />
                    </div>

                    <div>
                      <label htmlFor="email">email</label>
                      <input 
                      type="email" 
                      name="email"
                      placeholder="enter your email" 
                      id="email"
                      required
                      autoComplete="off"
                      value={user.email}
                      onChange={handleInput}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone">phone</label>
                      <input 
                      type="number" 
                      name="phone"
                      placeholder="phone" 
                      id="phone"
                      required
                      autoComplete="off"
                      value={user.phone}
                      onChange={handleInput}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="password">password</label>
                      <input 
                      type="password" 
                      name="password"
                      placeholder="password" 
                      id="password"
                      required
                      autoComplete="off"
                      value={user.password}
                      onChange={handleInput}
                      />
                    </div>

                    <br />
                    <button type="submit" className="btn btn-submit">
                      Register Now
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </div>
      </main>
    </section>
  </>;
};

