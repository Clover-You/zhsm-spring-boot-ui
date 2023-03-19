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
 * 用户信息
 * </p>
 * @author Clover You
 * @email cloveryou02@163.com
 * @create 2023/3/19 01:47
 */
import { createSlice, createAsyncThunk, AsyncThunk } from '@reduxjs/toolkit'

export interface IUserStore {
  info?: string

  count: number
}

const initialState: IUserStore = {
  info: '',
  count: 0
}

export const login = createAsyncThunk('login1', async (arg, thunkAPI) => {
  return 'hello'
})
export const asyncActions = {
  login
}
const userStore = createSlice({
  name: 'user-store',
  initialState,
  reducers: {
    increment(state) {
      state.count++
      console.log('hello')
    }
  },
  extraReducers: {
    [`${login.fulfilled}`]: (state, action) => {
      state.count++
    }
  }
})

export type UserStoreDispatch = typeof userStore.actions

export const actions = userStore.actions

// export const useUserStore: () => UserStoreDispatch = useDispatch
//
// useUserStore().add

export default userStore.reducer
