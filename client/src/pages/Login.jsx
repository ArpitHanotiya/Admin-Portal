import { useState } from "react";

export const Login = () => {

  const [user, setUser] = useState({
    email: "",
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
                alt="someone is trying to do login"
                width="500" 
                height="500" 
              />
            </div>

              <div>
                <div className="registeration-form">
                  <h1 className="main-heading mb-3">login form</h1>
                  <br />

                  <form onSubmit={handleSubmit}>

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
                      Login Now
                    </button>
                  </form>
                </div>
              </div>

            
          </div>
        </div>
      </main>
    </section>
  </>;
};

