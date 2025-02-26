import { useLoaderData, Link, Navigate } from "react-router-dom";
import axios from "axios";
import Wrapper from "../assets/wrappers/CocktailPage";

const cocktailSearchUrl =
  "https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=";

export const load = async ({ params }) => {
  const { id } = params;
  const { data } = await axios.get(`${cocktailSearchUrl}${id}`);
  return { id, data };
};

const Cocktail = () => {
  const { id, data } = useLoaderData();

  if (!data) return <Navigate to="/" />;
  const drinkData = data.drinks[0];
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = drinkData;

  const validIngredients = Object.keys(drinkData);
  const filterIngredients = validIngredients.filter(
    (key) => key.startsWith("strIngredient") && drinkData[key] !== null
  );
  const mapIngredients = filterIngredients.map((key) => drinkData[key]);
  console.log(mapIngredients);

  return (
    <Wrapper>
      <header>
        <Link to="/" className="btn">
          back home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={name} className="img"></img>
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span> {name}
          </p>
          <p>
            <span className="drink-data">category :</span> {category}
          </p>
          <p>
            <span className="drink-data">info :</span> {info}
          </p>
          <p>
            <span className="drink-data">glass :</span> {glass}
          </p>
          <p>
            <span className="drink-data">Ingredients :</span>{" "}
            {mapIngredients.map((item, index) => {
              return (
                <span key={item}>
                  {item}
                  {index < mapIngredients.length - 1 ? "," : ""}
                </span>
              );
            })}
          </p>
          <p>
            <span className="drink-data">instructons :</span> {instructions}
          </p>
        </div>
      </div>
      ;
    </Wrapper>
  );
};

export default Cocktail;
