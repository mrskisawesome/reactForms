import { useState } from "react";
export default function App() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });
  const [passwordError, setPasswordError] = useState("");
  const [show, setShow] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    console.log("Form has been submitted");
    console.log(form);

    if (form.password.length > 6) {
      setForm({
        username: "",
        password: "",
      });
      setPasswordError("");
    } else {
      //moan about password
      setPasswordError("your password isn't long enough");
    }
  }
  //resets form at the end and checks length of password
  function handleHidden(event) {
    event.preventDefault();
    setShow(!show);
  }
  function handleChange(event) {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  }
  //spread ... get contents out of objects ...form means get me all the things in my form
  //the [] is the key
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          name="username"
          onChange={handleChange}
          value={form.username}
          required
        />
        <label>Password</label>
        <input
          type={show ? "text" : "password"}
          name="password"
          onChange={handleChange}
          value={form.password}
          required
        />
        <p>
          <button onClick={handleHidden}>
            {show ? "Hide" : "Show"} Password
          </button>
        </p>
        <p>{passwordError}</p>
        <button>Login</button>
      </form>
    </div>
  );
}
