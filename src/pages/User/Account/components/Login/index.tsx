import {Button, Checkbox, Divider, FormControlLabel, FormGroup, Grid, Link, Snackbar, Typography} from "@mui/material";
import {Box} from "@mui/system";
import {memo, useState} from "react";
import {useForm} from "react-hook-form";
import {PasswordInput} from "@/components/input/PasswordInput";
import {Input} from "@/components/input/Input";

export const LoginPage = memo(() => {
  const {register, handleSubmit, formState} = useForm()
  const [alertState, setAlertState] = useState(false)

  /**
   * 表单提交
   * @param formData 表单数据
   */
  const onSubmit = (formData: any) => {
    console.log(formData);
  }
  /**
   * 监听忘记密码点击事件
   */
  const onForgetPasswordClick = () => {
    setAlertState(true)
  }

  return <>
    <Snackbar
      open={alertState}
      autoHideDuration={4000}
      onClose={(_, reason) => (reason === 'timeout' && setAlertState(false))}
      anchorOrigin={{vertical: 'top', horizontal: 'center'}}
      message={'HELLO WORLD!'}
    />
    <Box
      component="form"
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Input
            error={formState.errors?.userName != void 0}
            label="用户名"
            placeholder="请输入用户名"
            fullWidth
            helperText={formState.errors.userName?.message?.toString()}
            {...register('userName', {required: 'user name is required'})}
          />
        </Grid>
        <Grid item xs={12}>
          <PasswordInput
            label="密码"
            placeholder={'请输入密码'}
            autoComplete={'off'}
            fullWidth
            error={formState.errors?.password != void 0}
            helperText={formState.errors.password?.message?.toString()}
            {...register('password', {required: 'password is required'})}
          />
        </Grid>
        <Grid item xs={12}>
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
        </Grid>
        <Grid xs={12} item>
          <Button fullWidth type="submit" size="large" variant="contained">登录</Button>
        </Grid>
        <Grid xs={12} item>
          <Divider style={{margin: 0}} variant="middle" >
            <Typography>社交登录</Typography>
          </Divider>
        </Grid>
      </Grid>
    </Box>
  </>
})