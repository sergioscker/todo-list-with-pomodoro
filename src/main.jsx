import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// styles
import './index.css';

// React Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

// pages
import HomePage from './pages/Home';

import { ToastContainer } from 'react-toastify';

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar="false"
        closeOnClick="true"
        pauseOnHover="true"
        draggable="true"
      />
      <HomePage />
    </StrictMode>
  </QueryClientProvider>,
);
