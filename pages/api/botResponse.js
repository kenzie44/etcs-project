import { NlpManager } from "node-nlp";
import data from "./../../trainingData/data.json";

const manager = new NlpManager({ languages: ["en"] });
const documents = data.document;
const answers = data.answer;
console.log(data);
console.log(documents);
console.log(answers);
for (const document of documents) {
  manager.addDocument("en", document[0], document[1]);
}
for (const answer of answers) {
  manager.addAnswer("en", answer[0], answer[1]);
}

manager.train();

async function BotResponse(message) {
  const response = await manager.process("en", message);
  console.log(response);
  return response.answer;
}

const handler = async (req, res) => {
  const message = req.body.line;
  const response = await BotResponse(message);
  return res.status(200).json({ response });
};

export default handler;
