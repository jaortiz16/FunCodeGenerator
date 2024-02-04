"use client";

import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Dashboard() {
  const [user, setUser] = useState({
    email: "",
    username: "",
  });
  const router = useRouter();

  const getProfile = async () => {
    const profile = await axios.get("http://localhost:4000/api/");
    console.log(profile.data);
    setUser(profile.data);
  };

  const logout = async () => {
    try {
      const res = await axios.get("/api/auth/logout");
      console.log(res);
    } catch (error) {
      console.error(error.message);
    }
    router.push("/login");
  };
  return (
    <div>
      {JSON.stringify(user)}
      <button onClick={() => getProfile()}>profile</button>
      <button onClick={() => logout()}>Logout</button>
    </div>
  );
}

export default Dashboard;