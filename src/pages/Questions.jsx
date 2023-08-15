import React from "react";
import Question from "../components/Question";
import { nanoid } from "nanoid";
import { decode } from "html-entities";

export default function Questions() {
  const [questions, setQuestions] = React.useState([]);
  const [score, setScore] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);
  const [playAgain, setPlayAgain] = React.useState(false);

  React.useEffect(() => {
    async function FectchTests() {
      const responde = await fetch(
        "https://opentdb.com/api.php?amount=5&type=multiple"
      );
      const tests = await responde.json();

      setQuestions(() => {
        return tests.results.map((item) => {
          const choices = [...item["incorrect_answers"]];
          let randomNum = Math.floor(Math.random() * 4);
          choices.splice(randomNum, 0, item["correct_answer"]);

          return (
            <Question
              content={decode(item.question)}
              key={nanoid()}
              id={nanoid()}
              answers={choices}
              showScore={showScore}
              correctAnswer={item["correct_answer"]}
            />
          );
        });
      });
    }
    FectchTests();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [playAgain]);

  function checkAnswers() {
    // Get Right Answers
    let rAnswers = questions.map((item) => {
      return item.props.correctAnswer;
    });

    // Get User Answers
    const inputs = document.querySelectorAll("input");
    const inputs_array = Array.from(inputs);
    const user_answers = inputs_array
      .map((item) => {
        if (item.checked) {
          return item.value;
        }
      })
      .filter((item) => item !== undefined);

    // Calculate Score
    for (let i = 0; i < rAnswers.length; i++) {
      if (user_answers[i] === rAnswers[i]) {
        console.log(user_answers[i]);
        console.log(rAnswers[i]);
        setScore((presVal) => presVal + 1);
      }
    }
    // Show Results
    setShowScore((prevState) => !prevState);

    // Change Colors Of Answers
    styleAnswers();
  }

  function again() {
    setPlayAgain((prevState) => !prevState);
    setShowScore((prevState) => !prevState);
    setScore(0);
  }

  function styleAnswers() {
    const inputs = document.querySelectorAll("input");
    const inputs_array = Array.from(inputs);

    inputs_array.forEach((item) => {
      item.disabled = true;
      item.style.cursor = 'not-allowed'
    });

    const allLabels = inputs_array.map((item) => item.labels[0]);

    let rAnswers = questions.map((item) => {
      return item.props.correctAnswer;
    });

    const r_labels = inputs_array.filter((item) =>
      rAnswers.includes(item.value)
    );

    const correct_labels = r_labels.map((item) => item.labels[0]);

    const user_answers = inputs_array.filter((item) => item.checked);
    const user_labels = user_answers.map((item) => item.labels[0]);

    for (let i = 0; i < allLabels.length; i++) {

      if (correct_labels.includes(allLabels[i])) {
        allLabels[i].style.backgroundColor = "#94D7A2";
        allLabels[i].style.border = 'none';
      } else if (user_labels.includes(allLabels[i])) {
        allLabels[i].style.opacity = "0.5";
        allLabels[i].style.backgroundColor = "#F8BCBC";
      } else {
        allLabels[i].style.opacity = "0.5";
      }
    }
  }

  return (
    <main className="min-h-screen bg-Mirage flex justify-center items-center py-2.5">
      <div className="w-[min(90%_,_550px)] rounded-lg bg-slate-50 py-5 relative z-0 overflow-hidden before:content-[''] before:bg-rightShape before:absolute before:w-[127px] before:h-[127px] before:right-0 before:top-0 before:z-[-1] after:content-[''] after:bg-leftShape after:absolute after:w-[65px] after:h-[65px] after:left-0 after:bottom-0 after:z-[-1]">
        {questions}
        {showScore && (
          <p className="font-bold font-Inter text-nileBlue text-center mt-2">
            You Scored <span className="text-tomato">{score}</span>/5 Correct
            Answers
          </p>
        )}
        {showScore ? (
          <button
            onClick={again}
            className="font-Inter font-medium text-base text-aliceBlue text-center bg-Twilight w-[195px] py-3 mt-7 block mx-auto rounded-2xl"
          >
            Play Again
          </button>
        ) : (
          <button
            onClick={checkAnswers}
            className="font-Inter font-medium text-base text-aliceBlue text-center bg-Twilight w-[195px] py-3 mt-7 block mx-auto rounded-2xl"
          >
            Check Answers
          </button>
        )}
      </div>
    </main>
  );
}
