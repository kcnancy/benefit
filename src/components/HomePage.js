import React, { useState, useEffect } from 'react';
import logo from '../img/PLACEHOLDER-linegraph.PNG';
import foodBackground from '../img/berry-background.jpg';
import Result from './Result';

function HomePage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [string, setString] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(string);
  };

  useEffect(() => {
    const getNutrients = () => {
      // MOVE KEY INTO ENV
      const APP_ID = '7b632c32';
      const APP_KEY = '005154710d7c48250feb6e1dbd9bd7d6';
      //fetch
      const result = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title: 'Example Title',
          ingr: { searchTerm },
        }),
      };
      fetch(
        `https://api.edamam.com/api/nutrition-details?app_id=${APP_ID}&app_key=${APP_KEY}`,
        result
      )
        .then((response) => response.json())
        .then(console.log(result));
    };
    getNutrients();
    console.log(searchTerm);
  }, [searchTerm]);

  return (
    <div
      style={{
        backgroundImage: `url(${foodBackground})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '60rem',
      }}
    >
      <section className="w-full flex justify-center items-center">
        <div className="m-10">
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="px-4">
              <button
                className="bg-offwhite hover:bg-turquoise text-darkgray text-2xl font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
                type="submit"
                onClick={(e) => onSubmit(e)}
              >
                Log Food <i class="fas fa-plus-circle"></i>
              </button>
            </div>
            <h3 className="mt-2 bg-tangerine text-2xl">
              Placeholder Day Entry
            </h3>
            <div className="rounded border">
              <h2 className="bg-turquoise p-2">Breakfast</h2>
              <ul className="bg-gray p-3">
                <li>
                  <textarea
                    onChange={(event) => setString(event.target.value)}
                    value={string}
                    cols="70"
                    rows="1"
                    className="border p-3 bg-offwhite"
                    placeholder="Eggs"
                  ></textarea>
                </li>
                <li>
                  <textarea
                    onChange={(event) => setString(event.target.value)}
                    value={string}
                    cols="70"
                    rows="1"
                    className="border p-3 bg-offwhite"
                    placeholder="Toast"
                  ></textarea>
                </li>
              </ul>
              <h2 className="bg-turquoise p-2">Lunch</h2>
              <ul className="bg-gray p-3">
                <li>
                  <textarea
                    onChange={(event) => setString(event.target.value)}
                    value={string}
                    cols="70"
                    rows="1"
                    className="border p-3 bg-offwhite"
                    placeholder="Sandwich"
                  ></textarea>
                </li>
                <li>
                  <textarea
                    onChange={(event) => setString(event.target.value)}
                    value={string}
                    cols="70"
                    rows="1"
                    className="border p-3 bg-offwhite"
                    placeholder="Chips"
                  ></textarea>
                </li>
              </ul>
              <h2 className="bg-turquoise p-2">Dinner</h2>
              <ul className="bg-gray p-3">
                <li>
                  <textarea
                    onChange={(event) => setString(event.target.value)}
                    value={string}
                    cols="70"
                    rows="1"
                    className="border p-3 bg-offwhite"
                    placeholder="Salmon"
                  ></textarea>
                </li>
                <li>
                  <textarea
                    onChange={(event) => setString(event.target.value)}
                    value={string}
                    cols="70"
                    rows="1"
                    className="border p-3 bg-offwhite"
                    placeholder="Rice"
                  ></textarea>
                </li>
              </ul>
            </div>
            <Result />
            <div className="m-2">
              <h3 className="mt-2 bg-tangerine text-2xl">
                Placeholder Calorie Chart
              </h3>
              <img src={logo} alt="placeholder for real graph" />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
