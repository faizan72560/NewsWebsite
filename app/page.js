"use client";
import Image from "next/image";
// import Login from "./Mycomponents/Login";
import dynamic from "next/dynamic";

// Dynamically import the Signup component
// const Signup = dynamic(() => import("./Signup"), { ssr: false });
// const Login = dynamic(() => import("./Login"), { ssr: false });
const _Home = dynamic(() => import("./Home"), { ssr: false });

export default function Home() {
  return (
    <>
      <_Home />
    </>
  );
}
