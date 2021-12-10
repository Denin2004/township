import React, {Component} from 'react';
import { Link, generatePath } from 'react-router-dom';
import { Toast, Loading, List } from 'antd-mobile';
import axios from 'axios';

import { withTranslation } from 'react-i18next';

import MfwNumber from '@app/mfw/MfwNumber';

class LineManager extends Component {
    constructor(props){
        super(props);
        this.state = {
            debt: [],
            loading: true
        };
    }

    componentDidMount() {
        axios.get(
            window.mfwApp.urls.lineManager.debtByType+'/'+this.props.typeID,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState((state) => {
                    state.loading = false;
                    state.debt = res.data.debt;
                    return state;
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

    render() {
        return this.state.loading ? <Loading/> :
            <React.Fragment>
                <List>
                   {this.state.debt.map(record => {
                        return <List.Item key={record.id} extra={<Link to={generatePath(
                            window.mfwApp.urls.township.land.debtType+'/:land_id/:type_id',
                            { 
                                land_id: record.id,
                                type_id: record.charge_type_id
                            }
                        )}><MfwNumber value={record.debt}/></Link>}>{record.num}</List.Item>
                    })}
                </List>
            </React.Fragment>
    }
}

export default withTranslation()(LineManager);