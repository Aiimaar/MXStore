import bikeinfo from './bike-info';
import bikeinfotwo from './bike-info-two';
import bikeinfothree from './bike-info-three';
import bikeinfofour from './bike-info-four';
import "./BikeContent.css";

function BikeContent() {
    return (
        <div className="container">
            <div className="background-image"></div>
            <div className="content">
                <div className="phrase-bike-container">
                    <h2>DESCUBRE NUESTRA COLECCIÓN DE MOTOS</h2>
                </div>

                <h2 className="bikes-title">Motos Honda</h2>
                <div className="bikes-container">
                    {bikeinfo.map((bike) => (
                        <div key={bike.id} className="bike-item">
                            <img src={bike.image} alt={"Bike " + bike.id} className="bike-image" />
                        </div>
                    ))}
                </div>

                <h2 className="bikes-two-title">Motos KTM</h2>
                <div className="bikes-two-container">
                    {bikeinfotwo.map((bike) => (
                        <div key={bike.id} className="bike-two-item">
                            <img src={bike.image} alt={"Bike " + bike.id} className="bike-two-image" />
                        </div>
                    ))}
                </div>

                <h2 className="bikes-three-title">Motos Kawasaki</h2>
                <div className="bikes-three-container">
                    {bikeinfothree.map((bike) => (
                        <div key={bike.id} className="bike-three-item">
                            <img src={bike.image} alt={"Bike " + bike.id} className="bike-three-image" />
                        </div>
                    ))}
                </div>

                <h2 className="bikes-four-title">Motos Yamaha</h2>
                <div className="bikes-four-container">
                    {bikeinfofour.map((bike) => (
                        <div key={bike.id} className="bike-four-item">
                            <img src={bike.image} alt={"Bike " + bike.id} className="bike-four-image" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default BikeContent;