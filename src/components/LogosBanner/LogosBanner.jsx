import "./LogosBanner.css";
const Logo = ({ clientTitle }) => {
  return (
    <div className="logoIcon">
      <h3>{clientTitle}</h3>
    </div>
  );
};
const ClientsSlider = () => {
  const clients = ["PSIRA • 3184406", "CK • 2019/296510/07", "SASSETA", "SARS"];
  return (
    <div className="logos">
      <div className="logos-slide">
        <div className="d-flex">
          {clients.map((item, index) => (
            <Logo key={index} clientTitle={item} />
          ))}
        </div>
        {/* <img src={imageA} />
        <img src={imageB} />
        <img src={imageC} /> */}
      </div>
    </div>
  );
};

export default ClientsSlider;
