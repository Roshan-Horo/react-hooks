import React from 'react'

const ErrorDemo = ({name}) => {
    if(name !== 'hello'){
        throw new Error('error handler run')
    }
    return (
        <div>
            {name}
        </div>
    )
}

export default ErrorDemo
