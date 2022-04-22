import { CloseOutlined, DeleteOutlined, DownloadOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Card, Col, Input, Modal, Pagination, Row, Select, Table, Tag } from "antd";
import { useState } from "react";
import { localeEmptyDashboard, userStatus } from "../../../../common/constains";
import { dataUser, tenantData } from '../../../../common/data';
import { Option } from "antd/lib/mentions";
import '../styles.scss';

function ChatBot() {
    const [visible, setVisible] = useState(false);
    const [visibleEditModal, setVisibleEditModal] = useState(false);
    const [modalEditData, setModalEditData] = useState();
    function onShowSizeChange(current, pageSize) {
        console.log(current, pageSize);
    }

    function onChange(value) {
        console.log(`selected ${value}`);
    }

    function onSearch(val) {
        console.log('search:', val);
    }

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
            title: 'テナント名',
            dataIndex: 'id',
            key: 'id',
            className: "column"
        },
        {
            title: '作成者',
            dataIndex: 'name',
            key: 'name',
            className: "column"
        },
        {
            title: '作成者',
            dataIndex: 'createdBy',
            key: 'createdBy',
            className: "column"
        },
        {
            title: '作成日',
            dataIndex: 'createdAt',
            key: 'createdAt',

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
    console.log(dataUser);
    function onShowSizeChange(current, pageSize) {
        console.log(current, pageSize);
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
                title="新規テナント作成"
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
                    <Col span={6}>
                        <p className="modal-title" >テナント名</p>
                        <Input className="modal-input" placeholder="テナント名" />
                    </Col>
                </Row>
                <Row>
                    <Col span={12} className="chat-bot-modal-select-username">
                        <p className="modal-title">ユーザーをテナントに追加</p>
                    </Col>
                    <Col span={6} className="chat-bot-modal-select-role">
                        <p className="modal-title">役割</p>

                    </Col>
                    <Col span={6}>

                    </Col>
                </Row>
                <div className="chat-bot-modal-add-new-container">
                    {
                        [1, 2].map(value => {
                            return (
                                <Row >
                                    <Col span={15} className="chat-bot-modal-select-username chat-bot-modal-edit">
                                        <Select

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
                                    <Col span={7} className="chat-bot-modal-select-role chat-bot-modal-edit" >
                                        <Select

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
                                    <Col span={2} className="chat-bot-modal-edit">
                                        <Button danger shape="circle" icon={<CloseOutlined />} size='large' />
                                    </Col>
                                </Row>
                            )
                        })
                    }
                </div>

                <Row className="chat-bot-modal-add-new">
                    <Col span={12} className="chat-bot-modal-select-username">
                        <Select
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
                    <Col span={6} className="chat-bot-modal-select-role">
                        <Select
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
                    <Col span={6}>
                        <Button
                            key="12d121"
                            className='modal-button-add-new-user-chat-bot'
                        >+   追加</Button>
                    </Col>
                </Row>

            </Modal>
            <Table className="site-layout-title-table"
                columns={columns}
                dataSource={tenantData}
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
                    <Col span={6}>
                        <p className="modal-title" >テナント名</p>
                        <Input className="modal-input" placeholder="テナント名" />
                    </Col> <Col span={12}>
                        <p className="modal-title" >Tenant ID</p>
                        <Input className="modal-input" prefix="12315646548" disabled style={{ backgroundColor: '#F2F2F2'}} />
                    </Col>
                </Row>
                <Row>
                    <Col span={12} className="chat-bot-modal-select-username">
                        <p className="modal-title">ユーザーをテナントに追加</p>
                    </Col>
                    <Col span={6} className="chat-bot-modal-select-role">
                        <p className="modal-title">役割</p>

                    </Col>
                    <Col span={6}>

                    </Col>
                </Row>
                <div className="chat-bot-modal-add-new-container">
                    {
                        [1, 2].map(value => {
                            return (
                                <Row >
                                    <Col span={15} className="chat-bot-modal-select-username chat-bot-modal-edit">
                                        <Select

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
                                    <Col span={7} className="chat-bot-modal-select-role chat-bot-modal-edit" >
                                        <Select

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
                                    <Col span={2} className="chat-bot-modal-edit">
                                        <Button danger shape="circle" icon={<CloseOutlined />} size='large' />
                                    </Col>
                                </Row>
                            )
                        })
                    }
                </div>

                <Row className="chat-bot-modal-add-new">
                    <Col span={12} className="chat-bot-modal-select-username">
                        <Select
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
                    <Col span={6} className="chat-bot-modal-select-role">
                        <Select
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
                    <Col span={6}>
                        <Button
                            key="12d121"
                            className='modal-button-add-new-user-chat-bot'
                        >+   追加</Button>
                    </Col>
                </Row>

            </Modal>
        </div>
    );
}

export default ChatBot;
