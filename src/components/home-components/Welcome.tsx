const Welcome = () => {
  return (
    <div className="welcomeContainer">
      <div>
        <p className="welcomText">Witamy na stronie</p>
        <div className="clubName">LOK Energetyk Jelenia Góra</div>
        <p className="textAds">
          Strzelać potrafią wszyscy, ale trafić do celu nie kazdy
        </p>
        <div>
          <button>Wydarzenia</button>
          <button>Kontakt</button>
        </div>
      </div>
      <div className="photo">
        <img src="image.png" alt="Nasi zawodnicy na zawodach" />
      </div>
    </div>
  );
};
export default Welcome;
