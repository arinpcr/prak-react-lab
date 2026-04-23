import { useState } from 'react'
import Sidebar from "./layout/Sidebar";
import Header from "./layout/Header";
import Dashboard from "./pages/Dashboard";
import { Route, Routes } from 'react-router-dom';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import NotFound from './pages/NotFound';
import ErrorPage from './pages/ErrorPage';

function App() {
  return (
    <div className="min-h-screen bg-latar font-poppins text-teks">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <Sidebar />
        <div id="main-content" className="flex-1 p-4 md:p-6 xl:p-8">
          <Header />
          
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
            
            {/* Rute Latihan Error Pertemuan 6 */}
            <Route path="/error-400" element={
                <ErrorPage 
                    code="400" 
                    title="BAD REQUEST" 
                    description="Oops! It Seems You Follow Backlink." 
                    lottieUrl="https://embed.lottiefiles.com/animation/78973" 
                />
            } />

            <Route path="/error-401" element={
                <ErrorPage 
                    code="401" 
                    title="UNAUTHORIZED" 
                    description="Maaf, kamu tidak punya izin untuk melihat telur Dino ini." 
                    lottieUrl="https://embed.lottiefiles.com/animation/78973" 
                />
            } />

            <Route path="/error-403" element={
                <ErrorPage 
                    code="403" 
                    title="FORBIDDEN" 
                    description="Waduh! Area ini dijaga Dino, kamu dilarang masuk." 
                    lottieUrl="https://embed.lottiefiles.com/animation/78973" 
                />
            } />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;