import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from '@/layouts/MainLayout/MainLayout';
import { LoadingSpinner } from '@/components/common/Loading/Spinner';
import { useGlobalSlice } from '@/slice';
import { ROUTES } from '@/config/routes';

// Lazy loaded components
const UserProfileComponent = lazy(() => import('@/features/userProfile/UserProfile'));
const UserDetailComponent = lazy(() => import('@/features/userDetail/UserDetail'));
const NotFoundPage = lazy(() => import('@/components/common/NotFound/NotFound'));

// Route type definition
type AppRoute = {
  path: string;
  element: React.ReactNode;
  children?: AppRoute[];
};

// Route configuration
const routes: AppRoute[] = [
  {
    path: ROUTES.HOME,
    element: <UserProfileComponent />,
  },
  {
    path: ROUTES.USER_DETAIL,
    element: <UserDetailComponent />,
  },
  {
    path: ROUTES.NOT_FOUND,
    element: <NotFoundPage />,
  },
];

// Route renderer component
const RouteRenderer = ({ routes }: { routes: AppRoute[] }) => {
  return (
    <>
      {routes.map(({ path, element, children }) => (
        <Route key={path} path={path} element={element}>
          {children && <RouteRenderer routes={children} />}
        </Route>
      ))}
    </>
  );
};

function RouterApp() {
  useGlobalSlice();
  const routeElements = RouteRenderer({ routes });

  return (
    <MainLayout>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes>
          {routeElements}
          <Route path="*" element={<Navigate to={ROUTES.NOT_FOUND} replace />} />
        </Routes>
      </Suspense>
    </MainLayout>
  );
}

export default RouterApp;
