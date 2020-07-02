import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

const CardListingItem = (props) => {
  return (
    <Link to={`/cards/${props.id}`}>
      <div className="card-background">
        <div className="card ">
          <i className="edit-toggle edit-icon sm-icon"></i>
          <div className="cover-image"></div>
          <div className="card-info">
            <p>{props.title}</p>
          </div>
          <div className="card-icons">
            <i className="clock-icon sm-icon overdue ">
              {moment(props.due_date).format("MMM D")}
            </i>
            <i className="description-icon sm-icon"></i>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardListingItem;
