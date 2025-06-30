import { useContext, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { dataContext } from "../context/Usercontext";
import { Food } from "../food.";
const Navbar = () => {
    let {input,setInput,cate,setCate,showcard,setShowcard} = useContext(dataContext)
    useEffect(()=>{
        let newlist = Food.filter((item)=>item.food_name.includes(input)
    || item.food_name.toLowerCase().includes(input))
        setCate(newlist)
    },[input])
    
    return ( 
        <nav className="container flex justify-between items-center h-[100px]">
            {/* logo */}
            <div className="flex gap-1 text-lg sm:text-2xl mx-2 font-semibold">
                <h1 className=" font-Khmer">ហាង</h1>
                <h1 className=" font-poppins text-yellow-500">Duckgo</h1>
            </div>
            {/* search product */}

            <form action=""
            className="flex items-center"
            onSubmit={(e)=>e.preventDefault()}>
                <FaSearch className="absolute mx-2 text-green-500"/>
                <input type="text" 
                className="font-Khmer text-md w-[150px] sm:w-[300px] xl:w-[500px] px-8 py-2 rounded-md
                outline-none shadow-md hover:w-[200px] focus:w-[200px]
                hover:sm:w-[350px] focus:sm:w-[350px]
                hover:xl:w-[550px] focus:xl:w-[550px] duration-200"
                placeholder="ស្វែងរក" 
                onChange={(e)=>setInput(e.target.value)}
                value={input}/>
            </form>
            {/* product after add to card */}
            <div className=" relative w-12 h-12 mx-2 rounded-md shadow-md bg-white flex justify-center items-center"
            onClick={()=>{
                setShowcard(true)
            }}>
                <span className=" absolute -top-1 right-1 text-green-500">0</span>
                <FaCartShopping className="text-2xl cursor-pointer text-green-500 "/>
            </div>
        </nav>
     );
}
 
export default Navbar;