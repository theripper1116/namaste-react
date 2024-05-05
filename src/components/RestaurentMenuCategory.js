import React from "react";

import RestaurentMenuDetail from "./RestaurentMenuDetail";

class RestaurentMenuCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categoryName: "Not Available",
    };
  }
  render() {
    return (
      <div className="accordion accordion-flush" id="restuarent-menu-category">
        <div className="accordion-item">
          <h4 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={"#flush-collapse"+this.props.index}
              aria-expanded="false"
              aria-controls={"#flush-collapse"+this.props.index}
            >
              <b>
                {this.props.categoryName.title} (
                {this.props.categoryName.itemCards.length})
              </b>
            </button>
          </h4>
          <div
            id={"flush-collapse"+ this.props.index}
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body" id="restaurent-menu-detail-card">
              {this.props.categoryName.itemCards.map((val) => {
                return (
                  <RestaurentMenuDetail key={val.id} restaurentMenuData={val} />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurentMenuCategory;
