import { DeleteOutlined, EditOutlined, SettingOutlined } from "@ant-design/icons";
import { Button, Card, Col, Input, Modal, Pagination, Row, Select, Table, Tag } from "antd";
import { Option } from "antd/lib/mentions";
import { useState } from "react";
import { localeEmptyDashboard, userStatus } from "../../../../common/constains";
import { dataUser } from '../../../../common/data';
import { getKey } from "../../../../helper/get";
import '../styles.scss';

function HomeTable() {
    const [visible, setVisible] = useState(false);
    const [visibleEditModal, setVisibleEditModal] = useState(false);
    const [modalEditData, setModalEditData] = useState();

    const showModal = (record) => {
        setModalEditData(record);
        console.log(record);
        setVisibleEditModal(true);
    };

    const columns = [
        {
            title: '#',
            dataIndex: 'key',
            key: 'key',
            className: "columnId",
        },
        {
            title: 'ユーザー名',
            dataIndex: 'name',
            key: 'name',
            render: text => <a>{text}</a>,
            className: "column"
        },
        {
            title: 'メールアドレス',
            dataIndex: 'email',
            key: 'email',
            className: "column"
        },
        {
            title: '管理システム利用',
            key: 'tags',
            dataIndex: 'tags',
            render: tag => (
                <>
                    <Tag color={tag === userStatus.invalid ? 'volcano' : 'green'} key={tag}>
                        {tag.toUpperCase()}
                    </Tag>
                    <Tag style={{ color: '#4484FF', float: 'right', borderRadius: '5px' }}
                        color='#E6EEFF' key={getKey()}>
                        <SettingOutlined /> パスワード再発行
                    </Tag>
                </>
            ),
            className: "column"
        },
        {
            title: '',
            key: 'action',
            render: (text, record) => (
                <>
                    <EditOutlined className="edit-out-lined" onClick={

                        () => showModal(record)} />
                </>
            ),
            className: "column",
        },
        {
            title: '',
            key: 'action',
            render: (text, record) => (
                <>
                    <DeleteOutlined className="delete-out-lined" />
                </>
            ),
            className: "column",
        },
    ];

    function onShowSizeChange(current, pageSize) {
        console.log(current, pageSize);
    }

    function onChange(value) {
        console.log(`selected ${value}`);
    }

    function onSearch(val) {
        console.log('search:', val);
    }

    return (
        <div >
            <Row justify="start">
                <Col span="auto" className="site-layout-title" ><strong>テナント一覧</strong></Col>
            </Row>
            <Row justify="start">
                <Col span="8" className="site-layout-title"> <Input placeholder="検索" className="site-layout-input"></Input></Col>
                <Col span="4" className="site-layout-title-right" offset={12} ><Button type="primary" block className="site-layout-button-right" onClick={() => setVisible(true)} >
                    +新規テナント作成
                </Button></Col>
            </Row>

            <Modal
                title="新規ユーザー作成"
                centered
                visible={visible}
                onOk={() => setVisible(false)}
                onCancel={() => setVisible(false)}
                width={1000}
                footer={[
                    <Button
                        key="434"
                        type="primary"
                        onClick={() => setVisible(false)}
                        className='modal-button-ok'
                    >確定</Button>,
                    <Button
                        key="12121"
                        onClick={() => setVisible(false)}
                        className='modal-button-cancel'
                    >キャンセル</Button>,
                ]}
            >
                <Row>
                    <Col span={12}>
                        <p className="modal-title">ユーザー名</p>
                        <Input className="modal-input" placeholder="ユーザー名" />
                    </Col>
                    <Col span={12}>
                        <p className="modal-title" >名前</p>
                        <Input className="modal-input" placeholder="名前" />
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <p className="modal-title">電子メールアドレス</p>
                        <Input className="modal-input" placeholder="電子メールアドレス" />
                    </Col>
                    <Col span={12}>
                        <p className="modal-title">管理システム利用</p>
                        <Select
                            className="modal-select"
                            showSearch

                            optionFilterProp="children"
                            onChange={onChange}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="許可">許可</Option>
                            <Option value="不許可">不許可</Option>
                        </Select>
                    </Col>
                </Row>

            </Modal>
            <Table className="site-layout-title-table"
                columns={columns}
                dataSource={dataUser}
                pagination={{ position: ['none', 'none'] }}
                indentSize={10}
                locale={localeEmptyDashboard}
            />
            {
                dataUser?.length ? <Pagination
                    showSizeChanger
                    onShowSizeChange={onShowSizeChange}
                    defaultCurrent={3}
                    total={500}
                    style={{ float: 'right', marginRight: '30px' }}
                /> : ''
            }

            {/* modal */}

            <Modal
                title="ユーザー編集"
                centered
                visible={visibleEditModal}
                onOk={() => setVisibleEditModal(false)}
                onCancel={() => setVisibleEditModal(false)}
                width={1000}
                footer={[
                    <Button
                        key="434"
                        type="primary"
                        onClick={() => setVisibleEditModal(false)}
                        className='modal-button-ok'
                    >確定</Button>,
                    <Button
                        key="12121"
                        onClick={() => setVisibleEditModal(false)}
                        className='modal-button-cancel'
                    >キャンセル</Button>,
                ]}
            >
                <Row>
                    <Col span={12}>
                        <p className="modal-title">ユーザー名</p>
                        <Input className="modal-input" placeholder="ユーザー名" defaultValue={modalEditData?.username} />
                    </Col>
                    <Col span={12}>
                        <p className="modal-title" >名前</p>
                        <Input className="modal-input" placeholder="名前" defaultValue={modalEditData?.name} />
                    </Col>
                </Row>
                <Row>
                    <Col span={12}>
                        <p className="modal-title">電子メールアドレス</p>
                        <Input className="modal-input" placeholder="電子メールアドレス" defaultValue={modalEditData?.email} />
                    </Col>
                    <Col span={12}>
                        <p className="modal-title">管理システム利用</p>
                        <Select
                            className="modal-select"
                            showSearch
                            optionFilterProp="children"
                            onChange={onChange}
                            onSearch={onSearch}
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                            defaultValue={modalEditData?.tags}
                        >
                            <Option value="許可">許可</Option>
                            <Option value="不許可">不許可</Option>
                        </Select>
                    </Col>
                </Row>
                <p className="modal-title">アクセス許可テナントリスト</p>
                <Row gutter={[16, 16]} className="modal-scroll-card">
                    {
                        dataUser.map(user => {
                            return (
                                <Col span={12} > <Card  bordered={false} className="modal-card" style={{ height: '65px'}}>
                                <p className="ant-card-head-title">{user.name}</p>
                                <p className="modal-card-tags">{user.tags}</p>
                                    <p className="modal-card-username" >{user.username}</p>
                                </Card></Col>
                            )
                        })
                    }
                </Row>

            </Modal>
        </div>
    );
}

export default HomeTable;
