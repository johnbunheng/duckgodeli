import Img1 from '../img/bay3.jpg'
import { AiOutlineDelete } from "react-icons/ai";
const Card2 = ({id,name,price,image}) => {

    return ( 
        <div>
            {/* header */}        
        
                <div className="font mt-5 px-2 flex items-center justify-between">
                    <img src={image} alt="" 
                    className="w-32 rounded-md h-32"/>
                    <div className="text-center space-y-2">
                        <p>{name}</p>
                            <div className="flex gap-5 border rounded-md border-green-500 items-center">
                                <button className="px-2 rounded-md text-green-500 hover:bg-gray-200">+</button>
                                <span>1</span>
                                <button className="px-2 rounded-md text-green-500 hover:bg-gray-200">-</button>
                            </div>
                    </div>
                    <div className="mt-2">
                        <p className="text-green-600">{price} rel</p>
                        <button className="p-2 text-xl text-red-500"><AiOutlineDelete/></button>
                    </div>
                </div>
            <hr className="border-1 w-[80%] m-auto border-green-600 mt-5"/>
        </div>
     );
}
 
export default Card2;