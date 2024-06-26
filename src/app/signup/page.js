"use client";

import { db, auth } from "@/config/firebase/config";
import { addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import {
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useRouter } from "next/navigation";
import { Link } from "@nextui-org/react";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {}, []);

  const handleSignup = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password).then(
        async (userCredential) => {
          await createUserInFirestore(userCredential.user);
          router.replace(`/dashboard`);
        }
      );
    } catch (error) {
      if (error.message === "Firebase: Error (auth/email-already-exists).") {
        setError("Email account already exists.");
      } else if (error.message === "Firebase: Error (auth/invalid-password).") {
        setError("Password must have at least 6 characters.");
      } else {
        setError("An error occurred. Please try again.");
      }
      setIsModalOpen(true);
    }
  };

  const createUserInFirestore = async (user) => {
    const docData = {
      uid: user.uid,
      email: user.email,
      processedDocsIDs: [],
      username: "empty",
      rawDocsIDs: [],
    };
    try {
      await addDoc(collection(db, "users"), docData);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
    //await setDoc(doc(db, "user"), docData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSignup();
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <main className="flex justify-center inset-0 fixed items-center h-screen bg-gradient-to-r from-[#006e96] to-[#243c5a]">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-slate-900">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <Input
            className="mt-4 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-text caret-blue-500 animate-blink-wide"
            placeholder="Email"
            onKeyDown={handleKeyDown}
            value={email}
            onValueChange={setEmail}
            required
          />
          <Input
            className="mt-4 w-full rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-text caret-blue-500 animate-blink-wide"
            placeholder="Password"
            type="password"
            onKeyDown={handleKeyDown}
            value={password}
            onValueChange={setPassword}
            required
          />
          <Button
            onClick={handleSubmit}
            className="py-2 px-4 mt-4 w-full bg-gray-300 hover:bg-gray-400 text-gray-800 shadow-gray-500/50 font-bold"
          >
            Sign Up
          </Button>
        </form>
        <div className="mt-4 text-center">
          <span className="mr-2 text-slate-900">Already have an account?</span>
          <Link
            href="/login"
            className="text-blue-500 hover:text-blue-700 font-medium"
          >
            Log in
          </Link>
        </div>
      </div>
    </main>
  );
}
