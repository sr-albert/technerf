import { Button } from "@mui/material";
import PropTypes from "prop-types";
import { useState } from "react";
import "./TableView.scss";

export default function TableItem({
  id = "table-id",
  name = "Table name",
  status = "INACTIVE",
}) {
  const [isActive, setActive] = useState(status === "INACTIVE");

  const checkIn = () => {
    // Set counter from current date time
    setActive(true);
  };

  const checkOut = () => {
    setActive(false);
  };

  return (
    <div id={`table-${id}`} className="table-container">
      <div className="table-container__header">
        <p className="name">{name}</p>
        <div
          className={`table-container__header__status ${
            isActive ? "status--active" : "status--inactive"
          }`}
        />
      </div>
      <Button
        variant="contained"
        onClick={isActive ? checkOut : checkIn}
        className="btn-checkin"
      >
        {isActive ? "Check out" : "Check in"}
      </Button>
    </div>
  );
}

TableItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  status: "INACTIVE" | "ACTIVE",
};
