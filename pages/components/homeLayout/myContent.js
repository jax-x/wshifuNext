import { Layout, Breadcrumb } from 'antd';
import { useRouter } from 'next/router'
const { Content } = Layout;

const MyContent = (props) => {
    const router = useRouter()
    const path = router.pathname;
    return (
        <Content style={{ padding: '0 50px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item>主页</Breadcrumb.Item>
                {path.indexOf('list') !== -1 ? <Breadcrumb.Item>师傅列表</Breadcrumb.Item> : null}
                {path.indexOf('details') !== -1 ? <Breadcrumb.Item>详情</Breadcrumb.Item> : null}
            </Breadcrumb>
            <div className="site-layout-content">{props.children}</div>
            <style jsx>
                {
                    `.site-layout-content {
                        background: #fff;
                        padding: 24px;
                        min-height: 700px;
                      }`
                }
            </style>
        </Content>
    )
}

export default MyContent