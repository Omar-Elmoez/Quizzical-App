import React from "react";
import Question from "../components/Question";
import { nanoid } from "nanoid";
import {decode} from 'html-entities';
import Validation from '../components/Validation';


export default function Questions() {

    const [startValidaiton, setStartValidation] = React.useState(false);

    function handleValidate() {
        setStartValidation(prevState => !prevState)
    }

    const [tests, setTests] = React.useState([]);

    React.useEffect(() => {
        async function FectchTests() {
            const responde = await fetch('https://opentdb.com/api.php?amount=5&type=multiple');
            const tests = await responde.json();
            setTests(tests.results);
        }
        FectchTests();
    }, [])

    const questions = tests.map(item => {
        const choices = [...item['incorrect_answers']];
        let randomNum = Math.floor(Math.random() * 4);
        choices.splice(randomNum, 0, item['correct_answer']);

        return <Question content={decode(item.question)} key={nanoid()} id={nanoid()} answers={choices} />
    })

    console.log(questions);

    return (
        <main className="min-h-screen bg-Mirage flex justify-center items-center py-2.5">
            <div className="w-[min(90%_,_550px)] rounded-lg bg-slate-50 py-5 relative z-0 overflow-hidden before:content-[''] before:bg-rightShape before:absolute before:w-[127px] before:h-[127px] before:right-0 before:top-0 before:z-[-1] after:content-[''] after:bg-leftShape after:absolute after:w-[65px] after:h-[65px] after:left-0 after:bottom-0 after:z-[-1]">
                {startValidaiton ? <Validation content={questions} /> : questions}
                <button 
                className="font-Inter font-medium text-base text-aliceBlue text-center bg-Twilight w-[195px] py-3 mt-7 block mx-auto rounded-2xl"
                onClick={handleValidate}
                >
                    {startValidaiton ? 'Play Again' : 'Check Answers'}
                </button>
            </div>
        </main>
    )
}