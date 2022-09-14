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
import {FormControl, FormHelperText, InputLabel, OutlinedInput} from "@mui/material";
import {FormControlTypeMap} from "@mui/material/FormControl/FormControl";
import {OutlinedInputProps} from "@mui/material/OutlinedInput/OutlinedInput";

type FormControlProps = FormControlTypeMap['props']
type BaseProps = FormControlProps & OutlinedInputProps

interface PasswordInputBaseProps {
  label?: string
  fullWidth?: boolean
  helperText?: string
  styleType?: InputStyleType
}

/**
 * 输入框Props
 */
export type InputProps = Omit<BaseProps, keyof PasswordInputBaseProps> & PasswordInputBaseProps

/**
 * 密码输入框
 */
export const Input = forwardRef<any, InputProps>((props, ref) => {
  /**
   * 组件随机id
   */
  const [id] = useState(new Date().getTime().toString())
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

  /**
   * 在props中匹配文本框风格
   */
  const getVariantInProps = () => {
    if (props.styleType == InputStyleType.MATERIAL_DEFAULT) return 'outlined'
    if (props.styleType == InputStyleType.FILLED) return 'filled'
    return 'outlined'
  }
  /**
   * 标签组件
   */
  const MyInputLabel = () => {
    if (props.styleType === InputStyleType.NORMAL) return null
    return <InputLabel htmlFor={inputProps.id ?? id}>{props.label}</InputLabel>
  }

  return <>
    <FormControl
      {...formControlProps}
      className={props.className}
      variant={getVariantInProps()}
    >
      <MyInputLabel/>
      <OutlinedInput
        {...inputProps}
        ref={ref}
        id={inputProps.id ?? id}
        label={props.styleType === InputStyleType.NORMAL ? null : props.label}
        value={props.value}
      />
      <FormHelperText>{props.helperText}</FormHelperText>
    </FormControl>
  </>
})

/**
 * 文本框风格类型
 */
export enum InputStyleType {
  NORMAL,
  MATERIAL_DEFAULT,
  FILLED
}

/**
 * 文本框默认props
 */
Input.defaultProps = {
  styleType: InputStyleType.NORMAL
}
