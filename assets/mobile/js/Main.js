import React, {Component} from 'react';
import { Link, Redirect } from 'react-router-dom';

import { Flex, Toast, WhiteSpace, NavBar, Badge } from 'antd-mobile';
import axios from 'axios';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { far } from '@fortawesome/free-regular-svg-icons';
import { withTranslation } from 'react-i18next';

import widgets from '@app/components/mobile/widgets/Widgets'

class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            unread: -1
        };
    }

componentDidMount() {
        axios.get(
            window.mfwApp.urls.systemMonitor.unread,
            {
                headers: {
                    'X-Requested-With': 'XMLHttpRequest'
                }
            }
        ).then(res => {
            if (res.data.success) {
                this.setState({
                    unread: res.data.unread
                });
            } else {
                Toast.fail(this.props.t(res.data.error));
            }
        }).catch(error => {
            if (error.response) {
                Toast.fail(this.props.t(error.response.status));
            } else {
                Toast.fail(error.toString());
            }
        });
    }

    render() {
        return <Flex direction="column" align="stretch" className="mfw-100vh">
                <Flex.Item className="mfw-flex-0">
                    <NavBar
                      rightContent={[<Link to="/logout">{this.props.t('login.logout')}</Link>]}
                      icon={this.state.unread != -1 ? <Link to={window.mfwApp.urls.pages.systemAlerts}>
                            {this.state.unread == null || this.state.unread == 0 ? 
                                <Badge >
                                    <FontAwesomeIcon icon={far.faBell}/>
                                </Badge> :
                                <Badge dot>
                                    <FontAwesomeIcon icon={far.faBell}/>
                                </Badge>
                            }
                            </Link> : ''}>{this.props.t('widget.s')}</NavBar>
                </Flex.Item>
                <Flex.Item className="mfw-list-all mfw-overflow-auto">
                    {this.props.widgets.map(name => {
                        if (widgets[name] != undefined) {
                            const Widget = widgets[name];
                            return <React.Fragment key={name}>
                                <Widget />
                                <WhiteSpace/>
                            </React.Fragment>;
                        }
                    })}
                </Flex.Item>
        </Flex>
    }
}

export default withTranslation()(Main);