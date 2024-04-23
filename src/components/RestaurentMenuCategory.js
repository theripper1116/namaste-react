import React from "react";

class RestaurentMenuCategory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        categoryName: "Not Available"
    };
  }
  render() {
    return (
        <div
        className="accordion accordion-flush"
        id="restuarent-menu-category"
      >
        <div className="accordion-item">
          <h4 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <b>
              {this.props.categoryName}
              </b>
            </button>
          </h4>
          <div
            id="flush-collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionFlushExample"
          >
            <div className="accordion-body">
              {/* <RestaurentMenuDetail
                key={data.card.info.id}
                restaurentMenuData={data.card.info}
              /> */}
              
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurentMenuCategory;
