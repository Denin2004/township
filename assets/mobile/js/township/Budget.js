import React, {Component} from 'react';
import { Link, generatePath } from 'react-router-dom';
import { Toast, Loading, List, Popup, Collapse } from 'antd-mobile';

import axios from 'axios';
import { withTranslation } from 'react-i18next';

import MfwNumber from '@app/mfw/MfwNumber';
import useWithParams from '@app/hooks/useWithParams';

class Budget extends Component {
    constructor(props){
        super(props);
        this.state = {
            loading: true,
            budget: null
        };
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.budget.data+'/'+this.props.params.id,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState({
                    loading: false,
                    budget: res.data.budget
                });            
            } else {
                Toast.show({
                    icon: 'fail',
                    content:this.props.t(res.data.error)
                });
            }
        }).catch(error => {
            if (error.response) {
                Toast.show({
                    icon: 'fail',
                    content: error.response.status
                });
            } else {
                Toast.show({
                    icon: 'fail',
                    content:this.props.t(error.toString())
                });
            }
        });
    }
    
    budgetItem(item) {
        if (item.children) {
            return <Collapse key={item.id}>
                    <Collapse.Panel
                       key={item.id}
                       title={<List.Item key={item.id} className="mfw-budget-items" extra={<MfwNumber value={item.amount}/>}>{item.name}</List.Item>}
                       className="mfw-widget-record">
                       {item.children.map(subItem => this.budgetItem(subItem))}
                    </Collapse.Panel>
                </Collapse>
        }
        return <List.Item key={item.id}
           extra={<MfwNumber value={item.amount}/>}>{item.name}</List.Item>
    }

    render() {
        return this.state.loading ? <Loading/> :
            <React.Fragment>
                <List>
                    {this.state.budget.map(item => this.budgetItem(item))}
                </List>
            </React.Fragment>
    }
}

export default useWithParams(withTranslation()(Budget));