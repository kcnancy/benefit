import React, {useState} from 'react';
import foodBackground from '../images/berry-background.jpg';
import Chart from './Chart';
import { Link, useLocation } from 'react-router-dom';

const HomePage = () => {
  const axios = require('axios');
  const APP_ID = '7b632c32';
  const APP_KEY = '005154710d7c48250feb6e1dbd9bd7d6';

  const location = useLocation();
  const [searchState, setSearchState] = useState('');
  const [foodData, setFoodData] = useState();
  console.log(searchState);
  const apiGetLink = `https://api.edamam.com/api/nutrition-data?app_id=${APP_ID}&app_key=${APP_KEY}&ingr=${searchState}`;

  axios
    .get(apiGetLink)
    .then((response) => {
      console.log(response);
      setFoodData(response.data);
    })
    .catch((err) => console.error(err));

  return (
    <div
      className="h-full"
      style={{
        backgroundImage: `url(${foodBackground})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <section className="h-screen w-full flex justify-center">
        <div className="m-10">
          <form>
            <div className="px-4">
              <button
                className="bg-offwhite hover:bg-turquoise text-darkgray text-2xl font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                <Link
                  to="/logfood"
                  className={location.pathname === '/logfood' ? 1 : 0}
                >
                  Log Food <i className="fas fa-plus-circle"></i>
                </Link>
              </button>
            </div>
            <div className="m-2 rounded p-2 bg-tangerine">
              <h3 className="bg-tangerine text-2xl text-center">
                Today's Food Log
              </h3>
              <div className="m-2 rounded border-2">
                <h2 className="bg-turquoise p-2">Meal</h2>
                <ul>
                  <li className="bg-offwhite">
                    <textarea
                      onChange={(event) => setSearchState(event.target.value)}
                      value={searchState}
                      cols="70"
                      rows="1"
                      className="p-3 bg-offwhite"
                      placeholder="1 Egg"
                    ></textarea>
                  </li>
                </ul>
              </div>
            </div>

            <div className="p-2 m-2 rounded bg-tangerine">
              <h3 className="text-2xl text-center rounded-lg">
                This Week's Calorie Consumption
              </h3>
              <div className="bg-offwhite rounded m-2">
                {foodData && <Chart foodData={foodData} />}
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
