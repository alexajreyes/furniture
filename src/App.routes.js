import React, { Suspense, lazy } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import DashboardHomePage from './view/DashboardHomePage'
import NotFound from './view/NotFound'

import { HomePage, CarPage } from './utils/path'

export default function AppRoutes() {
  const Home = lazy(() => import('./view/HomePageView.js'))
  const CarPageView = lazy(() => import('./view/CarPageView'))
  const ProductByCategories = lazy(() =>
    import('./component/ProductByCategories')
  )
  return (
    <Suspense fallback={<h3>Cargando...</h3>}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<DashboardHomePage />}>
            <Route path={HomePage} element={<Home />}>
              <Route
                path="product/:product"
                element={<ProductByCategories />}
              />
            </Route>
            <Route path={CarPage} element={<CarPageView />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </Suspense>
  )
}
