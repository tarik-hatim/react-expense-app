import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>the info is : {props.info}</p>
    </div>
);

const withAdminInfo = (WrappedCompenent) =>{
    return (props) => (
        <div>
            <WrappedCompenent {...props} />
        </div>
    );
}
const requireAuthentication = (WrappedCompenent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? 
                (<WrappedCompenent {...props} />
            ) : (<p>Please Login to view the info</p>)
            }
        </div>
    );
}

const AdminInfo = withAdminInfo(Info);
const AuthInfo  = requireAuthentication(Info);
console.log(AdminInfo);

ReactDOM.render(<AuthInfo isAuthenticated={true} info="There are the details." />, document.getElementById('app'));