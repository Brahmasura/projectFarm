import style from "./service.module.scss";

const Service = ({ service, description }) => {
  return (
    <>
      <div className={`container-fluid ${style.mainDiv}`}>
        <div className="row">
          <div className={`col-4 ${style.leftDiv}`}></div>
          <div className={`col-8 ${style.rightDiv}`}>
            <h2>{service}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
