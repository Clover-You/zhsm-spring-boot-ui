import { Input, FormControl, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import { memo } from "react";
import { useForm } from "react-hook-form";

export const LoginPage = memo(() => {
  const {register, handleSubmit, formState} = useForm()

  const onSubmit = (formData: any) => {
    console.log('hello world');
    console.log(formData);
    
  }

  return <>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        label="Error"
        defaultValue="Hello World"
        {...register('userName')}
      />
      <TextField
        error={formState.errors?.userName != void 0}
        label="用户名"
        placeholder="请输入用户名"
        defaultValue="Hello World"
        helperText={formState.errors.userName?.message?.toString()}
        {...register('userName', {required: 'user is required'})}
      />
      <Button type="submit">登录</Button>
    </Box>
  </>
})