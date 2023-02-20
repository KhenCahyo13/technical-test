import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeAdmin from "./pages/admin/HomeAdmin";
import Kendaraan from "./pages/admin/Kendaraan";
import LoginAdmin from "./pages/admin/LoginAdmin";
import Pegawai from "./pages/admin/Pegawai";
import Pemakaian from "./pages/admin/Pemakaian";
import Tambang from "./pages/admin/Tambang";
import HomeAtasan from "./pages/atasan/HomeAtasan";
import LoginAtasan from "./pages/atasan/LoginAtasan";
import Persetujuan from "./pages/atasan/Persetujuan";

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          {/* Admin Route */}
          <Route path="/" element={<LoginAdmin />} />
          <Route path="/home-admin/:id_pengelola" element={<HomeAdmin />} />
          <Route path="/pemakaian" element={<Pemakaian />} />
          <Route path="/pegawai" element={<Pegawai />} />
          <Route path="/tambang" element={<Tambang />} />
          <Route path="/kendaraan" element={<Kendaraan />} />
          {/* Atasan Route */}
          <Route path="/login-atasan" element={<LoginAtasan />} />
          <Route path="/home-atasan/:id_atasan/:id_kantor" element={<HomeAtasan />} />
          <Route path="/persetujuan/:id_atasan" element={<Persetujuan />} />
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
