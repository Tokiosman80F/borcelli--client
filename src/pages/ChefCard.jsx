import { Link, useLoaderData } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
const ChefCard = () => {
  const data = useLoaderData();
  console.log(data.length);
  return (
    <div className="mt-10 md:px-52">
      {/* header */}
      <div className="text-center pb-12 md:pb-24">
        <p className="text-orange-500">Know Our Chef</p>
        <h1 className="text-3xl md:text-5xl font-bold">Master Chef</h1>
      </div>
      <div className="grid md:grid-cols-3 gap-10 ">
        {data.map((item) => (
         <div key={item.id} className="card md:w-96 bg-base-100 shadow-xl border-2">
         <figure><img src={item.image_url} className="object-contain w-fu" /></figure>
         <div className="card-body">
           <h2 className="card-title">
             {item.name}
             <div className="badge badge-success"><FaStar></FaStar> {item.rating}</div>
           </h2>
           <p>{item.overview}</p>
           <div className="card-actions justify-end">
             <div className="badge badge-outline">No of Recipe :{item.number_of_recipes}</div> 
             <div className="badge badge-outline">Specialty: {item.specialty}</div>
           </div>
         </div>
         <Link to={`/detail/${item.id}`} className="w-full btn bg-orange-400 text-white hover:bg-orange-500 "> view detail</Link>
       </div>
        ))}
      </div>
    </div>
  );
};

export default ChefCard;
