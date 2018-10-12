import { ID, guid } from '@datorama/akita';

export interface Sentence {
  content: String;
  id: ID;
}

export function createSentence(params: Partial<Sentence>) {
  return {
    id: guid(),
    content: '',
    ...params,
  } as Sentence;
}
