import React, { useState } from "react";
import "./App.css";

import InputRequired from "./components/InputRequired/InputRequired";
import Input from "./components/Input/Input";
import Button from "./components/Button/Button";

function App() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dob, setDoB] = useState("");
  const [phone, setPhone] = useState("");
  const [address01, setAddress01] = useState("");
  const [address02, setAddress02] = useState("");
  const [city, setCity] = useState("");
  const [postcode, setPostcode] = useState("");

  // function handleChange(e) {
  //   console.log(e.target.id, e.target.value);
  // }

  function handleSubmit(e) {
    e.preventDefault();
    if (password !== rePassword) {
      alert("Password not match");
    } else {
      alert(`You are registered successfully as ${username}.`);
    }
  }

  function handlePasswordChange(e) {
    const newPassword = e.target.value;
    setPassword(newPassword);

    if (newPassword.length < 8) {
      setPasswordError(
        "Please provide a password of a minimum of 8 characters."
      );
    } else if (!/\d/.test(newPassword)) {
      setPasswordError("Please provide a password with a number");
    } else {
      setPasswordError("");
    }
  }

  console.log("Username", username);
  console.log("Email", email);
  console.log("Password", password);
  console.log("Retype password", rePassword);
  console.log("FirstName", firstName);
  console.log("LastName", lastName);
  console.log("DoB", dob);
  console.log("Phone", phone);
  console.log("Address01", address01);
  console.log("Address02", address02);
  console.log("City", city);
  console.log("Postcode", postcode);

  return (
    <div className="App">
      <h1>Membership Registration Form2</h1>
      <form onSubmit={handleSubmit}>
        <InputRequired
          type="text"
          id="username"
          title="Username: "
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <InputRequired
          type="email"
          id="email"
          title="Email: "
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <InputRequired
          type="password"
          id="password"
          title="Password: "
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={handlePasswordChange}
        />
        <InputRequired
          type="password"
          id="rePassword"
          title="Retype Password: "
          value={rePassword}
          onChange={(e) => setRePassword(e.target.value)}
        />
        <InputRequired
          type="text"
          id="firstName"
          title="First Name: "
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <InputRequired
          type="text"
          id="lastName"
          title="Last Name: "
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <InputRequired
          type="date"
          id="dob"
          title="Birthday: "
          value={dob}
          onChange={(e) => setDoB(e.target.value)}
        />
        <InputRequired
          type="tel"
          id="phone"
          title="Phone Number: "
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <InputRequired
          type="text"
          id="address01"
          title="Address First Line: "
          value={address01}
          onChange={(e) => setAddress01(e.target.value)}
        />
        <Input
          type="text"
          id="address02"
          title="Address Second Line: "
          value={address02}
          onChange={(e) => setAddress02(e.target.value)}
        />
        <InputRequired
          type="text"
          id="city"
          title="City/Town: "
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <InputRequired
          type="text"
          id="postcode"
          title="Postcode: "
          value={postcode}
          onChange={(e) => setPostcode(e.target.value)}
        />
        <Button type="submit" name="Register" />
      </form>
    </div>
  );
}

export default App;
