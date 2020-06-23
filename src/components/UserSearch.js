import React from "react";
import Search from "antd/es/input/Search";

class UserSearch extends React.Component {
    render() {
        return (
            <Search
                placeholder="input user name"
                onSearch={value => this.props.searchUser(value)}
            />
        )
    }
}

export default UserSearch