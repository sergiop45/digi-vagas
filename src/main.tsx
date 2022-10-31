import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import MenuLateral from './shared/components/menuLateral';
import { AppThemeProvider } from './shared/contexts/ThemeContext';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <AppThemeProvider>
    <BrowserRouter>

    <MenuLateral>
    <AppRoutes/>
    </MenuLateral>
    
    </BrowserRouter>
  </AppThemeProvider>  
  
    
  
)
