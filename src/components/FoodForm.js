import React, {useState} from 'react';
import OnSubmitButton from './OnSubmitButton'
import foodBackground from '../images/yogurt-background.jpg';



function FoodForm() {
  const [searchState, setSearchState] = useState('');



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
      <section className=" w-full flex justify-center items-center">
        <div className="w-full max-w-md m-20">
          <form action="" className="bg-tangerine rounded-lg px-8 py-8 pt-8">
            <h2 className="text-center text-4xl">Log Food</h2>
            <h2 className="text-sm block font-bold pb-2 px-4">Meal</h2>
            <div className="relative inline-flex pb-2 px-4">
              <svg
                className="w-3 h-3 absolute top-0 right-0 m-4 mr-5 pointer-events-none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 412 232"
              >
                <path
                  d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                  fill="#648299"
                  fillRule="nonzero"
                />
              </svg>
              <select className="border border-gray-300 rounded text-gray-600 h-10 pl-3 pr-20 bg-white hover:border-gray-400 focus:outline-none appearance-none">
                <option>Select a Meal</option>
                <option>Breakfast</option>
                <option>Lunch</option>
                <option>Dinner</option>
                <option>Snack</option>
              </select>
            </div>
            <div className="px-4 pb-5">
              <label htmlFor="food" className="text-sm block font-bold pb-2">
                Food
              </label>
              <input
                type="text"
                onChange={(event) => setSearchState(event.target.value)}
                value={searchState}
                name="food"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-darkgray leading-tight focus:outline-none focus:shadow-outline border-gray-300"
                placeholder="1 Toast"
              />
            </div>
            <div className="px-4">
              <OnSubmitButton />
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default FoodForm;
