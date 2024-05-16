import HelmetContent from "../../components/helmet-c/HelmetContent"
import Footer from "../../components/footer/Footer"
import FooterCopyR from "../../components/footer/FooterCopyR"
import Header from "../../components/header/HEADER"

function Helmet(){
    return(
    <>
        <Header />
        <HelmetContent />
        <Footer />
        <FooterCopyR />

    </>
    )
}

export default Helmet