import { useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Dashboard } from '../pages';
import Home from '../pages/Home';
import { useDrawerContext } from '../shared/contexts';

const AppRoutes = () => {

  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {

      setDrawerOptions([
        {
          icon: 'home',
          path: '/home',
          label: 'home',
        },
        {
          icon: 'star',
          path: '/vagas',
          label: 'vagas',
        },
        {
          icon: 'home',
          path: '/usuarios',
          label: 'usuarios',
        }
      ])

  }, []);

  return (
    
    <Routes>

        <Route path='/home' element={<Home />} />
        <Route path='/usuarios' element={<Dashboard/>} />
        <Route path='/vagas' element={<p>Pagina Vagas</p>} />
        <Route path='*' element={<Navigate to='/home' />} />

    </Routes>
    
  )
}

export default AppRoutes