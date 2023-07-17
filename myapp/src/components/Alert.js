import React from 'react'

function Alert(props) {
    return (
        <div style={{height:'40px'}}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{props.alert.type.toUpperCase()}</strong> : {props.alert.message}
            </div>}
        </div>
    )
}

export default Alert
