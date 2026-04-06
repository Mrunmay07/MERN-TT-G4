import { useState } from "react";

function SignUp() {
  /*   const [firstName , setFirstName] = useState('')
        const [lastName , setLastName] = useState('')
        const [email , setEmail] = useState('')
        const [password , setPassword] = useState('') */

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    password: "",
    email: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      fName: user.firstName,
      lName: user.lastName,
      password: user.password,
      email: user.email,
    };

    console.log(formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="">FirstName</label>
      <input
        type="text"
        value={user.firstName}
        onChange={handleChange}
        name="firstName"
      />

      <br />

      <label htmlFor="">LastName</label>
      <input
        type="text"
        value={user.lastName}
        onChange={handleChange}
        name="lastName"
      />

      <br />

      <label htmlFor="">Email</label>
      <input
        type="text"
        value={user.email}
        onChange={handleChange}
        name="email"
      />

      <br />

      <label htmlFor="">Password</label>
      <input
        type="text"
        value={user.password}
        onChange={handleChange}
        name="password"
      />

      <br />

      <button>SignUp</button>
    </form>
  );
}

export default SignUp;
