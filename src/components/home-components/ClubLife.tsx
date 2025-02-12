import { Link } from "react-router-dom";
const ClubLife = () => {
  return (
    <div>
      <p>Z zycia koła</p>
      <div>
        <div>
          <img src="image" alt="wydarzenie1" />
          <p className="date">08.02.2025 r.</p>
          <h2>Zaproszenia na III Karkonoską Ligę Strzelecką</h2>
          <Link to="ada">więcej</Link>
        </div>
        <div>
          <img src="image" alt="wydarzenie2" />
          <p className="date">26.01.2025 r.</p>
          <h2>WOŚP</h2>
          <Link to="ada">więcej</Link>
        </div>
        <div>
          <img src="image" alt="wydarzenie3" />
          <p className="date">24.01.2025 r.</p>
          <h2>Karkonoska Szkolna Liga Strzelecka - runda 2</h2>
          <Link to="ada">więcej</Link>
        </div>
        <div>
          <img src="image" alt="wydarzenie4" />
          <p className="date"></p>
          <h2>Cokolwiek</h2>
          <Link to="ada">więcej</Link>
        </div>
      </div>
    </div>
  );
};
export default ClubLife;
