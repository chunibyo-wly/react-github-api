import React from 'react';
import './App.css';
import {Row, Col} from "antd";
import UserCard from "./components/UserCard";
import UserSearch from "./components/UserSearch";
import {message, Space} from 'antd';

class App extends React.Component {
    avatar_url;
    login;
    public_repos;

    constructor(props) {
        super(props);
        this.state = {
            avatar: "https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png",
            name: "React",
            followers: "",
            repos: "",
            loading: false
        }
    }

    searchUser(value) {
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        this.setState({loading: true})

        fetch("https://api.github.com/users/" + value, requestOptions)
            .then(response => response.text())
            .then(result => JSON.parse(result))
            .then(result => {
                this.setState({loading: false})
                if (result.message === "Not Found")
                    message.error('用户不存在');
                else
                    this.setState({
                        name: result.login,
                        avatar: result.avatar_url,
                        followers: result.followers,
                        repos: result.public_repos
                    })
            })
            .catch(error => console.log('error', error));
    }

    render() {
        return (
            <div>
                <br/>
                <br/>
                <br/>
                <Row>
                    <Col
                        xs={{span: 20, offset: 2}}
                        sm={{span: 16, offset: 4}}
                        md={{span: 12, offset: 6}}
                        lg={{span: 8, offset: 8}}
                        xl={{span: 4, offset: 10}}
                        align="middle"
                    >
                        <UserSearch value={this.state.value} searchUser={this.searchUser.bind(this)}/>
                    </Col>
                </Row>
                <br/>
                <Row>
                    <Col
                        xs={{span: 20, offset: 2}}
                        sm={{span: 16, offset: 4}}
                        md={{span: 12, offset: 6}}
                        lg={{span: 8, offset: 8}}
                        xl={{span: 4, offset: 10}}
                        align="middle"
                    >
                        <UserCard {...this.state} />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default App;
