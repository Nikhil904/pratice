import React from 'react';

class User extends React.PureComponent{
    render(){
        console.log("Rendering")
        return(
            <>
                <h1>Pure Component Using Props{this.props.count}</h1>
            </>
        );
    }
}
export default User;