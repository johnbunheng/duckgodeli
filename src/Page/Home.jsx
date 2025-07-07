import { useContext, useState } from "react";
import Card from "../components/Card";
import { GoX } from "react-icons/go";
import Navbar from "../components/Navbar";
import { Food } from "../food.";
import Categories from "../categories";
import { BiCategory } from "react-icons/bi";
import { dataContext } from "../context/Usercontext";
import Card2 from "../components/Card2";

const Home = () => {
    let{cate,setCate,input,showcard,setShowcard} = useContext(dataContext)
    
    function fiillter( Categories ){
        if (Categories === "ទាំងអស់"){
            setCate(Food)
        }else{
           let newlist = Food.filter((item)=>(item.food_category===Categories))
            setCate(newlist)
        }

    }
    return ( 
        <div className="bg-slate-200">
            <Navbar/>
             <div className="container">
                <h1 className="mx-5 sm:mx-0 text-2xl font-semibold font-poppins text-yellow-500"><span><BiCategory className="inline-block text-4xl text-green-500 mx-2"/></span> Type</h1>
                {!input ? 
                <div className="sm:mx-20 grid grid-cols-2 justify-items-center  my-2 py-5 px-2 gap-4 sm:grid-cols-3 xl:flex">
                    {
                        Categories.map((item)=>(
                            <div key={item.id}
                            className="w-[150px] sm:w-[180px] h-[150px] sm:h-[180px] bg-white text-center flex flex-col items-center rounded-md
                            shadow-xl cursor-pointer hover:scale-105 hover:transition-all duration-200
                            hover:bg-yellow-200 group" onClick={()=>fiillter(item.name)}>
                                <div className="mt-[20%] text-[60px] text-center my-2 text-yellow-500 group-hover:scale-125 duration-200">{item.icon}</div>
                                <h1 className="font-poppins font-bold">{item.name}</h1>
                            </div>
                        ))
                    }
                </div> :null}
            </div>

            <div  className="container justify-items-center grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {cate.map((item)=>(
                    
                    <Card key={item.id} name={item.food_name} id={item.id} img={item.food_img}
                    price={item.food_price} type={item.food_category}/>
                ))}
            </div>  
              {/* order  */}
             <div className={` fixed bg-white top-0 right-0 w-96 h-[500px] rounded-lg shadow-xl duration-300 ${showcard?"translate-x-0":"translate-x-full"}`} >
                   <div className="flex font-poppins justify-between items-center mx-2 my-2">
                        <h1>Order Item</h1>
                        <GoX className="text-2xl font-bold cursor-pointer" onClick={()=>setShowcard(false)}/>
                    </div>
                  <Card2/>     
            </div>
        </div>
     );
}
 
export default Home;