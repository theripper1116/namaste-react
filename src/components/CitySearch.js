import useRestaurentGeographicData from "../utils/useRestaurentGeographicData";

export const getGeographicalDetails = () => {
  const enteredCity = document.getElementById("floatingTextarea").value;
  const getGeographicData = useRestaurentGeographicData(enteredCity);
  return getGeographicData;
};

const CitySearch = () => {
  return (
    <div>
      <p className="d-inline-flex gap-1">
        <button
          className="btn"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapseExample"
          aria-expanded="false"
          aria-controls="collapseExample"
          style={{ marginLeft: "auto" }}
        >
          ≡
        </button>
      </p>
      <div className="collapse" id="collapseExample">
        <div className="card card-body">
          <div>
            <textarea
              className="form-control"
              placeholder="Leave a comment here"
              id="floatingTextarea"
            ></textarea>
            <label htmlFor="floatingTextarea" style={{ marginLeft: "5px" }}>
              Enter City Name
            </label>
          </div>
          <button className="btn" onClick={getGeographicalDetails}>
            Search!!
          </button>
        </div>
      </div>
    </div>
  );
};

export default CitySearch;
