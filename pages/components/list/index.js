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
                        <Col span={12}>
                            <div style={{ marginBottom:30 }}>
                                <div style={{ display:'inline-block' }}>
                                    <Link href={`/components/details/litsDetails?id=${it.accountId}`} as={`/list/details`}>
                                        <img src={it.ironDir} style={{ width:120,height:120,cursor:'pointer' }} />
                                    </Link>
                                </div>
                                <div style={{ marginLeft:10,display:'inline-block',verticalAlign:'middle' }} >
                                    <p style={{ fontWeight:700,fontSize:18 }}>姓名：{it.name}</p>
                                    <p>服务评分：{it.starsAvg}分</p>
                                    <p>服务次数：<span style={{ color:'darkgreen' }}>{it.workTimes}</span>次</p>
                                </div>
                            </div>
                        </Col>
                    )
                })
            
            }
            </Row>
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