
import { Layout } from 'antd';
import HomeTable from './table/HomeTable';
import MenuDashBoard from '../../../layout/dashboard/MenuDashBoard.js';
import './styles.scss';
const { Content } = Layout;

const Home = () => {
    return (
        <div style={{ position: 'relative' }}>
            <Layout   >
                <MenuDashBoard></MenuDashBoard>
                <Layout className="site-layout admin-home-site-layout" >
                    <Content style={{ margin: '0 16px' }} className="site-layout-background">
                        <HomeTable></HomeTable>
                    </Content>
                </Layout>
            </Layout>
        </div >
    );
};

export default Home;