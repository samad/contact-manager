import React, { useContext } from "react";
import AlertContext from "../../context/alert/alertContext";

function Alerts() {
  const alertContext = useContext(AlertContext);

  return (
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <div
        key={alert.id}
        className={`alert alert-${alert.type} my-2`}
        role="alert"
      >
        <i className="fas fa-info-circle"></i>
        &nbsp;&nbsp;{alert.msg}
      </div>
    ))
  );
}

export default Alerts;
