
import { Route, Routes } from 'react-router-dom'
import SettingsDashboard from './pages/settings/SettingsDashboard'
import HomeDashboard from './features/home/HomeDashboard'
import NotFound from './pages/NotFound'
import Layout from './components/layout/Layout'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeDashboard />} />
        <Route path='settings' element={<SettingsDashboard />} />
        <Route path='*' element={<NotFound />}/>
      </Route>
    </Routes>
    </>
  )
}




export default App
