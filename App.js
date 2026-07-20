import React from "react";
import { createRoot } from "react-dom/client";

/**
 * Header
 * - Logo
 * - Nav
 * Body
 * - Search
 * - Restaurant Container
 *   -- Restaurant Cards
 *      ---Img, Name, Star rating, Cuisine, Delivery Time
 * Footer
 * - Copyright
 * - Links
 * - Address
 * - Contact
 */

const Header = () =>{
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src="https://www.logodesign.net/logo-new/burger-with-fries-on-side-7182ld.png?nwm=1&nws=1&industry=burger-fries&txt_keyword=All"/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}


const RestroCard = (props) =>{
  const {resData} = props;
  console.log(props);
  const {cloudinaryImageId, name, cuisines, costForTwo, avgRating, sla: { deliveryTime }} = resData?.info;
  return(
    <div className="res-Card">
    <img className="res-card-img"
    src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}
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
// const resObj = {
//   "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
//             "info": {
//               "id": "4138",
//               "name": "Grand Hotel",
//               "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/10/11bab9a5-1cd7-4e69-b837-f7ec3150c493_80f7ff85-05a4-4f94-8525-bf9f2713fbce.jpg",
//               "locality": "Banjara Hills",
//               "areaName": "Abids",
//               "costForTwo": "₹300 for two",
//               "cuisines": [
//                 "Biryani",
//                 "Chinese",
//                 "Kebabs",
//                 "Tandoor"
//               ],
//               "avgRating": 4.3,
//               "parentId": "4001",
//               "avgRatingString": "4.3",
//               "totalRatingsString": "362K+",
//               "promoted": true,
//               "adTrackingId": "cid=aac99ccf-438c-4451-b708-03c4d46c7377~p=0~adgrpid=aac99ccf-438c-4451-b708-03c4d46c7377#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=4138~plpr=COLLECTION~eid=8306a551-f861-4221-92fe-bdff963c992c~srvts=1784540289361~collid=83639",
//               "sla": {
//                 "deliveryTime": 29,
//                 "lastMileTravel": 4,
//                 "serviceability": "SERVICEABLE",
//                 "slaString": "25-30 mins",
//                 "lastMileTravelString": "4.0 km",
//                 "iconType": "ICON_TYPE_EMPTY"
//               },
//               "availability": {
//                 "nextCloseTime": "2026-07-21 04:00:00",
//                 "opened": true
//               },
//               "badges": {

//               },
//               "isOpen": true,
//               "type": "F",
//               "badgesV2": {
//                 "entityBadges": {
//                   "textBased": {

//                   },
//                   "imageBased": {

//                   },
//                   "textExtendedBadges": {

//                   }
//                 }
//               },
//               "aggregatedDiscountInfoV3": {
//                 "header": "₹100 OFF",
//                 "subHeader": "ABOVE ₹399",
//                 "discountTag": "FLAT DEAL",
//                 "logoCtx": {
//                   "text": "BENEFITS"
//                 }
//               },
//               "orderabilityCommunication": {
//                 "title": {

//                 },
//                 "subTitle": {

//                 },
//                 "message": {

//                 },
//                 "customIcon": {

//                 },
//                 "commsStyling": {

//                 }
//               },
//               "differentiatedUi": {
//                 "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
//                 "differentiatedUiMediaDetails": {
//                   "mediaType": "ADS_MEDIA_ENUM_IMAGE",
//                   "lottie": {

//                   },
//                   "video": {

//                   }
//                 }
//               },
//               "reviewsSummary": {

//               },
//               "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
//               "restaurantOfferPresentationInfo": {

//               },
//               "externalRatings": {
//                 "aggregatedRating": {
//                   "rating": "4.1",
//                   "ratingCount": "33K+"
//                 },
//                 "source": "GOOGLE",
//                 "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
//               },
//               "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
//               "campaignId": "aac99ccf-438c-4451-b708-03c4d46c7377",
//               "priceComparisonComms": {

//               }
//             },
//             "analytics": {

//             },
//             "cta": {
//               "link": "swiggy://menu?restaurant_id=4138&source=collection&query=Biryani",
//               "text": "RESTAURANT_MENU",
//               "type": "DEEPLINK"
//             },
//             "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
//           };
const resList = [
      {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "4138",
              "name": "Grand Hotel",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/1/10/11bab9a5-1cd7-4e69-b837-f7ec3150c493_80f7ff85-05a4-4f94-8525-bf9f2713fbce.jpg",
              "locality": "Banjara Hills",
              "areaName": "Abids",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "Biryani",
                "Chinese",
                "Kebabs",
                "Tandoor"
              ],
              "avgRating": 4.3,
              "parentId": "4001",
              "avgRatingString": "4.3",
              "totalRatingsString": "362K+",
              "promoted": true,
              "adTrackingId": "cid=aac99ccf-438c-4451-b708-03c4d46c7377~p=0~adgrpid=aac99ccf-438c-4451-b708-03c4d46c7377#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=4138~plpr=COLLECTION~eid=8306a551-f861-4221-92fe-bdff963c992c~srvts=1784540289361~collid=83639",
              "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 4,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "4.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-07-21 04:00:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹399",
                "discountTag": "FLAT DEAL",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.1",
                  "ratingCount": "33K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "aac99ccf-438c-4451-b708-03c4d46c7377",
              "priceComparisonComms": {

              }
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=4138&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "659667",
              "name": "Barbeque Nation",
              "cloudinaryImageId": "8b3a3993448aeba5ee8e6f63be94bb60",
              "locality": "COMMERCIAL CENTRE",
              "areaName": "Attapur",
              "costForTwo": "₹600 for two",
              "cuisines": [
                "North Indian",
                "Barbecue",
                "Kebabs",
                "Biryani",
                "Street Food",
                "Snacks"
              ],
              "avgRating": 3.8,
              "parentId": "2438",
              "avgRatingString": "3.8",
              "totalRatingsString": "1.1K+",
              "sla": {
                "deliveryTime": 52,
                "lastMileTravel": 10.1,
                "serviceability": "SERVICEABLE",
                "slaString": "50-60 mins",
                "lastMileTravelString": "10.1 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-07-20 23:30:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  },
                  "imageBased": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "70% OFF",
                "subHeader": "UPTO ₹130",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "priceComparisonComms": {

              }
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=659667&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "464416",
              "name": "Mehfil",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/24/6f5a3fd0-dc15-4ebe-a5b3-f9a26ec8aaaa_464416.jpg",
              "locality": "Kv Road No 12",
              "areaName": "Banjara Hills",
              "costForTwo": "₹300 for two",
              "cuisines": [
                "Biryani",
                "Chinese",
                "Kebabs",
                "Tandoor"
              ],
              "avgRating": 4.3,
              "parentId": "637",
              "avgRatingString": "4.3",
              "totalRatingsString": "55K+",
              "promoted": true,
              "adTrackingId": "cid=db44b16e-20df-44dd-a1f9-b8d9691db92b~p=2~adgrpid=db44b16e-20df-44dd-a1f9-b8d9691db92b#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=464416~plpr=COLLECTION~eid=c443c74a-170a-491d-979e-eca919c5ab45~srvts=1784540289361~collid=83639",
              "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-07-20 23:59:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "brand_cards/Badges%202026/39_Best%20in%20Biryani2026.png",
                    "description": "Top-rated for Biryani, based on user votes."
                  },
                  {
                    "imageId": "brand_cards/Badges%202026/76_Best%20in%20Shawarma2026.png",
                    "description": "Top-rated for Shawarma, based on user votes."
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "theme": "",
                          "imageId": "brand_cards/Badges%202026/39_Best%20in%20Biryani2026.png",
                          "description": "Top-rated for Biryani, based on user votes."
                        }
                      },
                      {
                        "attributes": {
                          "theme": "",
                          "imageId": "brand_cards/Badges%202026/76_Best%20in%20Shawarma2026.png",
                          "description": "Top-rated for Shawarma, based on user votes."
                        }
                      }
                    ]
                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "₹100 OFF",
                "subHeader": "ABOVE ₹399",
                "discountTag": "FLAT DEAL",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "db44b16e-20df-44dd-a1f9-b8d9691db92b",
              "priceComparisonComms": {

              }
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=464416&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "3324",
              "name": "Srikanya",
              "cloudinaryImageId": "buchh1zmqz5ag5q13mmo",
              "locality": "Somajiguda",
              "areaName": "Panjagutta",
              "costForTwo": "₹250 for two",
              "cuisines": [
                "Biryani",
                "Andhra",
                "South Indian"
              ],
              "avgRating": 4.3,
              "parentId": "7317",
              "avgRatingString": "4.3",
              "totalRatingsString": "94K+",
              "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 6.3,
                "serviceability": "SERVICEABLE",
                "slaString": "35-45 mins",
                "lastMileTravelString": "6.3 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-07-20 15:30:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  },
                  "imageBased": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹95",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.1",
                  "ratingCount": "3.1K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "priceComparisonComms": {

              }
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=3324&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "708089",
              "name": "Hotel Rumaan",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2026/5/18/3d0aca60-c0a9-4b93-a29f-cdb02f015ad3_60749f22-050c-4bc2-b403-6646ae56e496.jpeg",
              "locality": "Charminar",
              "areaName": "Charminar",
              "costForTwo": "₹500 for two",
              "cuisines": [
                "Hyderabadi",
                "Biryani"
              ],
              "avgRating": 4.3,
              "parentId": "9008",
              "avgRatingString": "4.3",
              "totalRatingsString": "6.4K+",
              "promoted": true,
              "adTrackingId": "cid=21563ed5-a1fd-4907-abd5-ab4febd7a2f8~p=6~adgrpid=21563ed5-a1fd-4907-abd5-ab4febd7a2f8#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=708089~plpr=COLLECTION~eid=d5080f85-b038-4d15-a67d-6b3f680e5ded~srvts=1784540289361~collid=83639",
              "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 6,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "6.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-07-20 23:15:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {

                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "70% OFF",
                "subHeader": "UPTO ₹140",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "4.0",
                  "ratingCount": "8.9K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "21563ed5-a1fd-4907-abd5-ab4febd7a2f8",
              "priceComparisonComms": {

              }
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=708089&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "1312299",
              "name": "GharSe - Homestyle & Healthy Tiffins",
              "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2026/3/24/68e57ca1-0ecd-484b-8e25-5839a35567a0_1312299.JPG",
              "locality": "GUDIMAKAPUR",
              "areaName": "Mehdipatnam Circle No 12",
              "costForTwo": "₹200 for two",
              "cuisines": [
                "Biryani",
                "Thalis",
                "Home Food"
              ],
              "avgRating": 4.2,
              "parentId": "663389",
              "avgRatingString": "4.2",
              "totalRatingsString": "107",
              "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 3.9,
                "serviceability": "SERVICEABLE",
                "slaString": "20-30 mins",
                "lastMileTravelString": "3.9 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-07-21 02:00:00",
                "opened": true
              },
              "badges": {
                "imageBadges": [
                  {
                    "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                    "description": "Meals with high protein, low calorie and no added sugar"
                  }
                ]
              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textBased": {

                  },
                  "imageBased": {
                    "badgeObject": [
                      {
                        "attributes": {
                          "theme": "",
                          "imageId": "Health%20Hub/RX%20BADGE/BADGE2.png",
                          "description": "Meals with high protein, low calorie and no added sugar"
                        }
                      }
                    ]
                  },
                  "textExtendedBadges": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "ITEMS",
                "subHeader": "AT ₹119",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "isNewlyOnboarded": true,
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "--"
                }
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "priceComparisonComms": {

              }
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=1312299&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
      {
            "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
            "info": {
              "id": "100942",
              "name": "Lucky Multicuisine Restaurant",
              "cloudinaryImageId": "FOOD_CATALOG/IMAGES/CMS/2025/11/13/6e4fbf54-fd7f-48c0-97ba-f46e27ed5853_c054b482-581f-468f-9800-38402f10fb78.jpg_compressed",
              "locality": "Somajiguda",
              "areaName": "Somajiguda",
              "costForTwo": "₹350 for two",
              "cuisines": [
                "Biryani",
                "Tandoor",
                "South Indian"
              ],
              "avgRating": 3.9,
              "parentId": "18963",
              "avgRatingString": "3.9",
              "totalRatingsString": "77K+",
              "promoted": true,
              "adTrackingId": "cid=beb4b01d-4e1e-4870-a9dd-fb08bd1648a0~p=7~adgrpid=beb4b01d-4e1e-4870-a9dd-fb08bd1648a0#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=100942~plpr=COLLECTION~eid=0f39f24c-0e8a-4c5f-8c58-d34809b51e6c~srvts=1784540289361~collid=83639",
              "sla": {
                "deliveryTime": 42,
                "lastMileTravel": 7,
                "serviceability": "SERVICEABLE",
                "slaString": "40-45 mins",
                "lastMileTravelString": "7.0 km",
                "iconType": "ICON_TYPE_EMPTY"
              },
              "availability": {
                "nextCloseTime": "2026-07-20 23:59:00",
                "opened": true
              },
              "badges": {

              },
              "isOpen": true,
              "type": "F",
              "badgesV2": {
                "entityBadges": {
                  "textExtendedBadges": {

                  },
                  "textBased": {

                  },
                  "imageBased": {

                  }
                }
              },
              "aggregatedDiscountInfoV3": {
                "header": "70% OFF",
                "subHeader": "UPTO ₹140",
                "logoCtx": {
                  "text": "BENEFITS"
                }
              },
              "orderabilityCommunication": {
                "title": {

                },
                "subTitle": {

                },
                "message": {

                },
                "customIcon": {

                },
                "commsStyling": {

                }
              },
              "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                  "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                  "lottie": {

                  },
                  "video": {

                  }
                }
              },
              "reviewsSummary": {

              },
              "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
              "restaurantOfferPresentationInfo": {

              },
              "externalRatings": {
                "aggregatedRating": {
                  "rating": "3.8",
                  "ratingCount": "4.7K+"
                },
                "source": "GOOGLE",
                "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
              },
              "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
              "campaignId": "beb4b01d-4e1e-4870-a9dd-fb08bd1648a0",
              "priceComparisonComms": {

              }
            },
            "analytics": {

            },
            "cta": {
              "link": "swiggy://menu?restaurant_id=100942&source=collection&query=Biryani",
              "text": "RESTAURANT_MENU",
              "type": "DEEPLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food"
      },
    ];
