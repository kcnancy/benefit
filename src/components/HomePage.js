import React from "react";
import logo from "../img/PLACEHOLDER-linegraph.PNG"
import foodBackground from "../img/berry-background.jpg";

function HomePage() {
    return (
        <div
            style={{
                backgroundImage: `url(${foodBackground})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                height: "60rem"
            }}>
            <section className="w-full flex justify-center items-center">
                <div className="m-10">
                    <div className="px-4">
                        <button className="bg-offwhite hover:bg-turquoise text-darkgray text-2xl font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline" type="button">Log Food <i class="fas fa-plus-circle"></i></button>
                    </div>
                    <h3 className="mt-2 bg-tangerine text-2xl">Placeholder Day Entry</h3>
                    <div className="rounded border">
                        <h2 className="bg-turquoise p-2">Breakfast</h2>
                        <ul className="bg-gray p-3">
                            <li className="border p-3 bg-offwhite">Eggs</li>
                            <li className="border p-3 bg-offwhite">Toast</li>
                        </ul>
                        <h2 className="bg-turquoise p-2">Lunch</h2>
                        <ul className="bg-gray p-3">
                            <li className="border p-3 bg-offwhite">Sandwich</li>
                            <li className="border p-3 bg-offwhite">Chips</li>
                        </ul>
                        <h2 className="bg-turquoise p-2">Dinner</h2>
                        <ul className="bg-gray p-3">
                            <li className="border p-3 bg-offwhite">Salmon</li>
                            <li className="border p-3 bg-offwhite">Rice</li>
                        </ul>
                    </div>
                    <div className="m-2">
                        <h3 className="mt-2 bg-tangerine text-2xl">Placeholder Calorie Chart</h3>
                        <img src={logo} alt="placeholder for real graph" />
                    </div>
                </div>
            </section>
        </div>

    );
}

export default HomePage;
