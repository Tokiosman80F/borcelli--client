import { useLoaderData } from "react-router-dom";

const ChefDetail = () => {
  const data = useLoaderData();
  const { description, image_url, name, specialty, recipes } = data;
  console.log(description, name, specialty, recipes);
  return (
    <div className="px-52 py-10">
        <h2 className="text-center text-4xl uppercase text-orange-500 py-5">Chef's Review </h2>
      <div className="card  lg:card-side bg-base-100 shadow-xl">
        <figure className="w-1/2">
          <img src={image_url} alt="Album" className="object-cover h-96" />
        </figure>
        <div className="card-body w-1/2 ">
          <h2 className="text-3xl font-bold ">{name} </h2>
          <p className="text-xl">{description}</p>
          
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
    </div>
  );
};

export default ChefDetail;
