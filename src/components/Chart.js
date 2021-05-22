import React from 'react';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryTheme } from 'victory';

function Chart() {

    const data = [
        {date: 1, calories: 2100},
        {date: 2, calories: 1960},
        {date: 3, calories: 2300},
        {date: 4, calories: 2130}
      ];

    return (
        <VictoryChart
        // adding the material theme provided with Victory
        theme={VictoryTheme.material}
        domainPadding={20}
      >
        <VictoryAxis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["5/18/2021", "5/19/2021", "5/19/2021", "5/20/2021"]}
        />
        <VictoryAxis
          dependentAxis
        />
        <VictoryBar
          data={data}
          x="date"
          y="calories"
        />
      </VictoryChart>
    )
}

export default Chart;
