import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

function Chart(props) {
  console.log(props.foodData);

  //   Total Calories
  const totalCalories = props.foodData.calories;

  // Total Carbs
  const totalCarbs = props.foodData.totalNutrients.CHOCDF;
  const tCarbs = totalCarbs.quantity.toFixed(2);

  //Total Protein
  const totalProtein = props.foodData.totalNutrients.PROCNT;
  const tProtein = totalProtein.quantity.toFixed(2);

  const data = [
    { date: 1, calories: 2100 },
    { date: 2, calories: 1960 },
    { date: 3, calories: 2300 },
    { date: 4, calories: 2130 },
  ];

  return (
    <div>
      <VictoryChart
        // adding the material theme provided with Victory
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        <VictoryAxis
          tickValues={[1, 2, 3, 4]}
          tickFormat={['5/18/2021', '5/19/2021', '5/19/2021', '5/20/2021']}
        />
        <VictoryAxis dependentAxis />
        <VictoryBar data={data} x="date" y="calories" />
      </VictoryChart>
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

export default Chart;
