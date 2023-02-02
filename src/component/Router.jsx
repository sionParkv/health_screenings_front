import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { NotFoundPage } from '../page'

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<NotFoundPage />} path="/*" />
    </Routes>
  </BrowserRouter>
)

export { Router }
