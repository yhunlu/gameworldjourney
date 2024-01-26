import { createBrowserRouter } from 'react-router-dom';
import { ErrorPage, GameDetailPage, HomePage, Layout } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'games/:slug',
        element: <GameDetailPage />,
      },
    ],
  },
]);

export default router;
