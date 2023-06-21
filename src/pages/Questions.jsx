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
        <main className="min-h-screen bg-Mirage flex justify-center items-center">
            <div className="w-[min(90%_,_550px)] h-[550px] rounded-lg bg-introImg bg-no-repeat py-5">
                {questions}
            </div>
        </main>
    )
}