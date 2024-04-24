import { Navigate, useRoutes } from 'react-router-dom';
// layouts
import DashboardLayout from './layouts/dashboard';
import SimpleLayout from './layouts/simple';
//
import FinePage from './pages/FinePage';
import PaymentPage from './pages/PaymentPage';
import LoginPage from './pages/LoginPage';
import Page404 from './pages/Page404';
import BalancePage from './pages/BalancePage';
import RechargePage from './pages/RechargePage';
import DashboardAppPage from './pages/DashboardAppPage';

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: 'app', element: <DashboardAppPage /> },
        { path: 'user', element: <PaymentPage /> },
        { path: 'products', element: <BalancePage /> },
        { path: 'blog', element: <FinePage /> },
        { path: 'recharge', element: <RechargePage /> },

      ],
    },
    {
      path: 'login',
      element: <LoginPage />,
    },
    {
      element: <SimpleLayout />,
      children: [
        { element: <Navigate to="/dashboard/app" />, index: true },
        { path: '404', element: <Page404 /> },
        { path: '*', element: <Navigate to="/404" /> },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ]);

  return routes;
}
