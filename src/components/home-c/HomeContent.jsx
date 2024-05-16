import { Link } from 'react-router-dom';
import info from "./info.js";
import equipmentInfo from "./equipmentInfo.js";
import "./HomeContent.css";

const HomeContent = () => {
  return (
    <div>
      <div className="store-description-container">
        <h2>NUEVAS LLEGADAS</h2>
        <Link to="/know-more">
          <button className="saber-mas-button">SABER MÁS</button>
        </Link>
      </div>

      <h2 className="equipment-title">Equipamiento y Cascos</h2>
      <div className="equipment-grid">
        {equipmentInfo.map((equipment) => (
          <div key={equipment.id} className="equipment-item">
            <img src={equipment.image} alt={equipment.name} />
            <div className="equipment-description">
              <h3>{equipment.name}</h3>
              <p>{equipment.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="motocross-title">Explora Nuestras Motos</h2>
      <div className="motos-grid">
        {info.map((info) => (
          <div key={info.id} className="moto-item">
            <img src={info.image} alt={info.name} />
            <div className="moto-description">
              <h3>{info.name}</h3>
              <p>{info.description}</p>
            </div>
          </div>
        ))}
      </div>
      <h1 className="review">
        <Link to ="/review">¡Déjanos tu opinión!</Link>
      </h1>
    </div>
  );
};

export default HomeContent;