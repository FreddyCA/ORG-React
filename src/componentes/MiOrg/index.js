// import { useState } from "react";
import "./MiOrg.css";

const MiOrg = (props) => {

  return (
    <section className="orgSection">
      <h3 className="title">Mi organización</h3>
      <div className="orgSection__contenedor--img">
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}></img>
      </div>
    </section>
  );
};

export default MiOrg;
