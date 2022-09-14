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
 * Copyright 2022 Clover You.
 * <p>
 * 密码输入框
 * </p>
 * @author Clover
 * @email cloveryou02@163.com
 * @create 2022-09-14 11:41
 */
import {forwardRef, ReactNode, useState} from "react";
import {Input, InputProps} from "@/components/input/Input";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {IconButton, InputAdornment} from "@mui/material";

export interface PasswordInputProps extends InputProps{
  showAdornment?: ReactNode
  hideAdornment?: ReactNode
}

export const PasswordInput = forwardRef<any, PasswordInputProps>((props, ref) => {
  const [showPass, setShowPass] = useState(false)
  return <>
    <Input
      className={'MuiInput-root'}
      ref={ref}
      {...props}
      type={showPass ? 'text' : 'password'}
      endAdornment={
        <InputAdornment position={'end'}>
          <IconButton onClick={() => setShowPass(!showPass)}>
            {showPass ? props.showAdornment : props.hideAdornment}
          </IconButton>
        </InputAdornment>
      }
    />
  </>
})

PasswordInput.defaultProps = {
  hideAdornment: <Visibility />,
  showAdornment: <VisibilityOff />,
}