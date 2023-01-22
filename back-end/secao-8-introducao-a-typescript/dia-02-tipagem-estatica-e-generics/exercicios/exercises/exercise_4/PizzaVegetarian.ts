import Pizza from '../exercise_3/Pizza';
import { Vegetarian } from './PizzaFlavorsTypes';

interface PizzaVegetarian extends Pizza {
    flavor: Vegetarian
}

export default PizzaVegetarian;
