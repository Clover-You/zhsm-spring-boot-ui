import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import {Tab, Tabs} from '@mui/material';
import {LoginPage} from './components/Login';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

/**
 * 选项卡面板
 * @param props 属性
 */
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tab panel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && children}
    </div>
  );
}

/**
 * tab 共同props
 */
function allyProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export const UserAccountPage = React.memo(() => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const TabRender = () => {
    return <>
      <CardHeader
        subheader={
          <Tabs aria-label="basic tabs example" value={value} onChange={handleChange}>
            <Tab label="登录" {...allyProps(0)} />
            <Tab label="注册" {...allyProps(1)} />
          </Tabs>
        }
      />
    </>
  }

  return (
    <Card sx={{ width: 525, height: 502 }}>
      <TabRender/>
      <CardContent>
        <TabPanel value={value} index={0}>
          <LoginPage />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
      </CardContent>
    </Card>
  );
})