import MyHeader from './myHeader';
import MyContent from './myContent'
import MyFooter from './myFooter'
import List from '../list/index';
import { Layout} from 'antd';
const MyLayout = (props) => (
    <Layout className="layout">
        <MyHeader/>
        <MyContent>
            {props.children}
        </MyContent>
        <MyFooter/>
        <style jsx>
            {
                `#components-layout-demo-top .logo {
                    width: 120px;
                    height: 31px;
                    background: rgba(255, 255, 255, 0.2);
                    margin: 16px 24px 16px 0;
                    float: left;
                  }`
            }
            </style>
    </Layout>
)

export default MyLayout