import React, {Component} from 'react';
import { generatePath } from 'react-router-dom';
import { withTranslation } from 'react-i18next';
import {message, Table, Button, Space, Input, Typography, Form} from 'antd';
import { SearchOutlined, CloseCircleOutlined } from '@ant-design/icons';

import axios from 'axios';

import MfwNumber from '@app/mfw/MfwNumber';
import useWithForm from '@app/hooks/useWithForm';

class Lands extends Component {
    constructor(props){
        super(props);
        this.state = {
            lands: [],
            loading: true,
            editID: null,
            form: null,
            columns: [
                {
                    title: this.props.t('land._'),
                    dataIndex: 'num',
                    onCell: (record) => ({
                        record: record,
                        dataIndex: 'num',
                        editing: this.state.editID == record.id
                    }),
                    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
                    onFilter: (value, record) => record.num.toString().toLowerCase() == value.toLowerCase(),
                    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
                        <div>
                        <Input.Group compact style={{ padding: 8 }}>
                            <Input
                              value={selectedKeys[0]}
                              onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                              onPressEnter={() => {this.searchConfirm(selectedKeys, confirm)}}
                              style={{ width: 'calc(100% - 40px)' }}
                            />
                            <Button icon={<CloseCircleOutlined />} onClick={() => {setSelectedKeys([]);this.searchConfirm([], confirm);}} />
                        </Input.Group>
                        </div>
                    )
                },
                {
                    title: this.props.t('land.square'),
                    dataIndex: 'square',
                    align: 'right',
                    onCell: (record) => ({
                        dataIndex: 'square',
                        editing: this.state.editID == record.id
                    }),
                    render: (text, record) => {
                        return record.square == 0 ? null : <MfwNumber value={record.square}/>
                    }
                },
                {
                    title: this.props.t('action.s'),
                    key: 'actions',
                    onCell: (record) => ({
                        editing: false
                    }),
                    render: (text, record, index) => {
                        return this.state.editID == null ? <Space>
                            <Typography.Link onClick={() => this.edit(record)} >{this.props.t('action.edit')}</Typography.Link>
                        </Space> : <React.Fragment>
                        {this.state.editID == record.id ? <Space>
                            <Typography.Link onClick={() => this.post(index, record.id)}>{this.props.t('modal.save')}</Typography.Link>
                            <Typography.Link onClick={() => this.setState({editID: null})}>{this.props.t('modal.cancel')}</Typography.Link>
                        </Space> : <Typography.Link disabled={true}>{this.props.t('action.edit')}</Typography.Link>}
                        </React.Fragment>
                    }
                }                
            ]
        };
        this.post = this.post.bind(this);
        this.edit = this.edit.bind(this);
        this.editableCell = this.editableCell.bind(this);
    }

    componentDidMount() {
        this.setState({editID: null, loading: true});
        axios.get(
            window.mfwApp.urls.township.land.pageData,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState({
                    lands: res.data.lands,
                    loading: false,
                    form: res.data.form
                });
            } else {
                message.error(this.props.t(res.data.error));
            }
        }).catch(error => {
            if (error.response && error.response.data) {
                message.error(this.props.t(error.response.data.error));
            } else {
                message.error(error.toString());
            }
        });
    }
    
    edit(record) {
        this.props.form.setFieldsValue({ num: record.num, id: record.id, square: record.square });
        this.setState({editID: record.id});
    }
    
    post(index, id) {
        this.props.form
            .validateFields()
            .then(values => {
                values.id = id;
                axios({
                    method: 'post',
                    url:  window.mfwApp.urls.township.land.post,
                    data: values,
                    headers: {'Content-Type': 'application/json','X-Requested-With': 'XMLHttpRequest'}
                }).then(res => {
                    if (res.data.success) {
                        message.success(this.props.t('modal.saved'));
                        this.setState(state => {
                            state.editID = null;
                            state.lands[index].num = values.num;
                            state.lands[index].square = values.square;
                            return state;
                        });
                    } else {
                        message.error(this.props.t(res.data.error));
                    }
                }).catch(error => {
                    message.error(error.toString());
                });
            });
    }
    
    editableCell({
        editing,
        dataIndex,
        children,
        ...restProps
    }) {
        return (
            <td {...restProps}>
              {editing ? (
                <Form.Item
                  name={dataIndex}
                  style={{
                    margin: 0,
                  }}
                >
                  <Input/>
                </Form.Item>
              ) : (
                children
              )}
            </td>
          );        
    }
    
    searchConfirm(selectedKeys, confirm) {
        confirm();
    }
    
    render() {
        return  <React.Fragment>
            <Button onClick={() => this.setState({editID: -1})}>{this.props.t('land.add')}</Button>
            <Form form={this.props.form} 
               component={false}
               name="item">
                <Table 
                  rowKey="id" 
                  components={{
                    body: {
                      cell: this.editableCell,
                    },
                  }}
                  loading={this.state.loading}
                  columns={this.state.columns} 
                  dataSource={this.state.lands}/>
                {this.state.loading === false ? <Form.Item name="_token"
                  hidden={true} 
                  initialValue={this.state.form._token.value}>
                    <Input/>
                </Form.Item> : null}
            </Form>
        </React.Fragment>
    }
}

export default useWithForm(withTranslation()(Lands));