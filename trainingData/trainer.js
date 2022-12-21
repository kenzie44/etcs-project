import { ConversationContext, NerManager } from 'node-nlp';

import data from './data.json';

const documents = data.documents;
const answers = data.answers;

export default function Trainer() {
    const manager = new NerManager({ languages: ['en'] });
    for (const document of documents) {
        manager.addDocument('en', document[0], document[1]);
    }
    for (const answer of answers) {
        manager.addAnswer('en', answer[0], answer[1]);
    }
}