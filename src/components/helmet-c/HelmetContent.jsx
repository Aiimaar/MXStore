import helmetinfo from './helmet-info';
import helmetinfotwo from './helmet-info-two';
import "./HelmetContent.css";

function HelmetContent() {
    return (
        <div className="container">
            <div className="background-image"></div>
            <div className="content">
                <div className="title-container">
                    <h2>PROTÉGETE CON NUESTROS CASCOS DE ALTA CALIDAD</h2>
                </div>

                <h2 className="helmets-title">Cascos Airoh</h2>
                <div className="helmets-container">
                    {helmetinfo.map((helmet) => (
                        <div key={helmet.id} className="helmet-item">
                            <img src={helmet.image} alt={"Helmet " + helmet.id} className="helmet-image" />
                        </div>
                    ))}
                </div>

                <h2 className="helmets-two-title">Cascos Oneil</h2>
                <div className="helmets-two-container">
                    {helmetinfotwo.map((helmet) => (
                        <div key={helmet.id} className="helmet-two-item">
                            <img src={helmet.image} alt={"Other Helmet " + helmet.id} className="helmet-two-image" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default HelmetContent;