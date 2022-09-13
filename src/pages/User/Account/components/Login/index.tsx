import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  Link,
  Snackbar,
  TextField
} from "@mui/material";
import {Box} from "@mui/system";
import {memo, useState} from "react";
import {useForm} from "react-hook-form";

export const LoginPage = memo(() => {
  const {register, handleSubmit, formState} = useForm()
  const [alertState, setAlertState] = useState(false)

  const onSubmit = (formData: any) => {
    console.log('hello world');
    console.log(formData);

  }

  /**
   * 监听忘记密码点击时间
   */
  const onForgetPasswordClick = () => {
    setAlertState(true)
  }

  return <>
    <Snackbar
      message={'hello world'}
      open={alertState}
      autoHideDuration={4000}
      onClose={(_, reason) => (reason === 'timeout' && setAlertState(false))}
      anchorOrigin={{vertical: 'top', horizontal: 'center'}}
    />
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { mt: 1, mb: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        error={formState.errors?.userName != void 0}
        label="用户名"
        placeholder="请输入用户名"
        helperText={formState.errors.userName?.message?.toString()}
        {...register('userName', {required: 'user name is required'})}
      />
      <TextField
        label="密码"
        {...register('password')}
      />
      <Grid
        justifyContent={'space-between'}
        container
        direction={'row'}
        alignItems={'center'}
      >
        <FormGroup row>
          <FormControlLabel control={<Checkbox />} label={'记住密码'}/>
        </FormGroup>
        <Link href={'#'} underline={'none'} onClick={onForgetPasswordClick}>忘记密码？</Link>
      </Grid>
      <Button fullWidth type="submit" size="large" variant="contained">登录</Button>
    </Box>
  </>
})