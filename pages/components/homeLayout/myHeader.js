import { Layout, Menu } from 'antd';
import Link from 'next/link'
const { Header } = Layout;
const MyHeader = () => {
    return (
        <Header>
            <Menu 
                theme="light" 
                mode="horizontal " 
                defaultSelectedKeys={['1']}
            >
                <Menu.Item key="1">
                    <Link href='/components/index' as='index'>
                        <a>主页</a>
                    </Link>
                </Menu.Item>
                <Menu.Item key="2">
                    <Link href='/components/list' as='list'>
                        <a>师傅列表</a>
                    </Link>
                </Menu.Item>
            </Menu>
        </Header>
    )
}

export default MyHeader

