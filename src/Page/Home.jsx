import { useContext, useState } from "react";
import Card from "../components/Card";
import Navbar from "../components/Navbar";
import { Food } from "../food.";
import Categories from "../categories";
import { BiCategory } from "react-icons/bi";
import { dataContext } from "../context/Usercontext";
const Home = () => {
    let{cate,setCate,input} = useContext(dataContext)

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
             <div className="container py-">
            <h1 className="mx-5 sm:mx-0 text-2xl font-Khmer"><span><BiCategory className="inline-block text-4xl text-green-500 mx-2"/></span> ប្រភេទ</h1>
            {!input ? 
            <div className="grid grid-cols-2 justify-items-center my-2 py-5 px-2 gap-4 sm:grid-cols-3 xl:flex justify-between ">
                {
                    Categories.map((item)=>(
                        <div key={item.id}
                        className="w-[150px] sm:w-[180px] h-[150px]  sm:h-[180px] bg-white text-center justify-items-center rounded-md
                        shadow-xl cursor-pointer hover:scale-105 hover:transition-all duration-200
                        hover:bg-yellow-200 group" onClick={()=>fiillter(item.name)}>
                            <div className="mt-[20%] text-[60px] text-center my-2 text-yellow-500 group-hover:scale-125 duration-200">{item.icon}</div>
                            <h1 className="font-poppins font-bold">{item.name}</h1>
                        </div>
                    ))
                }
            </div> :null}
            
        </div>
            <div className="container justify-items-center">
            </div>
            <div  className="container justify-items-center grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {cate.map((item)=>(
                    
                    <Card key={item.id} name={item.food_name} id={item.id} img={item.food_img}
                    price={item.food_price} type={item.food_category}/>
                ))}
            </div>
        </div>
     );
}
 
export default Home;