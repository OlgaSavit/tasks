import React from 'react'
import ErrorIndicator from "./ErrorIndicator";

export class ErrorBoundary extends React.Component{
    state={
        hasError: false
    }
    componentDidCatch(error, errorInfo) {
        this.setState({hasError:true})
    }

    render() {
       return  this.state.hasError? <ErrorIndicator/>:
            this.props.children
    }
}