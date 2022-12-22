import Link from "next/link";
import PageTemplate from "../../components/pageTemplate";

export default function () {
  return (
    <PageTemplate title="About Us">
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
          <Link
            href="/a51-utsd/about"
            className="navBtn bg-stone-400 text-white"
          >
            About Us
          </Link>
          <Link href="/a51-utsd/archives" className="navBtn">
            Archives
          </Link>
          <Link href="/a51-utsd/login" className="navBtn">
            Log In
          </Link>
        </div>
      </nav>
      <div className="bg-stone-400 px-64 pt-10 flex flex-col flex-grow">
        <h2 className="text-blue-600 font-extrabold text-4xl pb-5">
          WHAT IS A51-UTSD?
        </h2>
        <h4 className="text-blue-600 font-semibold text-2xl pb-3">
          A51 - Unearthly Threat Suppression Division
        </h4>
        <p className="text-black text-lg pb-40">
          To the outside world, we do not exist. Simply a whisper among rumors
          and conspiracies. To those inside these walls, we all understand what
          we do. WE SUPPRESS. We protect the public against the exposure of
          sensitive information and news reports about the existence of extra
          terrestrial beings. We make sure those who have found out do not share
          their findings with the public.
        </p>
        <h2 className="text-blue-600 font-extrabold text-4xl pb-5 text-right">
          WHAT IS IN THE DATA ARCHIVES?
        </h2>
        <h4 className="text-blue-600 font-semibold text-2xl pb-3 text-right">
          Sensitive Information Exposure Warning
        </h4>
        <p className="text-black text-lg text-right">
          In these archives are the documents that detail our various cases and
          how they have been dealt with. These types of documents include:
          Suppression Case Files (Detailed reports of an Officer's actions in a
          given case), Unreleased Toxicology Reports (Documents withheld from
          the public to keep the narrative consistent), and Interrogation
          Transcripts. If any of these documents were released to the public, it
          would mean global catastrophe. Any individuals found guilty of sharing
          these documents will not like what comes next.
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
            href="/a51-utsd/archives"
            className="text-2xl text-blue-600 font-semibold"
          >
            Document Archives
          </Link>
          <Link
            href="/a51-utsd/login"
            className="text-2xl text-blue-600 font-semibold"
          >
            Officer Login Portal
          </Link>
        </div>
        <p className="text-sm text-blue-600 opacity-25 text-center">Find the clues and you may speak to us...</p>
      </footer>
    </PageTemplate>
  );
}
