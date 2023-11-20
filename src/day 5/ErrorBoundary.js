import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    state={hasError:false}


    //both will automatically execute if we get an error
    static getDerivedStateFromError()
    {
        return {hasError:true};
    }
    componentDidCatch(error,info)
    {
        console.log(error);
        console.log(info);
    }
  render() {
        if(this.state.hasError)
        {
            return <h1>Something went wrong</h1>
        }
        else
        {
            return this.props.children;
        }
  }
}
