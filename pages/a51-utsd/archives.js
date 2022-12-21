import Link from "next/link";
import PageTemplate from "../../components/pageTemplate";

export default function () {
  return (
    <PageTemplate title="Archives">
      <nav className="h-100 w-full flex flex-row justify-between bg-blue-600 p-3">
        <div className="flex flex-row">
          <img
            className="h-[100px] w-[100px]"
            src="../photos/A51UTSD_logoTP.png"
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
          <Link
            href="/a51-utsd/archives"
            className="navBtn bg-stone-400 text-white"
          >
            Archives
          </Link>
          <Link href="/a51-utsd/login" className="navBtn">
            Log In
          </Link>
        </div>
      </nav>
      <div className="bg-stone-400 px-64 pt-10 flex flex-col flex-grow">
        <div className="pb-10 flex flex-col">
          <h2 className="text-blue-600 font-extrabold text-4xl pb-3">
            ETCS Case Files
          </h2>
          <h4 className="text-blue-600 font-semibold text-2xl pb-3">
            Officer [REDACTED]
          </h4>
          <Link
            target="_blank"
            href="/documents/ETCSSuppressionCaseFile.pdf"
            className="text-lg text-blue-600 underline"
          >
            Suppression Case File
          </Link>
          <Link
            target="_blank"
            href="/documents/DarrenMcCrombieInterrogationTranscript.pdf"
            className="text-lg text-blue-600 underline"
          >
            Darren McCrombie Interrogation Transcript
          </Link>
          <Link
            target="_blank"
            href=""
            className="text-lg text-blue-600 underline"
          >
            Mike Ross Interrogation Transcript
          </Link>
          <Link
            target="_blank"
            href=""
            className="text-lg text-blue-600 underline"
          >
            Emily Carlson Unreleased Toxicology Report
          </Link>
          <Link
            target="_blank"
            href=""
            className="text-lg text-blue-600 underline"
          >
            Terry Horn Unreleased Toxicology Report
          </Link>
        </div>
        <div className="pb-10 flex flex-col">
          <h2 className="text-blue-600 font-extrabold text-4xl pb-3">
            Mandela County Case Files
          </h2>
          <h4 className="text-blue-600 font-semibold text-2xl pb-3">
            Officer Thatcher Davis
          </h4>
          <Link
            target="_blank"
            href="https://www.youtube.com/watch?v=C8d12w6pMos"
            className="text-lg text-blue-600 underline"
          >
            Suppression Case Catalogue 1
          </Link>
          <Link
            target="_blank"
            href="https://www.youtube.com/watch?v=XuDMawgx5Mw"
            className="text-lg text-blue-600 underline"
          >
            Suppression Case Catalogue 2
          </Link>
          <Link
            target="_blank"
            href="https://www.youtube.com/watch?v=1jMFrVk2d_I"
            className="text-lg text-blue-600 underline"
          >
            Suppression Case Catalogue 3
          </Link>
          <Link
            target="_blank"
            href="https://www.youtube.com/watch?v=rf-OSO5Wrbk"
            className="text-lg text-blue-600 underline"
          >
            Suppression Case Catalogue 4
          </Link>
        </div>
        <div className="pb-10 flex flex-col">
          <h2 className="text-blue-600 font-extrabold text-4xl pb-3">
            Local 58 Case Files
          </h2>
          <h4 className="text-blue-600 font-semibold text-2xl pb-3">
            Officer Kris Straub
          </h4>
          <Link
            target="_blank"
            href="https://www.youtube.com/watch?v=3c66w6fVqOI"
            className="text-lg text-blue-600 underline"
          >
            U.S. Department For The Preservation Of American Dignity Emergency
            Broadcast Recording
          </Link>
          <Link
            target="_blank"
            href="https://www.youtube.com/watch?v=M75VLQuFPrY"
            className="text-lg text-blue-600 underline"
          >
            Meteorological Event Emergency Broadcast Recording
          </Link>
        </div>
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
            href="/a51-utsd/login"
            className="text-2xl text-blue-600 font-semibold"
          >
            Officer Login Portal
          </Link>
        </div>
        <p className="text-sm text-blue-600 opacity-25 text-center">
          Find the clues and you may speak to us...
        </p>
      </footer>
    </PageTemplate>
  );
}
