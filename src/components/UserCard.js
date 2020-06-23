import React from "react";
import {Card, Spin} from "antd";

class UserCard extends React.Component {

    handleClick() {
        console.log("============")
    }

    render() {
        const gridStyle = {
            width: '50%',
            textAlign: 'center',
        };

        return (
            <Spin tip="Loading..." spinning={this.props.loading}>
                <Card
                    hoverable
                    cover={<img alt="example" src={this.props.avatar}/>}
                >
                    <h1>{this.props.name}</h1>
                    <Card.Grid style={gridStyle}
                               onClick={this.handleClick.bind(this)}
                    >
                        followers: {this.props.followers}
                    </Card.Grid>
                    <Card.Grid style={gridStyle}>repos: {this.props.repos}</Card.Grid>
                </Card>
            </Spin>
        )
    }
}

export default UserCard