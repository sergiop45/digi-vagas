import { Routes, Route, Navigate } from 'react-router-dom';

const AppRoutes = () => {
  return (
    <Routes>

        <Route path='/home' element={<p>Pagina Home</p>} />
        <Route path='/usuarios' element={<p>Pagina Usuarios</p>} />
        <Route path='/vagas' element={<p>Pagina Vagas</p>} />
        <Route path='*' element={<Navigate to='/home' />} />

    </Routes>
  )
}

export default AppRoutes