"use client";

import { db, auth } from "@/config/firebase/config";
import { Button } from "@nextui-org/react";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { onAuthStateChanged } from "firebase/auth";
import {
  getDoc,
  doc,
} from "firebase/firestore";

export default function Home() {
  const [dataDoc, setDataDoc] = useState(null);
  const router = useRouter();
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        assignData();
      } else {
        router.replace(`/login`);
      }
    });
  }, []);

  const assignData = async () => {
    try {
      const docRef = await doc(db, "processedDocuments", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Document data:", docSnap.data());
        setDataDoc(docSnap.data());
      } else {
        console.log("No such document!");
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  const renderData = (data) => {
    if (typeof data === "object" && data !== null && !(data instanceof Date)) {
      return (
        <div className="pl-4">
          {Object.entries(data).map(([key, value], index) => (
            <div key={index}>
              <strong>{key}:</strong> {renderData(value)}
            </div>
          ))}
        </div>
      );
    } else {
      return <span>{data.toString()}</span>;
    }
  };

  return (
    <div className="flex flex-col pt-10 inset-0 w-screen min-h-screen bg-gradient-to-r from-pink-500 to-blue-500 overscroll-x-none">
      {dataDoc ? (
        <div className="p-4 max-w-4xl mx-auto bg-white rounded-lg shadow">
          <h1 className="text-center text-black text-2xl font-bold">
            {dataDoc.title}
          </h1>
          <h2 className="text-center text-black text-lg">
            {new Date(dataDoc.time).toDateString()}
          </h2>
          {Object.entries(dataDoc.data).map(([key, value], index) => (
            <div
              key={index}
              className="flex flex-col mb-2 text-black text-left"
            >
              <strong>{key}:</strong> {renderData(value)}
            </div>
          ))}
          <Button onClick={() => router.replace(`/dashboard/processed`)} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-lg transition-colors duration-300">
            Done
          </Button>
        </div>
      ) : (
        <p className="text-center text-white">Loading data...</p>
      )}
    </div>
  );
}
