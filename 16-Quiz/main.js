const quizData = [
    {
        question: 'What\'s your favourite idea',
        a: 'Mine is being creative',
        b: 'I like to think about new kinds of cutlery',
        c: 'Throwing your toys on the floor',
        d: 'Being a big scary dog, grrr',
        correct: 'a'
    }, {
        question: 'How did you get that idea?',
        a: 'I have a small book of ideas I sometimes read',
        b: 'I don\'t, I\'m not creative',
        c: 'I just try thinking creatively',
        d: 'I steal ideas from small-time Youtubers',
        correct: 'c'
    }, {
        question: 'Take a look at my hair!',
        a: 'You don\'t have much hair',
        b: 'It\'s nice',
        c: 'No',
        d: 'Wow!',
        correct: 'd'
    }, {
        question: 'I use my hair to express myself',
        a: 'Me too!',
        b: 'That sounds really boring',
        c: 'I just use mine to keep my head warm',
        d: 'Wow!',
        correct: 'b'
    }
  ];

const quiz = document.getElementById('quiz');
const answerEl = document.querySelectorAll('.answer');
const questionEl = document.querySelector('#question');

const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');

let currentQuiz = 0;
let score = 0;

loadQuiz ();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

}

function deselectAnswers() {
    answerEl.forEach(answerEl => answerEl.checked = false);
}

function getSelected() {
    let answer;

    answerEl.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click', () => {
  const answer = getSelected();

  if (answer === quizData[currentQuiz].correct) {
      score++;
  }

  if (currentQuiz < quizData.length - 1) {
      currentQuiz++;
      loadQuiz();
  } else {
      quiz.innerHTML = `<h2>You are creativeto a value of ${score}/${quizData.length}. Nice!</h2>
      <button class "btn green" onclick="location.reload()">Take the quiz again?</button>`;
  }
});
