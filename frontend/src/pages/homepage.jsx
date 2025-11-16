import './homep.scss'
import Cabecalho from '../components/cabecalho'
import HeroSection from '../components/herosection/hero'
import SobreHome from '../components/sobreHome/sobreo'
import ComoHome from '../components/comofunc/comofunc'
import Mitos from '../components/mitos/mitos'
import LocaisDoacao from '../components/locais/LocaisDoacao'
import Depoimentos from '../components/depoimentos/Depoimentos'
import Contato from '../components/contato/Contato'
import Partners from '../components/Partners/Partners'
import Footer from '../components/footer'

export default function Home (){
    return(
        <div className="Container-HomePage">
            <Cabecalho />
            <HeroSection />
            <SobreHome />
            <ComoHome />
            <Mitos />
            <LocaisDoacao />
            <Depoimentos />
            <Contato />
            <Partners />
            <Footer />
        </div>    
    )
}