import { List, Card, Row, Col } from 'antd';
import Link from 'next/link'
import MyLayout from '../homeLayout/myLayout'

const { Meta } = Card;

const MyList = (props) => {
    const data = props.shows.data.list;
    console.log(data,'data?');
    return (
        <MyLayout>
            <Row type='flex' justify='space-around' align='top'>
                {data.map(it=>{
                    return (
                        <Col span={12} style={{ marginBottom:10 }}>
                            <Link href={`/components/details/litsDetails?id=${it.accountId}`} as={`/list/details`}>
                                <img src={it.ironDir} style={{ width:120,height:120,cursor:'pointer' }} />
                            </Link>

                            <span style={{ height:120,display:'inline-block',marginLeft:10,paddingTop:10 }}>
                                <p style={{ fontWeight:700,fontSize:18 }}>姓名：{it.name}</p>
                                <p>服务评分：{it.starsAvg}分</p>
                                <p>服务次数：<span style={{ color:'darkgreen' }}>{it.workTimes}</span>次</p>
                            </span>
                        </Col>
                    )
                })
            
            }
            </Row>
            
            {/* <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 6,
                    xxl: 3,
                }}
                dataSource={data}
                renderItem={(item) => (
                    <List.Item>
                        <Link href={`/components/details/litsDetails?id=${item.accountId}`} as={`/list/details`}>
                            <Card
                                hoverable
                                style={{ width: 240 }}
                                cover={<img alt="example" src={item.ironDir} />}
                            >
                                <Meta title={item.name} description={`${item.level}万等级`} />
                            </Card>
                        </Link>
                    </List.Item>
                )}
            /> */}
            <style jsx>
                {
                    `.shifu-img{
                        width : 200px;
                        height : 200px;
                    }`
                }
            </style>
        </MyLayout>
    )
}

MyList.getInitialProps = async function () {
    const res = await fetch('https://worker-api.wanshifu.com/master/listinfo');
    const data = await res.json();
    return { shows: data }
}

export default MyList