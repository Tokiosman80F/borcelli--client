import Food1 from "../assets/food-1.jpg";
import Food2 from "../assets/food-2.jpg";
import Food3 from "../assets/food-3.jpg";
import Food4 from "../assets/food-4.jpg";
import Food5 from "../assets/food-5.jpg";
const RecipeCategory = () => {
  const foods = [
    { image: Food1, text: "Appetizer", id: 1 },
    { image: Food2, text: "Beef", id: 2 },
    { image: Food3, text: "Chicken", id: 3 },
    { image: Food4, text: "Vegetarian", id: 4 },
    { image: Food5, text: "Dessert", id: 5 },
  ];
  return (
    <div className="text-center px-52 py-10 border border-blue-300 ">
       <h5 className="text-orange-500">Choose Your Category</h5>
       <h1 className="text-5xl font-bold">Recipe Categories</h1>
       <div className="flex justify-between items-center gap-10 mt-16">
        {
            foods.map(item=><div key={item.id} className="">
                <img src={item.image} alt="" className="hover:ease-in duration-100 hover:rotate-12 w-40 h-40 rounded-full" />
                <p className="text-2xl">{item.text}</p>
            </div>)
        }
       </div>
    </div>
  );
};

export default RecipeCategory;
