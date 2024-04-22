import { RES_IMAGE_LINK } from "../utils/Links";

const RestaurentCard = ({ resData }) => {
  // console.log(resData);
  const { name, cuisines, avgRating, cloudinaryImageId } = resData;
  // console.log(stringForImage);

  return (
    // <div className="restaurent-list">
    //   <img
    //     className="restaurent-image"
    //     alt="restaurent-image"
    //     src={RES_IMAGE_LINK + cloudinaryImageId}
    //   ></img>
    //   <h3>{name}</h3>
    //   <h5>
    //     {cuisines?.map((val) => {
    //       return val + ", ";
    //     })}
    //   </h5>
    //   <h5>{avgRating}</h5>
    // </div>

    <div className="card m-1" style={{ width: 200, height: 450 }}>
      <img
        src={RES_IMAGE_LINK + cloudinaryImageId}
        className="card-img-top"
        alt="..."
      />
      <div className="card-body">
        <h4>{name}</h4>
        <h6>
          {cuisines?.map((val) => {
            return val + ", ";
          })}
        </h6>
        <h6>{avgRating}</h6>
      </div>
    </div>
  );
};

export const withAvgRating = (RestaurentCard) => {
  return ({ resData }) => {
    return (
      <div>
        <label className="best-rated-label">Best Rated Restaurent</label>
        <RestaurentCard resData={resData} />
      </div>
    );
  };
};

export default RestaurentCard;
