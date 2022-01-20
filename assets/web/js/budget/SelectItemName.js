import React, {Component} from 'react';
import { withTranslation } from 'react-i18next';
import {message, Select, Button, Divider, Input} from 'antd';
import { PlusOutlined } from '@ant-design/icons';

import axios from 'axios';

class SelectItemName extends Component {
    constructor(props){
        super(props);
        this.state = {
            options: [...this.props.options],
            loading: true,
            name: '',
            value: this.props.initialValue
        };
        this.addItemName = this.addItemName.bind(this);
        this.dropdownRender = this.dropdownRender.bind(this);
    }
   
    addItemName() {
        axios({
            method: 'get',
            url: window.mfwApp.urls.budget.item.nameAdd+'/'+this.state.name,
            headers: {'Content-Type': 'application/json','X-Requested-With': 'XMLHttpRequest'}
        }).then(res => {
            if (res.data.success) {
                this.setState(state => {
                    state.options = [... state.options, res.data.added];
                    state.name = '';
                    state.value = res.data.added.value*1;
                    return state;
                })
                this.props.onAdd(res.data.added.value*1);
            } else {
                message.error(this.props.t(res.data.error));
            }
        }).catch(error => {
            message.error(error.toString());
        });
    }

    dropdownRender(menu) {
        return <div className="mfw-select-add">
            {menu}
            <Divider/>
            <div className="mfw-add-form">
                <Input value={this.state.name} onChange={(event) => this.setState({name: event.target.value})}/>
                <a onClick={this.addItemName}>
                    <PlusOutlined /> {this.props.t('budget.item.add')}
                </a>
            </div>
          </div>
    }    
    
    render() {
        return <Select
          showSearch
          filterOption={(input, option) => option.label.toLowerCase().indexOf(input.toLowerCase()) >= 0}
          dropdownRender={this.dropdownRender}
          value={this.state.value}
          defaultValue={this.state.value}
          onSelect={(value) => {
              this.setState({value: value});
              this.props.onAdd(value*1);
          }}
          options={this.state.options}/>
    }
}

export default withTranslation()(SelectItemName);