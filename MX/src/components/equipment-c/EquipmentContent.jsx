import "./EquipmentContent.css";
import equipBrLogos from "./equipBrLogos";
import foxMonos from "./foxMonos";
import thorMonos from "./thorMonos";
import alpineStarsMonos from "./alpineStarsMonos";

const EquipmentContent = () => {
    return (
        <div>
            <div className="brands-container">
                <h2>LA DIVERSIÓN ES IMPORTANTE, PERO MÁS LA PROTECCIÓN</h2>
                <div className="logos-container">
                    {equipBrLogos.map(equipBrLogo => (
                        <img key={equipBrLogo.id} src={equipBrLogo.src} alt={equipBrLogo.alt} />
                    ))}
                </div>
            </div>

            <h2 className="fox-title">Monos Fox</h2>
            <div className="fox-grid">
                {foxMonos.map(mono => (
                    <img key={mono.id} src={mono.src} alt={mono.alt} />
                ))}
            </div>

            <h2 className="thor-title">Monos Thor</h2>
            <div className="thor-grid">
                {thorMonos.map(mono => (
                    <img key={mono.id} src={mono.src} alt={mono.alt} />
                ))}
            </div>

            <h2 className="alpine-title">Monos AlpineStars</h2>
            <div className="alpine-grid">
                {alpineStarsMonos.map(mono => (
                    <img key={mono.id} src={mono.src} alt={mono.alt} />
                ))}
            </div>
        </div>
    );
};

export default EquipmentContent;