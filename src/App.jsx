import { useState } from "react";
import axios from "axios";
function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = async (e) => {
    try {
      e.preventDefault();
      console.log(email, password);
      const data = await axios.post("https://testing-cookie.vercel.app/login", {
        email,
        password,
      });

      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={submit}>
      <input
        type="email"
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
      />
      <button type="submit">login</button>
    </form>
  );
}

export default App;
