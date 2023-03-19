import React, { createContext, useState } from "react";

const todaysMeals = [
  { id: 1, name: "Baked Beans", ticked: false },
  { id: 2, name: "Baked Sweet Potatoes", ticked: false },
  { id: 3, name: "Baked Potatoes", ticked: false },
];

export const MealsContext = createContext();

const MealsProvider = ({ children }) => {
  const [meals, setMeals] = useState(todaysMeals);

  const tickMeal = (id) => {
    const updatedMeals = meals.map((meal) =>
      meal.id === id ? { ...meal, ticked: !meal.ticked } : meal
    );
    setMeals(updatedMeals);
  };

  return (
    <MealsContext.Provider value={{ meals, tickMeal }}>
      {children}
    </MealsContext.Provider>
  );
};

export default MealsProvider;
