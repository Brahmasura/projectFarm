import style from "./footer.module.scss";

const Footer = () => {
  return (
    <>
      <div className={`container-fluid ${style.mainDiv}`}>
        <div className="row">
          <div className={`col-4 {style.firstCol}`}>
            <p>EdtioFarm</p>
          </div>
          <div className={`col-4 {style.secondCol}`}>
            <p>
              Rajpur Road, <br /> Dehradun, Uttarakhand 248001
            </p>
            <p>contactus@editofarm.com</p>
          </div>
          <div className={`col-4 {style.ThirdCol}`}>
            <p>About the Company</p>
            <p>
              We prioritize understanding your unique needs, ensuring every
              piece of writing gets the special attention it deserves.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
