import React, { useContext } from "react";
import { MealsContext } from "./MealsProvider";

const MealsList = () => {
  const { meals, tickMeal } = useContext(MealsContext);

  const handleTickMeal = (id) => {
    tickMeal(id);
  };

  return (
    <div>
      <h2>Meals:</h2>
      <ul>
        {meals.map((meal) => (
          <li key={meal.id}>
            <input
              type="checkbox"
              checked={meal.ticked}
              onChange={() => handleTickMeal(meal.id)}
            />
            {meal.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MealsList;
