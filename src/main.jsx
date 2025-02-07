import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

// styles
import './index.css';

// React Query
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

// page
import HomePage from './pages/Home';

createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <StrictMode>
      <HomePage />
    </StrictMode>
  </QueryClientProvider>,
);
