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
 * 基础布局
 * </p>
 * @author Clover
 * @email cloveryou02@163.com
 * @create 2022-08-30 9:45
 */
import {memo} from 'react'
import {createStyles, Grid, makeStyles, Paper, Theme} from "@material-ui/core";

import {BlockHeader} from "@/layouts/components/BlockHeader";
import {Sider} from "@/layouts/components/Sider";
import {View} from "@/layouts/components/View";

export interface BaseLayoutProps {}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);
export const BaseLayout = memo<BaseLayoutProps>(() => {
  const classes = useStyles();
  return <div className={classes.root}>
    <Grid container>
      <Grid item xs={12}>
          <BlockHeader/>
      </Grid>
    </Grid>
    <Grid container>
      <Grid item xs={3}>
        <Paper className={classes.paper}>
          <Sider/>
        </Paper>
      </Grid>
      <Grid item xs={9}>
        <Paper className={classes.paper}>
          <View/>
        </Paper>
      </Grid>
    </Grid>
  </div>
})