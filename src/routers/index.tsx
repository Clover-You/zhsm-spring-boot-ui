/**
 * <p>
 * 路由
 * </p>
 *
 * @version: v1.0
 * @author: Clover
 * @create: 2022-11-26 12:57
 */
import { LoginAndRegisterPage } from '@/pages/user/Account'
import { LoginPage } from '@/pages/user/Account/components/Login'
import { RegisterPage } from '@/pages/user/register'
import { RouteObject, useRoutes } from 'react-router-dom'

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
        path: 'user/register',
        element: <RegisterPage />
      }
    ]
  }
]

export const Routers = () => useRoutes(routes)
