/**
 * <p>
 * 路由
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2022-11-26 12:57
 */
import { LoginAndRegisterPage } from '@/components/LoginBackground'
import { LoginPage } from '@/pages/Login'
import { RegisterPage } from '@/pages/Login/Register'
import { Navigate, RouteObject, useRoutes } from 'react-router-dom'

const routes: RouteObject[] = [
  {
    path: '/',
    element: <LoginAndRegisterPage />,
    children: [
      {
        path: 'login',
        element: <LoginPage />
      },
      {
        path: 'register',
        element: <RegisterPage />
      },
      {
        path: '/',
        element: <Navigate replace to={'/login'} />
      }
    ]
  }
]

export const Routers = () => useRoutes(routes)
