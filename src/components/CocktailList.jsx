import React from "react";
import CocktailCard from "./CokctailCard";
import Wrapper from "../assets/wrappers/CocktailList";
const CocktailList = ({ drinks }) => {
  if (!drinks) {
    return <h4 style={{ textAlign: "center" }}>No matching cocktails found</h4>;
  }
  const formattedDrinks = drinks.map((data) => {
    const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = data;
    return {
      id: idDrink,
      name: strDrink,
      image: strDrinkThumb,
      info: strAlcoholic,
      glass: strGlass,
    };
  });
  return (
    <Wrapper>
      {formattedDrinks.map((item) => {
        return <CocktailCard key={item.id} {...item} />;
        ``;
      })}
    </Wrapper>
  );
};

export default CocktailList;
