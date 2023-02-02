import React from 'react'
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'

import { ArrivalCheckPage, NotFoundPage } from '../page'

const Router = () => (
  <BrowserRouter>
    <Routes>
      {/* TODO: 기본 페이지 추가 */}
      {/* 도착확인 라우팅 */}
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
