import { CheckOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Col, Collapse, Input, Row, Select } from "antd";
import { useEffect, useState } from "react";
import '../styles.scss';
const { Option } = Select;

 
const { Panel } = Collapse;
function Setting() {

    const [panelOpening, setPanelOpening] = useState([]);
    const [panelChangePassOpening, setPanelChangePassOpening] = useState([]);

    useEffect(() => {
        console.log('panelOpening: ' + panelOpening);
    }, [panelOpening.length]);
    function callback(key) {
        setPanelOpening(key);
        console.log('key: ' + key);
    }

    function callbackChangePassword(key) {
        setPanelChangePassOpening(key);
        console.log('key: ' + key);
    }

    function handleChangeYear(value) {
        console.log(`selected ${value}`);
    }
    function handleChangeMonth(value) {
        console.log(`selected ${value}`);
    }
    function handleChangeDate(value) {
        console.log(`selected ${value}`);
    }
    const year = [];
    for (let i = 1700; i<= 2022; i++) {
        year.push(<Option key={i}>{i}</Option>);
    }

    const month = [];
    for (let i = 1; i <= 12; i++) {
        month.push(<Option key={i}>{i}</Option>);
    }

    const date = [];
    for (let i = 1; i <= 31; i++) {
        date.push(<Option key={i}>{i}</Option>);
    }

    return (
        <div className="setting-container-fluid">
            <Row justify="start">
                <Col span="auto" className="site-layout-title" ><strong>テナント一覧</strong></Col>
            </Row>
            <div className="setting-container" >
                <Collapse onChange={callback}
                    bordered={false}
                    className="setting-collapse-container"
                    estroyInactivePanel={true}
                >
                    <Panel header={
                        <Row className="setting-collapse-row" >
                            <Col span={4} className="setting-collapse-row-header">名前</Col>
                            <Col span={18} style={panelOpening?.includes("1") ? { display: 'block', color: '#989898' } : { display: 'none' }}> 名前を入力してください。</Col>
                            <Col span={18} style={panelOpening?.includes("1") ? { display: 'none' } : { display: 'block' }}>グエンホアンサン</Col>
                            <Col span={2} style={panelOpening?.includes("1") ? { display: 'none' } : { display: 'block' }}> <a href="#"  ><EditOutlined />編集</a></Col>
                        </Row>
                    }
                        active={false}
                        key="1"
                        showArrow={false}>
                        <Row className="setting-collapse-input-name">
                            <Col span={4}> </Col>
                            <Col span={3}><Input placeholder="グエンホアンサン" className="setting-collapse-input-name-input" /></Col>
                            <Col span={2}> </Col>
                        </Row>
                        <Row className="setting-collapse-row">
                            <Col span={4}> </Col>
                            <Col span={3}><Button type="link" style={{ paddingLeft: '0px' }}>キャンセル</Button>
                                <Button type="primary" style={{ borderRadius: '5px' }} >保存</Button></Col>
                            <Col span={2}> </Col>
                        </Row>
                    </Panel>
                    <Panel
                        header={
                            <Row className="setting-collapse-row" >
                                <Col span={4} className="setting-collapse-row-header">名前</Col>
                                <Col span={18} style={panelOpening?.includes("2") ? { display: 'block', color: '#989898', } : { display: 'none' }}>生年月日を選択してください。</Col>
                                <Col span={18} style={panelOpening?.includes("2") ? { display: 'none' } : { display: 'block' }}>1996/01/01</Col>
                                <Col span={2} style={panelOpening?.includes("2") ? { display: 'none' } : { display: 'block' }}> <a href="#"  ><EditOutlined />編集</a></Col>
                            </Row>
                        }
                        key="2" showArrow={false}>
                        <Row className="setting-collapse-input-date">
                            <Col span={4}> </Col>
                            <Col span={18} style={{ display: 'flex', }}>
                            <Select size='small' defaultValue={year[year?.length -1]}onChange={handleChangeYear} className='setting-select-year' >
                                    {year}
                                </Select>
                                <Select size='small'  defaultValue={month[month?.length  -1]} onChange={handleChangeMonth} className='setting-select-year' >
                                    {month}
                                </Select>
                                <Select size='small' defaultValue={date[date?.length  -1]} onChange={handleChangeDate} className='setting-select-year' >
                                    {date}
                                </Select>
                            </Col>
                            <Col span={2}> </Col>
                        </Row>
                        <Row className="setting-collapse-row">
                            <Col span={4}> </Col>
                            <Col span={3}><Button type="link" style={{ paddingLeft: '0px' }}>キャンセル</Button>
                                <Button type="primary" style={{ borderRadius: '5px' }} >保存</Button></Col>
                            <Col span={2}> </Col>
                        </Row>
                    </Panel>
                    <Panel header={
                        <Row className="setting-collapse-row" >
                            <Col span={4} className="setting-collapse-row-header">電子メールアドレス</Col>
                            <Col span={18} style={panelOpening?.includes("3") ? { display: 'block', color: '#989898' } : { display: 'none' }}> 電子メールアドレスを入力してください。</Col>
                            <Col span={18} style={panelOpening?.includes("3") ? { display: 'none' } : { display: 'block' }}>example@gmail.com</Col>
                            <Col span={2} style={panelOpening?.includes("3") ? { display: 'none' } : { display: 'block' }}> <a href="#"  ><EditOutlined />編集</a></Col>
                        </Row>
                    } key="3" showArrow={false}>
                        <Row className="setting-collapse-input-email">
                            <Col span={4}> </Col>
                            <Col span={3}><Input placeholder="グエンホアンサン" className="setting-collapse-input-name-input" /></Col>
                            <Col className="setting-collapse-active-email" span={2}><Button style={{ color: '#45D313', borderColor: '#45D313'}} shape="circle" icon={<CheckOutlined />} size='small'/> 有効なメール </Col>
                        </Row>
                        <Row className="setting-collapse-row">
                            <Col span={4}> </Col>
                            <Col span={3}><Button type="link" style={{ paddingLeft: '0px' }}>キャンセル</Button>
                                <Button type="primary" style={{ borderRadius: '5px' }} >保存</Button></Col>
                            <Col span={17}> </Col>
                        </Row>
                    </Panel>
                </Collapse>
            </div>
            
            <div className="setting-container-change-password">
            <Collapse  onChange={callbackChangePassword}
                    bordered={false}
                    className="setting-collapse-container"
                    estroyInactivePanel={true}
                >
                    <Panel header={
                        <Row className="setting-collapse-row" >
                            <Col span={4} className="setting-collapse-row-header">パスワード</Col>
                            <Col span={18} style={panelChangePassOpening?.includes("4") ? { display: 'block', color: '#989898' } : { display: 'none' }}>利用できる文字は8文字以上の半角英数字及び記号（「-」「_」「%」「$」「#」のみ）</Col>
                            <Col span={18} style={panelChangePassOpening?.includes("4") ? { display: 'none' } : { display: 'block' }}><p type='password'>**********</p></Col>
                            <Col span={2} style={panelChangePassOpening?.includes("4") ? { display: 'none' } : { display: 'block' }}> <a href="#"  ><EditOutlined />編集</a></Col>
                        </Row>
                    } key="4" showArrow={false}>
                        <Row className="setting-collapse-input-password">
                            <Col span={4} className="setting-collapse-input-password-text" ><p>現在のパスワード</p></Col>
                            <Col span={3}><Input type="password" placeholder="パスワード" className="setting-collapse-input-name-input" /></Col>
                            <Col span={2}></Col>
                        </Row>
                        <Row className="setting-collapse-input-password">
                            <Col span={4} className="setting-collapse-input-password-text"><p>新しいパスワード</p> </Col>
                            <Col span={3}><Input  type="password" placeholder="パスワード" className="setting-collapse-input-name-input" /></Col>
                            <Col span={2}></Col>
                        </Row>
                        <Row className="setting-collapse-input-password">
                            <Col span={4} className="setting-collapse-input-password-text"><p>新しいパスワードを確認</p> </Col>
                            <Col span={3}><Input type="password" placeholder="パスワード" className="setting-collapse-input-name-input" /></Col>
                            <Col span={2}></Col>
                        </Row>
                        <Row className="setting-collapse-row">
                            <Col span={4}> </Col>
                            <Col span={3}><Button type="link" style={{ paddingLeft: '0px' }}>キャンセル</Button>
                                <Button type="primary" style={{ borderRadius: '5px' }} >保存</Button></Col>
                            <Col span={17}> </Col>
                        </Row>
                    </Panel>
                </Collapse>
            </div>
        </div>
    );
}

export default Setting;
