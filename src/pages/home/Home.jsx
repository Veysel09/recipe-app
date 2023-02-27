import axios from "axios";
import React, { useEffect, useState } from "react";

const Home = () => {
  const APP_ID = "09ff1b9e";
  const APP_KEY = "25fc08ec531dc15f110dda2c14d8ca8d";
  const [query, setQuery] = useState("egg");
  const [selectedMeal, setSelectedMeal] = useState("breakfast");
  // const [recipes, setRecipes] = useState([]);
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    const { data } = await axios(url);
    console.log(data);
  };
  useEffect(() => {
    getData();
  }, []);

  return <div>Home</div>;
};

export default Home;

// https://api.edamam.com/search?q=egg&app_id=09ff1b9e&app_key=25fc08ec531dc15f110dda2c14d8ca8d&mealType=breakfast
