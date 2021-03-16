import React,{Component} from 'react'

export default class CounterDemo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            hasError: false,
            error: '',
            errorInfo: ''
        }
    }

    static getDerivedStateFromError(error){
        return {hasError: true}
    }

    componentDidCatch(error, errorInfo){
        this.setState({
            error: error,
            errorInfo: errorInfo
        })
    }

    render() {

        if(this.state.hasError){
        return (
                <div>
                  <h5>Error:</h5> {this.state.error.toString()}
                  <h5>Error Info:</h5> {this.state.errorInfo.componentStack}
                </div>
        )
        }else{
            return this.props.children
        }
 
    }
}