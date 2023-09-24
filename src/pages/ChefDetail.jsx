import { useState } from "react";
import { FaBolt, FaHeart, FaHeartCircleCheck } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";
import { toast } from "react-toastify";

const ChefDetail = () => {
  const data = useLoaderData();
  const { description, image_url, name, specialty, recipes } = data;

  const [liked, setLiked] = useState(false);

  /*------------Functions-----------------*/
  const handleLiked = () => {
    toast.success("Thank you for liking")
    setLiked(true);
  };
  // console.log(description, name, specialty, recipes);
  return (
    <div className="px-52 py-5">
      <h2 className="text-center font-bold text-4xl uppercase text-orange-400 py-10 ">
        Chefs Review
      </h2>
      <div className="card  lg:card-side bg-base-100 shadow-xl">
        <figure className="w-1/2">
          <img src={image_url} alt="Album" className="object-cover h-96" />
        </figure>
        <div className="card-body w-1/2 ">
          <h2 className="text-3xl font-bold ">{name} </h2>
          <p className="text-xl">{description}</p>
          <p className="text-xl flex items-center gap-1">
            <FaBolt className="bg-green-500"></FaBolt> Speciality:
            <span className="text-red-500 font-bold underline">
              {specialty}
            </span>
          </p>
          <div className="card-actions justify-end">
            <button className="btn btn-outline bg-orange-500">
              <p className="text-white">Recommended by:</p>
              <div className="badge"> +99</div>
            </button>
            <button className="btn btn-outline bg-blue-500">
              <p className="text-white">Best Selling Recipe:</p>
              <div className="badge"> {recipes.length}</div>
            </button>
          </div>
        </div>
      </div>

      {/* Best Recipe */}

      <h2 className="text-center font-bold text-4xl uppercase text-orange-400 py-10 mt-10">
        Best Recipes
      </h2>
      <div className="grid grid-cols-2 gap-10 justify-between items-end">
        {recipes.map((recipe, index) => (
          <div
            key={index}
            className="card w-96 bg-base-100 shadow-xl border-2 bottom-1 "
          >
            <figure>
              <img src={recipe.image_url} alt="Shoes" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{recipe.title}</h2>
              <p>{recipe.description}</p>
              <h2 className="card-title">Ingredients</h2>
              <div className="grid grid-cols-2">
                {recipe.ingredients.map((ingredient, index) => (
                  <p key={index}>{`${index + 1}. ${ingredient}`}</p>
                ))}
              </div>
              <div className="card-actions justify-between">
                <button className="btn bg-orange-400 text-white hover:bg-orange-500">
                  Rating {recipe.rating}
                </button>
                <button onClick={handleLiked}  className="btn btn-outline bg-white text-red-500 hover:bg-red-500">
                <FaHeart></FaHeart>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChefDetail;
