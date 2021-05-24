import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

function Chart(props) {
  console.log(props.foodData);

  //   Total Calories
  // const totalCalories = props.foodData.calories;

  // Total Carbs
  // const totalCarbs = props.foodData.totalNutrients.CHOCDF;
  // const tCarbs = totalCarbs.quantity.toFixed(2);

  //Total Protein
  // const totalProtein = props.foodData.totalNutrients.PROCNT;
  // const tProtein = totalProtein.quantity.toFixed(2);


  const data = [
    { date: '5/19', calories: 2100 },
    { date: '5/20', calories: 1960 },
    { date: '5/21', calories: 2300 },
    { date: '5/22', calories: 2130 },
    { date: '5/23', calories: 2130 },
    { date: '5/24', calories: 2130 }
  ];

  return (
    <VictoryChart
      // adding the material theme provided with Victory
      theme={VictoryTheme.material}
      domainPadding={20}
    >
      <VictoryAxis
        style={{
          grid: { stroke: "none" },
          axis: { stroke: '#404A5E' },
          ticks: { stroke: '#404A5E' }
        }}
      />
      <VictoryAxis
        dependentAxis
        style={{
          grid: { stroke: "none" },
          axis: { stroke: '#404A5E' },
          ticks: { stroke: '#404A5E' }
        }}
      />
      <VictoryBar
        data={data}
        x="date"
        y="calories"
        style={{
          data: {
            fill: '#36D6E7',
          }
        }}
      />
    </VictoryChart>
  )
}

export default Chart;
