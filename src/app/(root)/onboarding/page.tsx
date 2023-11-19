"use client";
import Form from "@/components/Form";
import { useEffect, useState } from "react";
import { UserAuth } from "@/context/AuthContext";
import Spinner from "@/components/Spinner";
import { User } from "firebase/auth";

const Onboarding = () => {
  const userAuth = UserAuth();
  const user = userAuth?.user;
  const googleSignIn = userAuth?.googleSignIn;
  const logOut = userAuth?.logOut;
  const [loading, setLoading] = useState(true);

  const handleSignIn = async () => {
    try {
      await googleSignIn!();
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignOut = async () => {
    try {
      await logOut!();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const checkAuthentication = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuthentication();
  }, [user]);

  return (
    <div className="p-4">
      {loading ? (
        <Spinner />
      ) : user ? (
        // <p>
        //   Welcome, {user.displayName} - you are logged in to the profile page -
        //   a protected route.
        // </p>

        <div className="bg-white">
          <Form />
        </div>
      ) : (
        // <p>You must be logged in to view this page - protected route.</p>
        <ul className="flex">
          <li onClick={handleSignIn} className="p-2 cursor-pointer">
            Login
          </li>
          <li onClick={handleSignIn} className="p-2 cursor-pointer">
            Sign up
          </li>
        </ul>
      )}
    </div>
  );
};

export default Onboarding;
