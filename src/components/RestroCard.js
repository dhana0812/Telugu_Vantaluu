import { CDN_URL } from "../utils/constants";

const RestroCard = (props) =>{
  const {resData} = props;
  const {cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla: { deliveryTime }} = resData?.card?.card?.info;
  return(
    <div className="res-Card">
    <img className="res-card-img"
    src={CDN_URL + cloudinaryImageId}
   alt={name}/>
      <div className="res-description">
        <h3 className="res-name">{name}</h3>
        <span className="cuisine">{cuisines.join(",")}</span>
        <p>{costForTwo}</p>
        <p>⭐{avgRating} • {deliveryTime} mins</p> 
      </div>
    </div>
  )
}

export default RestroCard;