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
 * 输入框
 * </p>
 * @author Clover
 * @email cloveryou02@163.com
 * @create 2022-09-14 9:27
 */
import {forwardRef, useState} from "react";
import {FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput} from "@mui/material";
import {Visibility, VisibilityOff} from "@mui/icons-material";
import {FormControlTypeMap} from "@mui/material/FormControl/FormControl";
import {OutlinedInputProps} from "@mui/material/OutlinedInput/OutlinedInput";

type FormControlProps = FormControlTypeMap['props']
type BaseProps = FormControlProps & OutlinedInputProps

interface PasswordInputBaseProps {
  label?: string
  fullWidth?: boolean
  helperText?: string
  styleType?: InputType
}

export type InputProps = Omit<BaseProps, keyof PasswordInputBaseProps> & PasswordInputBaseProps

export interface InputEndAdornmentProps {
  onClick?: () => void
  show?: boolean
}
const InputEndAdornment = (props: InputEndAdornmentProps) => {
  return <>
    <InputAdornment position="end">
      <IconButton
        aria-label="toggle password visibility"
        onClick={props.onClick}
      >
        {props.show ? <Visibility /> : <VisibilityOff />}
      </IconButton>
    </InputAdornment>
  </>
}
/**
 * 密码输入框
 */
export const Input = forwardRef<any, InputProps>((props, ref) => {
  const formControlProps: FormControlProps = {
    fullWidth: props.fullWidth,
    error: props.error
  }
  const inputProps: OutlinedInputProps = {
    fullWidth: props.fullWidth,
    placeholder: props.placeholder,
    endAdornment: props.endAdornment,
    value: props.value,
    error: props.error,
    type: props.type,
    onChange: props.onChange,
    onInput: props.onInput,
    onBlur: props.onBlur,
    name: props.name,
    onFocus: props.onFocus,
  }

  const [id] = useState(new Date().getTime().toString())

  return <>
    <FormControl
      {...formControlProps}
      className={props.className}
      variant={props.styleType == InputType.MATERIAL_DEFAULT ? 'outlined' : props.styleType == InputType.FILLED ? 'filled' : 'outlined'}
    >
      {props.styleType === InputType.NORMAL ? null : <InputLabel htmlFor={inputProps.id ?? id}>{props.label}</InputLabel>}
      <OutlinedInput
        {...inputProps}
        ref={ref}
        id={inputProps.id ?? id}
        label={props.styleType === InputType.NORMAL ? null : props.label}
        value={props.value}
      />
      <FormHelperText>{props.helperText}</FormHelperText>
    </FormControl>
  </>
})

export enum InputType {
  NORMAL,
  MATERIAL_DEFAULT,
  FILLED
}

Input.defaultProps = {
  styleType: InputType.NORMAL
}
