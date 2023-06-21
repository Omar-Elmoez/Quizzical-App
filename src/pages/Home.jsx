import { NavLink } from "react-router-dom"

export default function Home() {
    return (
        <main className="min-h-screen bg-Mirage flex justify-center items-center">
            <div className="w-[min(90%_,_550px)] h-[550px] rounded-lg bg-introImg bg-no-repeat flex flex-col justify-center items-center">
                <h1 className="font-karla font-bold text-3xl text-nileBlue">Quizzical</h1>
                <p className="font-Inter font-normal text-base text-center text-nileBlue mt-2 capitalize">Test your knowledge<br /> and have fun<br /> with our collection of tests.</p>
                <NavLink to={'/Questions'}>
                    <button className="font-Inter font-medium text-base text-aliceBlue text-center bg-Twilight w-[195px] py-3 mt-7 rounded-2xl">Start quiz</button>
                </NavLink>
            </div>
        </main>
    )
}