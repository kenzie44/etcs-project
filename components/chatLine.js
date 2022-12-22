import { useEffect } from "react";

export default function ChatLine(props) {
  const textColour = props.bot ? "red-500" : "green-500";
  
  function handleChatLineSubmit(e) {
    e.preventDefault();
    props.AddChatLine(e.target[0].value, "user");
    e.target[0].value = "";
  }

  if (props.active) {
    return (
      <div className="w-full h-fit flex flex-row p-5">
        <p className="text-lg text-green-500">&#62;</p>
        <form onSubmit={(e) => handleChatLineSubmit(e)} className="w-full">
          <input
            type="text"
            className="bg-transparent w-full text-green-500 text-lg"
          />
          <button type="submit" className="hidden"></button>
        </form>
      </div>
    );
  } else {
    return (
      <div className="w-full h-12 p-5">
        <p
          className={`bg-transparent w-full  text-lg  text-${textColour} ${
            props.bot ? "text-right" : "text-left"
          }`}
        >
         {props.line}
        </p>
      </div>
    );
  }
}
