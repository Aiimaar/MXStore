import info from "./info.js";
import "./Content.css";

const Content = () => {
    return (
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
    );
  };
  
  export default Content;