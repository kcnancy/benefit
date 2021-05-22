/* eslint-disable import/no-anonymous-default-export */

export default function Result(props) {
  console.log(props.foodData.calories);

  //Total Calories
  const totalCalories = props.foodData.calories

  // Total Carbs
  const totalCarbs = props.foodData.totalNutrients.CHOCDF;
  const tCarbs = totalCarbs.quantity.toFixed(2);

  //Total Protein
  const totalProtein = props.foodData.totalNutrients.PROCNT;
  const tProtein = totalProtein.quantity.toFixed(2);




      return(
      <div>
        <p>Calories: {totalCalories}</p>
        <p>{totalCarbs.label}: {tCarbs + totalCarbs.unit}</p>
        <p>{totalProtein.label}: {tProtein + totalProtein.unit}</p>
      </div>
      );
}
