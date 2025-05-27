import { Outlet } from 'react-router';
import Layout from '../components/layouts/Layout';
import Aside from '../components/layouts/Aside';
import Header from '../components/layouts/Header';
import MainContent from '../components/layouts/MainContent';
import Footer from '../components/layouts/Footer';
import Text from '../components/text/Text';
import Icon from '../components/icons/Icon';
import { HomeIcon } from '@heroicons/react/24/solid';

const Main = () => {
  return (
    <Layout hasSider={true}>
      <Aside className="h-screen w-64 overflow-x-hidden overflow-y-auto bg-gray-300">
        <Text textType={'span'} size="base">
          Sidebar
        </Text>
        <Icon iconName={<HomeIcon />} />
      </Aside>
      <Layout className="h-screen w-screen overflow-y-auto">
        <Header>Header</Header>
        <MainContent className={'flex-auto'}>
          <Outlet />
        </MainContent>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};

export default Main;
