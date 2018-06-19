//Hihger order component - HOC - A component that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share!</p>}
            <WrappedComponent {...props}/>
        </div>
    );
};

const requireAuthentiation = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? <WrappedComponent {...props}/> : <p>You need to login to view this component</p>}

        </div>
    );
};

//requireAuthentiation
const AdminInfo = withAdminWarning(Info);

const AuthInfo = requireAuthentiation(Info);

ReactDOM.render(<AuthInfo isAuthenticated={false} info="these are the details" />, document.getElementById('app'));
