import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import { ArrivalCheckPage, NotFoundPage } from '../page'
import { LoginPgae } from '../page/login'

/**
 * URL 기반 브라우저 라우터를 제공하는 컴포넌트.
 *
 * @returns {React.BrowserRouter} 브라우저 라우터.
 */

const Router = () => (
  <BrowserRouter>
    <Routes>
      {/* 도착확인 라우팅 */}
      <Route path="/" element={<LoginPgae />}></Route>
      <Route element={<ArrivalCheckPage />} path="/arrival">
        <Route element={<ArrivalCheckPage />} path="/arrival/check" />
      </Route>
      {/* 공통 라우팅 */}
      <Route element={<Navigate to="/404" />} path="*" />
      <Route element={<NotFoundPage />} path="/404" />
    </Routes>
  </BrowserRouter>
)

export { Router }
