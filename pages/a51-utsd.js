import Link from "next/link";
import NewsBar from "../components/newsbar";
import PageTemplate from "../components/pageTemplate";

export default function () {
  return (
    <PageTemplate title="Home">
      <nav className="h-100 w-full flex flex-row justify-between bg-blue-600 p-3">
        <div className="flex flex-row">
          <img
            className="h-[100px] w-[100px]"
            src="photos/A51UTSD_logoTP.png"
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
          <Link href="/a51-utsd" className="navBtn bg-stone-400 text-white">
            Home
          </Link>
          <Link href="/a51-utsd/about" className="navBtn">
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
      <div className="bg-stone-400 px-64 py-5 flex flex-col flex-grow">
        <h2 className="text-blue-600 font-extrabold text-4xl pb-5">
          WELCOME TO THE UNEARTHLY THREAT SUPPRESSION DIVISION
        </h2>
        <div className="flex flex-row">
          <img className="rounded-md w-96" src="photos/WeAreWatchingYou.png" />
          <div className="flex flex-col py-1 pl-10">
            <h4 className="text-blue-600 font-semibold text-2xl pb-3">
              A51 - Unearthly Threat Suppression Division Data Archives Access
            </h4>
            <p className="text-black text-md">
              If you are seeing this than you have been granted access to the
              A51-UTSD Records website. This site contains sensitive
              confidential information and must not be distributed or shared to
              any public sites or services. If you share any of the documents in
              our archives or any information about this private government
              division, we know who you are and we will not hesitate to involve
              you in our suppression protocols. If you are a registered officer
              with the division, log in with your official division email
              address and password credentials to be redirected to your case
              files. And remember... we do not exist, we are everywhere, and we
              know everything.
            </p>
            <p className="text-blue-600 text-md">Enjoy your reading!</p>
          </div>
        </div>
        <h4 className="pt-40 text-red-700 font-semibold text-2xl">
          BREAKING NEWS
        </h4>
        <NewsBar></NewsBar>
      </div>
      <footer className="bg-blue-200 h-100 w-full px-64 py-3 flex flex-col mt-auto">
        <div className="flex flex-row justify-between">
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
