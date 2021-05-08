import axios from 'axios';
// not finished
const findNutrition = {
    findNutrition: function () {
        return axios.post('https://api.edamam.com/api/nutrition-details');
    },
}

export default findNutrition;