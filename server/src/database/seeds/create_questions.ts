import Knex from 'knex'

export async function seed(knex: Knex) {
  return await knex('questions').insert([
    {
      question: 'Take it easy, John! You need not work so __________.',
      answers: 'hardly, harder, hard, hardest, hardy',
      correct_answer: 'hard',
    },
    {
      question: 'The sun __________ rises in the west.',
      answers: 'always, never, often, sometimes, usually',
      correct_answer: 'never',
    },
    {
      question:
        "Na frase 'Women now become doctors at nearly the same rate as men, but they become physicians, not surgeons', o pronome they refere-se a:",
      answers: 'doctors, physicians, surgeons, men, women',
      correct_answer: 'women',
    },
    {
      question: 'Those two women always help __________.',
      answers: 'other each, each other, one other, other one, another each',
      correct_answer: 'each other',
    },
    {
      question:
        'Eating disorders __________ class, cultural, or gender boundaries. Therefore, they can affect __________.',
      answers:
        "knows no – anyone, know no – someone, know some – nobody, can know – nobody, don't know any – anyone",
      correct_answer: "don't know any – anyone",
    },
    {
      question:
        'My neighbor, __________ is very beautiful, was here this morning.',
      answers: 'which, whose, who, when, what',
      correct_answer: 'who',
    },
    {
      question: 'Why __________ go home now?',
      answers: "aren't we, didn't we, haven't we, don't we, wouldn't we",
      correct_answer: "don't we",
    },
    {
      question:
        'Universities abroad may __________ a more recent result  when the IELTS was taken a long time ago.',
      answers: 'requires, require, to require, requiring, required',
      correct_answer: 'require',
    },
    {
      question:
        "In the sentence, 'You may be wrong, but you may be right', MAY means:",
      answers: 'possibility, permission, ability, deduction, obligation',
      correct_answer: 'possibility',
    },
    {
      question:
        "The clause 'we are now able to fly' can be substituted,  without a change in meaning, by 'we __________ fly now'.",
      answers: 'are going to, ought to, should, could, can',
      correct_answer: 'can',
    },
    {
      question: 'Both Mary and Roger enjoy __________ tennis.',
      answers: 'plays, play, to playing, playing, played',
      correct_answer: 'playing',
    },
    {
      question: 'How long __________ John to get to work?',
      answers: 'does it take, it takes, takes, does he take, he takes',
      correct_answer: 'does it take',
    },
    {
      question:
        "In 'It could be a plane crashing into the World Trade Center', 'could' can be correctly substituted by:",
      answers: 'might, must, had to, shall, ought to',
      correct_answer: 'might',
    },
    {
      question:
        "The word 'can' in 'consumers can start questioning advertising' expresses:",
      answers: 'possibility, probability, permission, intention',
      correct_answer: 'possibility',
    },
    {
      question: "I'd prefer to stay here. That's what I'd __________.",
      answers: 'do, do best, have done, rather do, doing',
      correct_answer: 'rather do',
    },
  ])
}
