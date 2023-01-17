import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AuthProvider from './AuthProvider/AuthProvider';
import { QueryClient, QueryClientProvider} from 'react-query'
 
 const queryClient = new QueryClient()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <App />
    </AuthProvider>
    </QueryClientProvider>
  </React.StrictMode>
);