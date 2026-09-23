import RestroCard  from "./RestroCard";
// import resListData from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmerui from "./Shimmerui";

const Body = () =>{
   const [resList, setResList] = useState([]);
   const [searchFilteredList, setSearchFilteredList] = useState([]);
   const [searchText, setSearchText] = useState("");
   const [loading, setLoading] = useState(true);

   useEffect(()=>{
    fetchData();
   },[]);
  //  useEffect(() => {
  //   const timer = setTimeout(() => {
  //     fetchData();
  //   }, 100); 
  //   return () => clearTimeout(timer);
  // }, []);

   const fetchData = async ()=>{
    // const data = await fetch(
    //  "https://corsproxy.io?https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
    const swiggyURL =
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null";

    const data = await fetch(
      `https://corsproxy.io/?key=YOUR_API_KEY&url=${encodeURIComponent(
        swiggyURL
      )}`
    );
     const json = await data.json();
    // Slice from index 3 to 9 (slice end is exclusive, so use 10)
    const cardsSubset = json?.data?.cards.slice(3, 10);
    setResList(cardsSubset);
    setSearchFilteredList(cardsSubset);
    console.log(json);
    setLoading(false);
   };
//   const fetchData = async () => {
//   try {
//     const swiggyURL =
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.38430&lng=78.45830&collection=83639&tags=layout_CCS_Biryani&sortBy=&filters=&type=rcv2&offset=0&page_type=null";

//     const data = await fetch(
//       `https://corsproxy.io/?key=YOUR_API_KEY&url=${encodeURIComponent(
//         swiggyURL
//       )}`
//     );

//     const json = await data.json();

//     console.log("API RESPONSE:", json);

//     const cardsSubset = json?.data?.cards?.slice(3) || [];

//     console.log("Restaurant Cards:", cardsSubset);

//     setResList(cardsSubset);
//     setSearchFilteredList(cardsSubset);
//   } catch (error) {
//     console.error("Error fetching data:", error);
//   } finally {
//     setLoading(false);
//   }
// };

  if (loading) {
  return <Shimmerui />;
}
  return( 
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) =>{
            setSearchText(e.target.value);
          }}/>
          <button className="search-Btn" onClick={() => {
            console.log(resList);
            const searchFilteredList = resList.filter((res) => res?.card?.card?.info?.name.toLowerCase().includes(searchText.toLowerCase()));
            setSearchFilteredList(searchFilteredList);
            }}>Search</button>
        </div>
        <button className="filter-btn" onClick={() => 
          {
            const filteredList = resList.filter((res)=> res?.card?.card?.info?.avgRating > 4);
            setResList(filteredList);
          }
          }>Top Rated Restaurants</button>
      </div>
      {searchFilteredList.length === 0 ? <h3>Oops! We couldn’t find any matches. Please refine your search.</h3> : <div className="res-container">
        {
          searchFilteredList.map((restaurant) => (<RestroCard key={restaurant?.card?.card?.info?.id} resData = {restaurant}/>))
        }
      </div>}
      
    </div>
  )
}

export default Body;