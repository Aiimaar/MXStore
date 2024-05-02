import "./Footer.css"
function Footer() {
  return (
    <div className="footer-wrapper">
      <div className="footer-section footer-us">
        <h3>NOSOTROS</h3>
        <nav>
          <a href="/values">Valores</a>
          <a href="/contact">Contacto</a>
          <a href="/store">Forma Parte</a>
        </nav>
      </div>
      <div className="footer-section footer-services">
        <h3>SERVICIOS</h3>
        <nav>
          <a href="/guarantee">Garantía</a>
          <a href="/security">Seguridad</a>
          <a href="/maintenance">Mantenimiento</a>
        </nav>
      </div>
      <div className="footer-section footer-legal">
        <h3>LEGAL</h3>
        <nav>
          <a href="/policy">Política de Privacidad</a>
          <a href="/warns">Avisos Legales</a>
        </nav>
      </div>
      <div className="footer-section footer-connect">
        <h3>REDES</h3>
        <nav>
          <a href="https://www.instagram.com/"><img src="/images/instagram_logo_icon_181283.svg" alt="Instagram" className="footer-connect-ins"/></a>
          <a href="https://www.facebook.com/"><img src="/images/facebook_logo_icon_181322.svg" alt="Facebook" className="footer-connect-face"/></a>
          <a href="https://twitter.com/"><img src="/images/twitter_x_new_logo_x_circle_icon_256076.svg" alt="X" className="footer-connect-x"/></a>
        </nav>
      </div>
    </div>
  );
}

export default Footer