import { useRef, useState } from "react";

import ChatLine from "../components/chatLine";

export default function () {
  const [chatLines, setChatLines] = useState([]);
  const tempChatLines = useRef([]);

  async function AddChatLine(line, user) {
    let newChatLines = tempChatLines.current.slice();
    newChatLines.push({ line: line, user: user });
    tempChatLines.current = newChatLines;
    UpdateChatLines();

    if (user === "user") {
      let response = await GetBotResponse(line);
      if (response && response.response) {
          await AddChatLine(response.response, "bot");
      }
      else {
          await AddChatLine("We do not understand what you are trying to say. Please enter another query.", "bot");
      }
    }
  }

  async function UpdateChatLines(){
    await setChatLines(tempChatLines.current);
  }

  async function GetBotResponse(line) {
    let response = await fetch("/api/botResponse", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ line: line }),
    });
    let data = await response.json();
    return data;
  }

  return (
    <div>
      {chatLines.map((chatLine, index) => {
        return (
          <ChatLine
            active={false}
            bot={chatLine.user === "bot"}
            line={chatLine.line}
            key={index}
          />
        );
      })}
      <ChatLine
        active={true}
        bot={false}
        AddChatLine={(line, user) => AddChatLine(line, user)}
      />
    </div>
  );
}
