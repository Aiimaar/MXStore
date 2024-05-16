import knowinfo from './know-info';
import knowinfotwo from './know-info-two';
import "./KnowContent.css";

function KnowContent() {
    return (
        <div className="container">
            <div className="content">
                <div className="phrase-container">
                    <h2>En MXStore, hemos querido ampliar nuestro catálogo, añadiendo a éste, ¡Pit Bikes para los más pequeños y Quads!
                        Ahora, los aventureros más jóvenes también pueden disfrutar de la emoción y la diversión que ofrecen nuestras nuevas
                        incorporaciones. Descubre la adrenalina en miniatura con nuestras Pit Bikes diseñadas especialmente para los pequeños
                        pilotos, mientras que los Quads les permiten explorar terrenos desafiantes con seguridad y estilo.
                    </h2>
                </div>

                <h2 className="quads-title">¡Nuestros Nuevos Quads!</h2>
                <div className="quads-container">
                    {knowinfo.map((quad) => (
                        <div key={quad.id} className="quad-item">
                            <img src={quad.image} alt={quad.name} className="quad-image" />
                            <div className="quad-description">
                                <h3>{quad.name}</h3>
                                <p>{quad.description}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <h2 className="pitbike-title">¡Y Nuestros Nuevos Pit Bikes!</h2>
                <div className="pitbike-container">
                    <div className="pitbike-grid">
                        {knowinfotwo.map((knowinfotwo) => (
                            <div key={knowinfotwo.id} className="pitbike-item">
                                <img src={knowinfotwo.image} alt={knowinfotwo.name} />
                                <div className="pitbike-description">
                                    <h3>{knowinfotwo.name}</h3>
                                    <p>{knowinfotwo.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default KnowContent;