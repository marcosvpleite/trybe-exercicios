import Pizza from '../exercise_3/Pizza';
import { Sugar } from './PizzaFlavorsTypes';

interface PizzaSugar extends Pizza {
    flavor: Sugar,
    slices: 4
}

export default PizzaSugar;