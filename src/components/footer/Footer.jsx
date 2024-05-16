import React, { useState } from 'react';
import './Footer.css';

const Footer = () => {
  const [showCookieModal, setShowCookieModal] = useState(false);
  const [showLegalModal, setShowLegalModal] = useState(false);

  const openCookieModal = () => setShowCookieModal(true);
  const closeCookieModal = () => setShowCookieModal(false);

  const openLegalModal = () => setShowLegalModal(true);
  const closeLegalModal = () => setShowLegalModal(false);

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
          <span onClick={openCookieModal} className="footer-text-link">Política de Cookies</span>
          <span onClick={openLegalModal} className="footer-text-link">Avisos Legales</span>
        </nav>
      </div>
      <div className="footer-section footer-connect">
        <h3>REDES</h3>
        <nav>
          <a href="https://www.instagram.com/"><img src="/images/instagram_logo_icon_181283.svg" alt="Instagram" className="footer-connect-ins" /></a>
          <a href="https://www.facebook.com/"><img src="/images/facebook_logo_icon_181322.svg" alt="Facebook" className="footer-connect-face" /></a>
          <a href="https://twitter.com/"><img src="/images/twitter_x_new_logo_x_circle_icon_256076.svg" alt="X" className="footer-connect-x" /></a>
          <a href="/rss-page/rss.xml"><img src="/images/rss.svg" alt="RSS" className="footer-connect-rss" /></a>
        </nav>
      </div>
      {showCookieModal && (
        <div className="modal-overlay">
          <div id="cookie-policy-modal" className="modal">
            <span className="close" onClick={closeCookieModal}>&times;</span>
            <h2>Política de Cookies</h2>
            <p>En MXStore utilizamos "cookies" propias y de terceros para ofrecerte una mejor experiencia y servicio. Puedes hacer clic para otorgarnos tu consentimiento para llevar a cabo el procesamiento, o puedes denegar tu consentimiento o cambiar tus preferencias antes de otorgarlo. Tus preferencias se aplicarán solo en este sitio web. Ten en cuenta que algún procesamiento de tus datos personales puede no requerir de tu consentimiento, pero tienes derecho a rechazar dicho procesamiento. Puedes cambiar tus preferencias en cualquier momento en esta página web, haciendo clic en el enlace “Privacidad” que encontrarás en la esquina inferior de manera permanente.</p>

            <h3>¿Qué es una "cookie"?</h3>
            <p>Una "cookie" es un pequeño fragmento de texto que los sitios web envían al navegador y que se almacenan en el terminal del usuario, el cual puede ser un ordenador personal, un teléfono móvil, una tableta, etc. Estos archivos permiten que el sitio web recuerde información sobre tu visita, como el idioma y las opciones preferidas, lo que puede facilitar tu próxima visita y hacer que el sitio resulte más útil al personalizar su contenido. Las "cookies" desempeñan un papel muy importante al mejorar la experiencia del uso de la web.</p>

            <h3>¿Qué cookies utiliza MXStore?</h3>
            <p>A continuación, puedes encontrar el listado de las cookies más importantes que utilizamos en MXStore:</p>

            <h4>Lista de cookies</h4>
            <ul>
              <li><strong>cookieId:</strong> Esta cookie se utiliza para identificar de manera única a un usuario.</li>
              <li><strong>sessionCookie:</strong> Almacena información sobre la sesión actual del usuario en el sitio web.</li>
              <li><strong>languagePreferenceCookie:</strong> Guarda la preferencia de idioma seleccionada por el usuario.</li>
              <li><strong>loginCookie:</strong> Almacena información de inicio de sesión para mantener al usuario conectado.</li>
              <li><strong>cartCookie:</strong> Guarda los productos agregados al carrito de compras para recordarlos entre sesiones.</li>
              <li><strong>analyticsCookie:</strong> Utilizada por servicios de análisis web para rastrear el comportamiento del usuario en el sitio.</li>
              <li><strong>marketingCookie:</strong> Utilizada por servicios de marketing para mostrar anuncios personalizados al usuario.</li>
              <li><strong>socialMediaCookie:</strong> Almacena información de sesión para permitir compartir contenido en redes sociales.</li>
            </ul>
          </div>
        </div>
      )}
      {showLegalModal && (
        <div className="modal-overlay">
          <div className="modal">
            <span className="close" onClick={closeLegalModal}>&times;</span>
            <h2>Avisos Legales</h2>
            <h3>Aviso Legal</h3>
            <p>
              En cumplimiento del artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y Comercio Electrónico, a continuación, se exponen los datos identificativos del responsable.
              <br /><br />
              Denominación social: MXStore
              <br />
              C.I.F./N.I.F.: A12345678
              <br />
              Domicilio Social: Pol. Industrial Miller Bajo, C. Diego Vega Sarmiento, 2-18, 35001 Las Palmas de Gran Canaria (Las Palmas).
              <br />
              Inscrita en el Registro mercantil de Gran Canaria, Hoja GC 12345, Folio 678, Tomo 910, Sección 2ª.
              <br />
              Teléfono: 912345678
              <br />
              Correo electrónico: help@mxstore.com
            </p>
            <h3>Propiedad intelectual</h3>
            <p>
              El código fuente, los diseños gráficos, las imágenes, las fotografías, los sonidos, las animaciones, el software, los textos, así como la información y los contenidos que se recogen en el presente sitio web están protegidos por la legislación española sobre los derechos de propiedad intelectual e industrial a favor de MXStore y no se permite la reproducción y/o publicación, total o parcial, del sitio web, ni su tratamiento informático, su distribución, su difusión, ni su modificación, transformación o descompilación, ni demás derechos reconocidos legalmente a su titular, sin el permiso previo y por escrito del mismo MXStore.
              <br /><br />
              El usuario, única y exclusivamente, puede utilizar el material que aparezca en este sitio web para su uso personal y privado, quedando prohibido su uso con fines comerciales o para incurrir en actividades ilícitas. Todos los derechos derivados de la propiedad intelectual están expresamente reservados por MXStore.
              <br /><br />
              MXStore velará por el cumplimiento de las anteriores condiciones como por la debida utilización de los contenidos presentados en sus páginas web, ejercitándose todas las acciones civiles y penales que le correspondan en el caso de infracción o incumplimiento de estos derechos por parte del usuario.
            </p>
            <h3>Protección de datos de carácter personal</h3>
            <p>
              Política de privacidad de MXStore
              <br /><br />
              Cada vez que use este sitio Web estará bajo la aplicación de la Política de Privacidad vigente en cada momento, debiendo revisar dicho texto para comprobar que está conforme con él.
              <br /><br />
              Los datos personales que nos aporta serán objeto de tratamiento en ficheros responsabilidad de MXStore cuyas finalidades son:
              <br /><br />
              El desarrollo, cumplimiento y ejecución de un contrato de compraventa o de prestación de servicio o de cualquier otro contrato entre ambos.
              <br />
              Atender las solicitudes que nos plantee.
              <br />
              Proporcionarle información acerca de los productos o servicios de MXStore, incluyendo, en relación con los mismos, el envío de comunicaciones comerciales por correo electrónico o por cualquier otro medio de comunicación electrónica equivalente (como SMS).
              <br /><br />
              MXStore, con domicilio en Pol. Industrial Miller Bajo, C. Diego Vega Sarmiento, 2-18, 35001 Las Palmas de Gran Canaria (Las Palmas), como Responsable del Tratamiento, se compromete a respetar la confidencialidad de su información de carácter personal.
              <br /><br />
              La legitimación para el tratamiento es el consentimiento de la persona interesada expresado mediante la cumplimentación de cualquier formulario o la contratación de cualquier servicio o la compra de un producto.
              <br /><br />
              Sus datos no se cederán a ninguna entidad sin su consentimiento previo.
              <br /><br />
              Puede ejercitar los derechos de acceso, rectificación, limitación de tratamiento, supresión, portabilidad, cancelación y revocar el consentimiento prestado, dirigiendo escrito con copia de su DNI a la dirección anteriormente citada o al correo electrónico: administracion@mxstore.com.
              <br /><br />
              También podrá en caso de no ver atendidos sus derechos presentar su reclamación a la Agencia Española de Protección de Datos.
              <br /><br />
              Encontrará información detallada sobre el tratamiento de sus datos en el apartado “Declaración de Privacidad Extensa” en esta misma web.
            </p>
            <h3>Varios</h3>
            <p>
              A.- MXStore podrá modificar, sin previo aviso, la información contenida en su sitio web, así como su configuración y presentación.
              <br /><br />
              B.- MXStore se compromete a través de este medio a NO REALIZAR PUBLICIDAD ENGAÑOSA. A estos efectos, por lo tanto, no serán considerados como publicidad engañosa los errores formales o numéricos que puedan encontrarse a lo largo del contenido de las distintas secciones de la web de MXStore producidos como consecuencia de un mantenimiento y/o actualización incompleta o defectuosa de la información contenida en estas secciones. MXStore como consecuencia de lo dispuesto en este apartado, se compromete a corregirlo tan pronto como tenga conocimiento de dichos errores.
              <br /><br />
              C.- MXStore se compromete a NO REMITIR COMUNICACIONES COMERCIALES SIN IDENTIFICARLAS COMO TALES, conforme a lo dispuesto en la Ley 34/2002 de Servicios de la Sociedad de la Información y de comercio electrónico. A estos efectos no será considerado como comunicación comercial toda la información que se envíe a las personas interesadas siempre que tenga por finalidad el mantenimiento de la relación existente, así como el desempeño de las tareas de información y otras actividades propias de la entidad.
              <br /><br />
              D.- MXStore no se hace responsable del incumplimiento de cualquier norma aplicable en que pueda incurrir el usuario en su acceso este sitio web y/o en el uso de las informaciones contenidas en el mismo.
              <br /><br />
              E.- MXStore no será responsable de los daños y perjuicios producidos o que puedan producirse, cualquiera que sea su naturaleza, que se deriven del uso de la información, de las materias contenidas en este web site y de los programas que incorpora. Los enlaces (links) e hipertexto que posibiliten, a través del sitio web, acceder al usuario a prestaciones y servicios ofrecidos por terceros, no pertenecen ni se encuentran bajo el control de MXStore; dicha entidad no se hace responsable ni de la información contenida en los mismos, ni de cualesquiera efectos que pudieran derivarse de dicha información.
              <br /><br />
              F.- MXStore no se hace responsable del uso ilegítimo que terceras personas puedan hacer de los nombres de marca, nombres de producto, marcas comerciales que, no siendo propiedad de dicha entidad, aparezcan en el presente sitio web. Tampoco se responsabiliza de la integridad, veracidad y licitud del contenido de los enlaces a las webs a las que pueda accederse desde el presente sitio web.
              <br /><br />
              G.- En definitiva, el Usuario es el único responsable del uso que realice de los servicios, contenidos, enlaces (links) e hipertexto incluidos en el sitio web el presente sitio web.
            </p>
            <h3>Cambios y devoluciones</h3>
            <p>
              Conoce todos los detalles sobre el proceso de devolución y sus condiciones aquí.
              <br /><br />
              Los clientes particulares dispondrán de un plazo de 30 días naturales para notificar su deseo de desistimiento de uno o varios productos de su pedido a excepción de piezas de Recambio original, en cuyo caso el plazo de devolución será de 14 días naturales.
              <br /><br />
              En MXStore te ofrecemos el doble de plazo frente al contemplado en el Ral Decreto Legislativo 1/2007, de 16 de noviembre (plazo de únicamente 14 días naturales desde la recepción del pedido).
              <br /><br />
              * Las devoluciones posteriores al plazo de 30 días, deberán ser estudiadas individualmente, y en caso de posible aceptación, llevarán un recargo en función de cada caso concreto.
              <br /><br />
              Excepciones
              <br /><br />
              Tal y como establece el artículo 103 del Real Decreto Legislativo 1/2007, de 16 de noviembre, por el que se aprueba el texto refundido de la Ley General para la defensa de los Consumidores y Usuarios y otras leyes complementarios, no se aceptarán devoluciones de los siguientes productos:
              <br /><br />
              · Productos usados, manipulados, abiertos o que no conserven su embalaje y/o etiquetado original.
              <br />
              · Productos o piezas pedidas a fabricante bajo petición expresa del cliente, tales como Recambios Originales, productos con tallas o medidas especiales o poco frecuentes, que en el momento de la compra no aparezcan con la opción "En Stock. Para envío inmediato".
              <br />
              · Productos confeccionados conforme a las especificaciones del cliente, o claramente personalizados (jerseys personalizados, kits de adhesivos personalizados...)
              <br />
              · Productos de material eléctrico ni baterías.
              <br />
              · Tarjetas Regalo.
              <br /><br />
              MXStore se reserva el derecho a poder declinar una petición de cambio/devolución, o aplicar algún recargo, si se incumple alguno de los puntos de los apartados anteriores.
              <br /><br />
              En caso de recepción de mercancía dañada o defectuosa, el cliente deberá notificar los daños en el transporte o mercancía incompleta en durante las siguientes 24h a la recepción de su pedido.
            </p>
            <h3>Aviso a menores</h3>
            <p>
              Si eres menor te interesará saber que:
              <br /><br />
              MXStore te recomienda que avises a tus padres o representantes antes de iniciar tus navegaciones en Internet.
              <br /><br />
              Aunque MXStore no comprobará si tus datos son ciertos, antes de hacer uso de cualquier servicio o contenido de MXStore, te recomendamos que lo hables con tus padres o representantes, pues ellos podrán explicarte la Política de Privacidad y podrás participar con ellos de todas las posibilidades de los websites de MXStore.
              <br /><br />
              En particular, si te vas a registrar, consulta con tus padres o representantes para que si lo desean puedan ponerse en contacto con nosotros.
            </p>
            <h3>Aviso a mayores</h3>
            <p>
              Sin perjuicio de todo lo previsto como Aviso Legal; en su condición de padres, representantes o tutores legales, serán los responsables de que sus hijos menores o tutelados accedan a los servicios o contenidos de MXStore por lo que les recomendamos acompañar, supervisar o tomar las precauciones oportunas (reglas de tiempo de uso de ordenador, ubicación del ordenador en zona común de la casa, etc.) durante la navegación de aquellos por las páginas web.
              <br /><br />
              Aunque MXStore no realizará comprobaciones sobre la veracidad de los datos, recomienda para los casos de tales actuaciones que supervisen el proceso de registro de sus hijos o tutelados. En su caso, MXStore gestionará las solicitudes derivadas del ejercicio, por los padres o tutores, de los derechos de acceso, cancelación, rectificación y oposición de los datos de los menores o incapaces, sin perjuicio de que puede ponerse en contacto con nosotros para realizar las advertencias que considere oportunas.
              <br /><br />
              Junto a lo anterior, le recordamos que algunos navegadores permiten modificar su configuración para que los niños u otras personas no puedan acceder a determinadas páginas. Aun así, le recomendamos que asista a la navegación pues determinados websites podrían no haber sido clasificados.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;