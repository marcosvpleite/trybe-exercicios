import Pizza from '../exercise_3/Pizza';
import { Common } from './PizzaFlavorsTypes';

interface PizzaCommon extends Pizza {
    flavor: Common
}

export default PizzaCommon;
