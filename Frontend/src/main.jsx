import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom';
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'boxicons/css/boxicons.min.css';

import App from './App.jsx'
import { AuthProvider } from './context/AuthContext.jsx';
import { CartProvider } from './context/CartContext.jsx';

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <CartProvider>
          <App />
        </CartProvider>
      </AuthProvider>
    </BrowserRouter>,
  // </StrictMode>,
)