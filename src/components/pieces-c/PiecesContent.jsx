import brakeinfo from './brake-info';
import filterinfo from './filter-info';
import exinfo from './ex-info';
import susinfo from './sus-info';
import enginfo from './eng-info';
import elecinfo from './elec-info';
import "./PiecesContent.css";

function PiecesContent() {
    return (
        <div className="pieces-container">
            <div className="pieces-content">
                <div className="phrase-pieces-container">
                    <h2>¿QUE PIEZAS NECESITAS?</h2>
                </div>

                <h2 className="brakes-title">Frenos</h2>
                <div className="brakes-container">
                    {brakeinfo.map((brake) => (
                        <div key={brake.id} className="brake-item">
                            <img src={brake.image} alt={"Brake " + brake.id} className="brake-image" />
                        </div>
                    ))}
                </div>

                <h2 className="filter-title">Filtros</h2>
                <div className="filter-container">
                    {filterinfo.map((filter) => (
                        <div key={filter.id} className="filter-item">
                            <img src={filter.image} alt={"Filter " + filter.id} className="filter-image" />
                        </div>
                    ))}
                </div>

                <h2 className="exhaust-title">Escapes</h2>
                <div className="exhaust-container">
                    {exinfo.map((exhaust) => (
                        <div key={exhaust.id} className="exhaust-item">
                            <img src={exhaust.image} alt={"Exhaust " + exhaust.id} className="exhaust-image" />
                        </div>
                    ))}
                </div>

                <h2 className="sus-title">Suspensión</h2>
                <div className="sus-container">
                    {susinfo.map((sus) => (
                        <div key={sus.id} className="sus-item">
                            <img src={sus.image} alt={"Sus " + sus.id} className="sus-image" />
                        </div>
                    ))}
                </div>

                <h2 className="engine-title">Piezas Motor</h2>
                <div className="engine-container">
                    {enginfo.map((engine) => (
                        <div key={engine.id} className="engine-item">
                            <img src={engine.image} alt={"Eng " + engine.id} className="engine-image" />
                        </div>
                    ))}
                </div>

                <h2 className="elec-title">Electrónica</h2>
                <div className="elec-container">
                    {elecinfo.map((elec) => (
                        <div key={elec.id} className="elec-item">
                            <img src={elec.image} alt={"Elec " + elec.id} className="elec-image" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default PiecesContent;