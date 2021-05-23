import React from 'react';
import foodBackground from '../images/berry-background.jpg';
import Chart from './Chart';

function HomePage(props) {
  console.log(props.foodData.calories);

  //Total Calories
  const totalCalories = props.foodData.calories;

  // Total Carbs
  const totalCarbs = props.foodData.totalNutrients.CHOCDF;
  const tCarbs = totalCarbs.quantity.toFixed(2);

  //Total Protein
  const totalProtein = props.foodData.totalNutrients.PROCNT;
  const tProtein = totalProtein.quantity.toFixed(2);




  return (
    <div
      style={{
        backgroundImage: `url(${foodBackground})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '80rem',
      }}
    >
      <section className="w-full flex justify-center items-center">
        <div className="m-10">
          <form>
            <div className="px-4">
              <button
                className="bg-offwhite hover:bg-turquoise text-darkgray text-2xl font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Log Food <i className="fas fa-plus-circle"></i>
              </button>
            </div>
            <h3 className="mt-2 bg-tangerine text-2xl">
              Placeholder Day Entry
            </h3>
            <div className="rounded border">
              <h2 className="bg-turquoise p-2">Meal</h2>
              <ul className="bg-gray p-3">
                <li>
                  <textarea
                    cols="70"
                    rows="1"
                    className="border p-3 bg-offwhite"
                    placeholder="1 Egg"
                  ></textarea>
                </li>
              </ul>
            </div>
            <div className="m-2">
              <h3 className="mt-2 bg-tangerine text-2xl">
                Calorie Consumption
              </h3>
              <div className="bg-tangerine">
                <Chart />
              </div>
            </div>
          </form>
        </div>
      </section>
      <p>Calories: {totalCalories}</p>
      <p>
        {totalCarbs.label}: {tCarbs + totalCarbs.unit}
      </p>
      <p>
        {totalProtein.label}: {tProtein + totalProtein.unit}
      </p>
    </div>
  );
}

export default HomePage;
