
import { MdBorderColor } from "react-icons/md";
const Card = ({id,name,price,type,img}) => {
    return ( 
        <div className="mx-10">
            <div className="sm:w-[250px] w-[320px] my-2 h-[370px] rounded-lg bg-white 
            hover:scale-105 transition-all duration-200 shadow-lg">
                {/* img */}
                <div className="flex justify-center">
                    <img src={img} alt="" 
                    className="w-[94%] h-[235px] object-cover mt-2 rounded-lg hover:scale-105 transition-all duration-200 cursor-pointer"/>
                </div>
                {/* name */}
                <div className="p-2">
                    <h1 className="font-poppins font-semibold text-2xl">
                        {name}
                    </h1>
                </div>
                {/* price */}
                <div className="px-2">
                    <p className="font-poppins text-md text-green-500 font-semibold">តម្លៃ /- {price} Rel</p>
                </div>
                {/* add to card */}
                <div className="flex justify-center py-2">
                    <button className="w-[94%] bg-yellow-200 font-bold rounded-lg p-2 hover:bg-yellow-300"><MdBorderColor className="inline-block -mt-2 mx-2"/>Order Now</button>
                </div>
            </div>
        </div>
     );
}
 
export default Card;