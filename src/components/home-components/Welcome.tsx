const Welcome = () => {
  return (
    <div className="welcomeContainer">
      <div>
        <h2 className="welcomText">Witamy na stronie</h2>
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
