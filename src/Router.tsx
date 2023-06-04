import { Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'
import { History } from './pages/History'

import { Repos } from './pages/Repos'
import { Repo } from './pages/Repo'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/repos" element={<Repos />} />
        <Route path="/repos/*" element={<Repo />} />
      </Route>
    </Routes>
  )
}
