import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { MenuLateral } from './shared/components/';
import {DrawerProvider, AppThemeProvider } from './shared/contexts/';


function App() {
  

  return (
    <AppThemeProvider>
    <DrawerProvider>
    <BrowserRouter>

    
    <MenuLateral>
      <AppRoutes/>
    </MenuLateral>
    
    </BrowserRouter>
    </DrawerProvider>
  </AppThemeProvider> 
  )
}

export default App
