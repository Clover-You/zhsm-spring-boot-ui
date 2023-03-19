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
 * redux hooks
 * </p>
 * @author Clover You
 * @email cloveryou02@163.com
 * @create 2023/3/19 15:50
 */
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootStore } from '@/redux/index'

import { actions as userActions, IUserStore, asyncActions } from '@/redux/modules/user'
import { createStoreProxy, CreateStoreProxyReturn } from '@/redux/createStoreProxy'
import { AsyncAction } from '@/types'

export const useStoreDispatch: () => AppDispatch = useDispatch
export const useStoreSelector: TypedUseSelectorHook<RootStore> = useSelector

export const useUserStore = (): [IUserStore, CreateStoreProxyReturn<typeof userActions, typeof asyncActions>] => {
  const state: IUserStore = useStoreSelector(state => state.user)
  const actionsProxy = createStoreProxy(userActions, asyncActions)
  return [state, actionsProxy]
}
