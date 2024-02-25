// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

import { Topic } from '.'
// import BrandLogo from '../../assets/images/brand-logo.jpg'
// import Car from '../../assets/images/car.jpg'
// import Dish from '../../assets/images/dish.jpg'
// import Mosque from '../../assets/images/mosque.jpg'
// import Place from '../../assets/images/place.jpg'
// import Reptile from '../../assets/images/reptile.jpg'

export const generalKnowledge: Topic = {
  topic: 'Hackathon',
  level: 'Beginner',
  totalQuestions: 6,
  totalScore: 60,
  totalTime: 60,
  questions: [
    {
      question: 'When and where was the first hackathon organized?',
      // image: Reptile,
      choices: ['2005, Silicon Valley', '1999, Calgary, Canada', '2010, New York City', '2001, London, UK'],
      type: 'MCQs',
      correctAnswers: ['1999, Calgary, Canada'],
      score: 10,
    },
    {
      question: 'Which of the following is a popular hackathon platform?',
      // image: Place,
      choices: ['Facebook', 'LinkedIn', 'Devpost', 'Instagram'],
      type: 'MCQs',
      correctAnswers: ['Devpost'],
      score: 10,
    },
    {
      question: 'What are the primary goals of participating in a hackathon?',
      // image: Dish,
      choices: ['Making money', 'Solving problems, learning new skills, networking', 'Winning prizes', 'Promoting personal projects'],
      type: 'MCQs',
      correctAnswers: ['Solving problems, learning new skills, networking'],
      score: 10,
    },
    {
      question: 'How are hackathon winners typically selected?',
      // image: Car,
      choices: ['Randomly', 'Based on the team with the most members', 'Based on predefined criteria such as creativity, feasibility, and impact', 'Based on the team that finishes first'],
      type: 'MCQs',
      correctAnswers: ['Based on predefined criteria such as creativity, feasibility, and impact'],
      score: 10,
    },
    {
      question: 'When and where was the first hackathon organized?',
      // image: Reptile,
      choices: ['2005, Silicon Valley', '1999, Calgary, Canada', '2010, New York City', '2001, London, UK'],
      type: 'MCQs',
      correctAnswers: ['1999, Calgary, Canada'],
      score: 10,
    },
    {
      question: 'Which of the following is a popular hackathon platform?',
      // image: Place,
      choices: ['Facebook', 'LinkedIn', 'Devpost', 'Instagram'],
      type: 'MCQs',
      correctAnswers: ['Devpost'],
      score: 10,
    },
  ],
}
