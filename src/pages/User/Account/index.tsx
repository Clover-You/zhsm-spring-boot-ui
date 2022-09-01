import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, Tabs, Tab } from '@mui/material';
import { LoginPage } from './components/Login';
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
export const UserAccountPage = React.memo(() => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const tabRender = () => {
    return <>
      <CardHeader
        subheader={
          <Tabs aria-label="basic tabs example" value={value} onChange={handleChange}>
            <Tab label="登录" {...a11yProps(0)} />
            <Tab label="注册" {...a11yProps(1)} />
          </Tabs>
        }
      />
    </>
  }
  return (
    <Card sx={{ maxWidth: 345 }}>
      {tabRender()}
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