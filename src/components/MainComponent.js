import React, { useState, useEffect } from 'react';
import Testing2 from './Testing2';
import Result from './Result';

function MainComponent() {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const getNutrients = (res, req) => {
      // calling API here
      const APP_ID = '7b632c32';
      const APP_KEY = '005154710d7c48250feb6e1dbd9bd7d6';
      //fetch
      const result = fetch(
        `https://api.edamam.com/api/nutrition-details?app_id=${APP_ID}&app_key=${APP_KEY}`,
        {
          method: 'POST',
          headers: {
            Accept: 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8',
          },
          mode: 'no-cors',
          body: JSON.stringify({
            // fetched information goes here
            title: { searchTerm },
            ingr: { searchTerm },
            // res:
          }),
        }
          .then(console.log((data) => console.log(data)))
          .catch((err) => console.log('ERROR::' + err))
      );
      console.log(result);
    };
    getNutrients();
  }, [searchTerm]);

  return (
    <div>
      {searchTerm}
      <Testing2 setSearchTerm={setSearchTerm} />
      <Result />
    </div>
  );
}

export default MainComponent;
