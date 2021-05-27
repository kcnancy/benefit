
const OnSubmitButton = ({getFoodData}) => {
    

  return (
    <div>
      <button
        className="bg-turquoise hover:bg-offwhite font-bold py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
        type="button"
        onClick={getFoodData}
      >
        Save Food
      </button>
    </div>
  );
}

export default OnSubmitButton;
