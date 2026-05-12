import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";

// Lazy Imports yang sudah diperbaiki
const Dashboard = React.lazy(() => import("./pages/Dashboard"));
const Orders = React.lazy(() => import("./pages/Orders"));
const Customers = React.lazy(() => import("./pages/Customers"));
const Products = React.lazy(() => import("./pages/Products"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"));
const NotFound = React.lazy(() => import("./pages/NotFound"));
const MainLayout = React.lazy(() => import("./layout/MainLayout"));
const AuthLayout = React.lazy(() => import("./layout/AuthLayout"));
const ErrorPage = React.lazy(() => import("./pages/ErrorPage"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Register = React.lazy(() => import("./pages/auth/Register"));
const Forgot = React.lazy(() => import("./pages/auth/Forgot"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* --- MAIN APP ROUTES (Dengan Sidebar) --- */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          
          {/* Route Products & Dynamic Route Product Detail */}
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} /> 

          {/* Error Pages */}
          <Route path="/error-400" element={ <ErrorPage code="400" title="BAD REQUEST" description="Oops! It Seems You Follow Backlink." lottieUrl="https://embed.lottiefiles.com/animation/78973" /> } />
          <Route path="/error-401" element={ <ErrorPage code="401" title="UNAUTHORIZED" description="Maaf, kamu tidak punya izin untuk melihat telur Dino ini." lottieUrl="https://embed.lottiefiles.com/animation/78973" /> } />
          <Route path="/error-403" element={ <ErrorPage code="403" title="FORBIDDEN" description="Waduh! Area ini dijaga Dino, kamu dilarang masuk." lottieUrl="https://embed.lottiefiles.com/animation/78973" /> } />

          {/* NotFound Route */}
          <Route path="*" element={<NotFound />} />
        </Route>

        {/* --- AUTH ROUTES --- */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;