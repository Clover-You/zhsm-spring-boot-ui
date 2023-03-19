/**
 * █████▒█      ██  ▄████▄   ██ ▄█▀     ██████╗ ██╗   ██╗ ██████╗
 * ▓██   ▒ ██  ▓██▒▒██▀ ▀█   ██▄█▒      ██╔══██╗██║   ██║██╔════╝
 * ▒████ ░▓██  ▒██░▒▓█    ▄ ▓███▄░      ██████╔╝██║   ██║██║  ███╗
 * ░▓█▒  ░▓▓█  ░██░▒▓▓▄ ▄██▒▓██ █▄      ██╔══██╗██║   ██║██║   ██║
 * ░▒█░   ▒▒█████▓ ▒ ▓███▀ ░▒██▒ █▄     ██████╔╝╚██████╔╝╚██████╔╝
 * ▒ ░   ░▒▓▒ ▒ ▒ ░ ░▒ ▒  ░▒ ▒▒ ▓▒     ╚═════╝  ╚═════╝  ╚═════╝
 * ░     ░░▒░ ░ ░   ░  ▒   ░ ░▒ ▒░
 * ░ ░    ░░░ ░ ░ ░        ░ ░░ ░
 * ░     ░ ░      ░  ░
 * Copyright 2023 Clover You.
 * <p>
 * 为store actions创建代理
 * </p>
 * @author Clover You
 * @email cloveryou02@163.com
 * @create 2023/3/19 17:59
 */
import { useStoreDispatch } from '@/redux/hooks'
import { Slice } from '@reduxjs/toolkit/src/createSlice'
import { AsyncThunk } from '@reduxjs/toolkit'
import { AsyncAction } from '@/types'

type AsyncThunkObject = { [key: string]: AsyncThunk<any, any, any> }

export type CreateStoreProxyReturn<T extends Slice['actions'], A extends AsyncThunkObject> =
  T & AsyncAction<A>

export const createStoreProxy = <
  T extends Slice['actions'],
  A extends AsyncThunkObject = {}
>(
  actions: T,
  asyncActions: A
) => {
  const dispatch = useStoreDispatch()
  return new Proxy({ ...actions, ...(asyncActions as unknown as AsyncAction<A> ?? {}) }, {
    get(target, propKey: string, receiver): any {
      const asyncFn = propKey.endsWith('Async')

      if (propKey.endsWith('Async')) {
        propKey = propKey.replace(/Async$/, '')
      }

      let propValue = Reflect.get(asyncFn ? asyncActions : target, propKey, receiver)
      if (typeof propValue === 'function') {
        return (args: any[]) => dispatch(propValue(args))
      }
      return propValue
    },
  })

}
