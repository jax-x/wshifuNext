import { Descriptions } from 'antd';
import MyLayout from '../homeLayout/myLayout'

const ListDetails = (props) => {
    return (
        <MyLayout>
            <Descriptions title="详情信息">
                <Descriptions.Item label="姓名">{props.data.name}</Descriptions.Item>
                <Descriptions.Item label="星级">{`${props.data.level}`}</Descriptions.Item>
                <Descriptions.Item label="地址">{props.data.crumbName}</Descriptions.Item>
                <Descriptions.Item label="服务类型">{props.data.serveTypes}</Descriptions.Item>
                <Descriptions.Item label="评分">{props.data.score}</Descriptions.Item>
                <Descriptions.Item label="师傅证件">
                    <img alt=".." src={props.data.portrait} style={{ width:150,height:150 }} />
                </Descriptions.Item>
            </Descriptions>
        </MyLayout>
    )
}

ListDetails.getInitialProps = async function (context) {
    const { id } = context.query;
    const res = await fetch("https://worker-api.wanshifu.com/master/details", {
        method: "POST",
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `masterId=${id}`
    })
    const data = await res.json();
    // return {
    //     shows: data
    // }
    return { ...data };
}

export default ListDetails