import { NextRouter, useRouter } from "next/router";

import Link from "next/link";
import PageTemplate from "../../components/pageTemplate";
import { useRef } from "react";

export default function () {
  const inputText = useRef();
  const inputText2 = useRef();
  const router = useRouter();
  let username = false;

  function onChangeUser(e) {
    inputText.current = e.target.value;

    if (inputText.current == "officerrhodes@a51utsd.gov") {
      username = true;
    }
  }

  function onChangePass(e) {
    inputText2.current = e.target.value;

    if (inputText2.current == "DANA" && username == true) {
      router.push("/ltc");
    }
  }

  function forgotPass(e) {
    document.getElementById("hide").toggleAttribute("hidden", false);
  }

  return (
    <PageTemplate title="Officer Login Portal">
      <nav className="h-100 w-full flex flex-row justify-between bg-blue-600 p-3">
        <div className="flex flex-row">
          <img
            className="h-[100px] w-[100px]"
            src="../photos/A51UTSD/A51UTSD_logoTP.png"
          />
          <div className="flex flex-col">
            <h1 className="font-extrabold text-6xl text-white text-center">
              A51 - UTSD
            </h1>
            <h3 className="text-3xl font-semibold text-white text-center">
              Deflect, Mislead, Lie
            </h3>
          </div>
        </div>
        <div className="flex flex-row space-x-4 justify-right">
          <Link href="/a51-utsd" className="navBtn">
            Home
          </Link>
          <Link href="/a51-utsd/about" className="navBtn">
            About Us
          </Link>
          <Link href="/a51-utsd/archives" className="navBtn">
            Archives
          </Link>
          <Link
            href="/a51-utsd/login"
            className="navBtn bg-stone-400 text-white"
          >
            Log In
          </Link>
        </div>
      </nav>
      <div className="bg-stone-400 px-64 pt-10 flex flex-col flex-grow">
        <h2 className="text-blue-600 font-extrabold text-4xl pb-5">
          Official A51-UTSD Email Address
        </h2>
        <input
          type="text" 
          className="bg-white text-lg rounded-sm text-blue-600"
          onChange={(event) => onChangeUser(event)}
        />
        <h2 className="text-blue-600 font-extrabold text-4xl pt-10 pb-5">
          Password
        </h2>
        <input
          type="text"
          className="bg-white text-lg rounded-sm text-blue-600"
          onChange={(event) => onChangePass(event)}
        />
        <button className="text-blue-600 font-semibold text-2xl underline pt-10"
        onClick={(event) => forgotPass(event)}
        >
          Forgot Password?
        </button>
        <p id="hide" className="text-blue-600 text-xl" hidden="true">
          Your pride and joy. (ALL CAPS)
        </p>
      </div>
      <footer className="bg-blue-200 h-100 w-full px-64 py-3 flex flex-col mt-auto">
        <div className="flex flex-row justify-between">
          <Link
            href="/a51-utsd"
            className="text-2xl text-blue-600 font-semibold"
          >
            A51-UTSD Homepage
          </Link>
          <Link
            href="/a51-utsd/about"
            className="text-2xl text-blue-600 font-semibold"
          >
            What is A51-UTSD?
          </Link>
          <Link
            href="/a51-utsd/archives"
            className="text-2xl text-blue-600 font-semibold"
          >
            Document Archives
          </Link>
        </div>
        <p className="text-sm text-blue-600 opacity-25 text-center">Find the clues and you may speak to us...</p>
      </footer>
    </PageTemplate>
  );
}
