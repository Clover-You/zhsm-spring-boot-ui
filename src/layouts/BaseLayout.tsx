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
import { memo } from 'react'

import { BlockHeader } from "@/layouts/components/BlockHeader";
import { Sider } from "@/layouts/components/Sider";
import { View } from "@/layouts/components/View";
import { Box, Grid } from '@mui/material';

export interface BaseLayoutProps {
}

export const BaseLayout = memo<BaseLayoutProps>(() => {
  return <>
    <Grid container>
      <Grid item xs>
        <BlockHeader />
      </Grid>
    </Grid>
    <Grid container>
      <Box
        component={Grid}
        item
        xs={3}
        display={{ xs: "none", md: "block" }}
      >
        <Sider />
      </Box>
      <Grid item xs>
        <View />
      </Grid>
    </Grid>
  </>
})