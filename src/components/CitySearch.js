// import useRestaurentGeographicData from "../utils/useRestaurentGeographicData";

import { Suspense, lazy, useState } from "react";

import { ADDRESS_URL } from "../utils/Links";
CitySearchCard = lazy(() => import("./CitySearchCard"));

// export const getGeographicalDetails = () => {
//   const getGeographicData = useRestaurentGeographicData();
//   return getGeographicData;
// };

const CitySearch = () => {
  // const getGeographicalDetails = () => {
  //   const getGeographicData = useRestaurentGeographicData();
  //   return getGeographicData;
  // };

  // const [latituedLongitudinalData, setLatituedLongitudinalData] = useState({});
  const [cityLocationList, setCityLocationList] = useState([]);

  const getIDForCity = async () => {
    const enteredCity = document.getElementById("floatingTextarea").value;
    const idData = await fetch(ADDRESS_URL + enteredCity);
    const idJsonData = await idData.json();
    setCityLocationList(idJsonData?.data);
    // setCityList(
    //   `<button
    //     type="button"
    //     className={displayItem.place_id}
    //   >
    //   ${displayItem.description} </button>`
    // );
    // document.getElementById("show-area-results").innerHTML += cityList;
    // });
    // getLatitudeLongitudeForCity(idJsonData?.data[0]?.place_id);
  };

  // const getLatitudeLongitudeForCity = async (cityID) => {
  //   const geographicalData = await fetch(
  //     RESTAURENT_GEOGRAPHIC_DETAILS + cityID
  //   );
  //   const geographicalJSONData = await geographicalData.json();
  //   setLatituedLongitudinalData(
  //     geographicalJSONData?.data[0]?.geometry?.location
  //   );
  //   console.log(latituedLongitudinalData);
  // };

  // useEffect(() => {
  //   getIDForCity(enteredCity);
  // }, []);

  // return (
  //   <div>
  //     <p className="d-inline-flex gap-1">
  //       <button
  //         className="btn"
  //         type="button"
  //         data-bs-toggle="collapse"
  //         data-bs-target="#collapseExample"
  //         aria-expanded="false"
  //         aria-controls="collapseExample"
  //         style={{ marginLeft: "auto" }}
  //       >
  //         ≡
  //       </button>
  //     </p>
  //     <div className="collapse" id="collapseExample">
  //       <div className="card card-body">
  //         <div>
  //           <textarea
  //             className="form-control"
  //             placeholder="Leave a comment here"
  //             id="floatingTextarea"
  //           ></textarea>
  //         </div>
  //         {/* <button className="btn" onClick={getGeographicalDetails}> */}
  //         <button className="btn" onClick={getIDForCity}>
  //           Search!!
  //         </button>
  //       </div>
  //     </div>
  //     {cityLocationList.length === null ? (
  //       <h6>Loading....</h6>
  //     ) : (
  //       cityLocationList.map((displayItem) => {
  //         return (
  //           <Suspense>
  //             <CitySearchCard
  //               fallback={<h6>Loading......</h6>}
  //               key={displayItem.place_id}
  //               displayItem={displayItem}
  //             />
  //           </Suspense>
  //         );
  //       })
  //     )}
  //   </div>
  // );

  return (
    <div>
      <button
        class="btn btn-primary"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#staticBackdrop"
        aria-controls="staticBackdrop"
      >
        Search City{" "}
        <img
          width="24"
          height="24"
          src="https://img.icons8.com/fluency/48/maps.png"
          alt="maps"
        />
      </button>

      <div
        class="offcanvas offcanvas-end"
        data-bs-backdrop="static"
        tabindex="-1"
        id="staticBackdrop"
        aria-labelledby="staticBackdropLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="staticBackdropLabel">
            <textarea
              className="form-control"
              placeholder="Enter City"
              id="staticBackdropLabel"
            ></textarea>
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <button className="btn" onClick={getIDForCity}>
            Go
          </button>
        </div>
        {cityLocationList.length === null ? (
          <h6>Loading....</h6>
        ) : (
          cityLocationList.map((displayItem) => {
            return (
              <Suspense>
                <CitySearchCard
                  fallback={<h6>Loading......</h6>}
                  key={displayItem.place_id}
                  displayItem={displayItem}
                />
              </Suspense>
            );
          })
        )}
      </div>
    </div>
  );
};

export default CitySearch;
