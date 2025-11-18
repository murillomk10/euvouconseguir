import { BrowserRouter , Routes, Route } from "react-router";
import Home from "./pages/homepage";
import Sobre from "./pages/SobreNos";
import RequisitosParaDoar from "./pages/RequesitosParaDoar";
import CuidadosNaDoacao from "./pages/cuidadosdoacao";
import PorQueDoar from "./pages/PorQueDoar";
import DoacaoParaMenores from "./pages/DoacaoParaMenores";
import OndeDoar from "./pages/ondedoar";
import PasssosDaDoacao from "./pages/PassosDoacao";
import Agendamento from "./pages/Agendamentopage";
import PerfilUsuario from "./pages/perfilUsuario";
import Admin from "./pages/admin";
import Login from './pages/login/Login'
import Empresa from "./pages/empresa/empresa";

export default function Navegacao(){
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/home' element={<Home />} />
                <Route path='/quemsomos' element={<Sobre />} />
                <Route path='/reqdoar' element={<RequisitosParaDoar />} />
                <Route path='/cuidados' element={<CuidadosNaDoacao />} />
                <Route path='/pqdoar' element={<PorQueDoar />} />
                <Route path='/login' element={<Login />} />
                <Route path='/menores' element={<DoacaoParaMenores />} />
                <Route path='/ondedoar' element={<OndeDoar />} />
                <Route path='/Passos' element={<PasssosDaDoacao />} />
                <Route path='/agendamento' element={<Agendamento />} />
                <Route path='/perfil' element={<PerfilUsuario />} />
                <Route path='/admin' element={<Admin />} />
                <Route path='/' element={<Empresa />} />
            </Routes>
        </BrowserRouter>
    )
}