import style from "./service.module.scss";

const Service = ({ service, description, index, backgroundImage }) => {
  const backgroundImageStyle = {
    background : `url(${backgroundImage})`,
    backgroundSize: "contain",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  }
  return (
    <>
      <div className={`container-fluid ${style.mainDiv}`}>
        <div className={`row ${index % 2 === 0 ? 'flex-row-reverse' : ''}`}>
          <div className={`col-6 ${style.leftDiv}`} style={backgroundImageStyle}></div>
          <div className={`col-6 ${style.rightDiv}`}>
            <h2>{service}</h2>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
