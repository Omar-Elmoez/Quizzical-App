import React from "react";
import Question from "../components/Question";
import { nanoid } from "nanoid";
import {decode} from 'html-entities';

export default function Questions() {

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

    return (
        <main className="min-h-screen bg-Mirage flex justify-center items-center py-2.5">
            <div className="w-[min(90%_,_550px)] rounded-lg bg-slate-50 py-5 relative z-0 overflow-hidden before:content-[''] before:bg-rightShape before:absolute before:w-[127px] before:h-[127px] before:right-0 before:top-0 before:z-[-1] after:content-[''] after:bg-leftShape after:absolute after:w-[65px] after:h-[65px] after:left-0 after:bottom-0 after:z-[-1]">
                {questions}
            </div>
        </main>
    )
}