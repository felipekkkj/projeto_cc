import { Route, Routes } from "react-router-dom";
import { NotFound } from "./pages/NotFound/NotFound";
import { Home } from "./pages/home/Home";
import { Quemsomos } from "./pages/quemsomos/Quemsomos";

export function Rotas() {
    return (
    <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/*" element={<NotFound />} />

        <Route path="/quemsomos" element={<Quemsomos />} />
    </Routes>
    );
}