const Body = () =>{
  return(
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
          resList.map((restaurant) => (<RestroCard key={restaurant.info.id} resData = {restaurant}/>))
        }
        {/* <RestroCard resName="Grand Hotel" cuisine="Biryani, Chinese, Kebabs, Tandoor" Rating="⭐4.3" DeliveryTime="• 35-40mins"/>
        <RestroCard resName="Blue Sea Restaurant" cuisine="Hyderabadi, Seafood, Mughlai, Chinese, Haleem, Tandoor" Rating="⭐4.1" DeliveryTime="• 30-40mins"/>
        <RestroCard resName="Hotel Rumaan" cuisine="Biryani, Chinese, Kebabs, Tandoor" Rating="⭐4.2" DeliveryTime="• 25-30mins"/>
        <RestroCard resName="Nawabs" cuisine="Biryani, Tandoor, South Indian" Rating="⭐4.4" DeliveryTime="• 25-30mins"/>
        <RestroCard resName="Pista House" cuisine="Biryani, Chinese, Kebabs, Tandoor" Rating="⭐4.2" DeliveryTime="• 15-20mins"/>
        <RestroCard resName="Shah Ghouse" cuisine="Biryani, Chinese, Kebabs" Rating="⭐4.0" DeliveryTime="• 35-40mins"/>
        <RestroCard resName="Platform 65" cuisine="Biryani, Chinese" Rating="⭐3.0" DeliveryTime="• 35-45mins"/>
        <RestroCard resName="Shadab" cuisine="Biryani, Chinese, Kebabs, Tandoor" Rating="⭐4.2" DeliveryTime="• 30-40mins"/>
        <RestroCard resName="Pandago" cuisine="Biryani, Chinese, Kebabs" Rating="⭐4.3" DeliveryTime="• 35-40mins"/>
        <RestroCard resName="KFC" cuisine="Bucket Chicken, Burger, Soft Drinks" Rating="⭐4.4" DeliveryTime="• 30-40mins"/> */}
      </div>

    </div>
  )
}
const Footer = () =>{
  return (
    <div className="footer">
      <div className="copyright">
        <div>© 2026 Mana Inti Ruchulu</div>
      </div>
      <div>Address: Gachibowli, Opp to AMB Mall</div>
      <div>Contact Us: +91 123456789</div>
    </div>
  )
}
const AppLayout = () =>{
  return (
    <div className="app">
      <Header/>
      <Body/>
      <Footer/>
    </div>
  )
}

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout/>); //rendering react component