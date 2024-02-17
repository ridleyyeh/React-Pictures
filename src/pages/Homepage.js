import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "../components/Search";
import Picture from "../components/Picture";


const Homepage = () => {
  let [input , setInput] = useState("");
  let [data , setData] = useState(null);
  let [page , setPage] = useState(1);
  let [currentSearch , setCurrentSearch] = useState("");
    const auth = "txcyFpNLb0461F5bgPYiVT5SGhxFNMRgSyWgK6oGsy8Y9o4ErVZcY0zn";
    const initialURL = `https://api.pexels.com/v1/curated?page=1&per_page=15`;
    let searchURL = `https://api.pexels.com/v1/search?query=${input}&per_page=15&page=1`;
    
    const search = async (url) => {
      let result = await axios.get(url, {
        headers: { Authorization: auth },
      });
      setData(result.data.photos);
      setCurrentSearch(input);
    };
      
    
      
    const morePicture = async () =>{
      let newURL ;
      setPage(page+1);
      if(currentSearch === ""){
        newURL=`https://api.pexels.com/v1/curated?page=${page + 1}&per_page=15`;
      } else{
        newURL = `https://api.pexels.com/v1/search?query=${currentSearch}&per_page=15&page=&{page + 1} `;
      }
      let result = await axios.get(newURL , {
        headers: {Authorization: auth},
      });
      setData(data.concat(result.data.photos)) //concat 方法會返回一個新陣列，該陣列包含舊陣列的所有元素以及傳遞給它的所有參數的元素
    };

    useEffect( () => {
      search(initialURL);
    }, [])


  return (
    <div style={{minHeight:"100vh"}}>
       <Search search = { () => {
        search(searchURL);
       }} setInput ={setInput} />
       <div className='pictures'>
        { data && data.map(d => {
          return <Picture data = {d} />
        })}
       </div>
       <div className="morePicture">
        <button onClick={morePicture}>More</button>
       </div>
    </div>
  )
}









export default Homepage;