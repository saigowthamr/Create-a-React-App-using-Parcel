import React from 'react'


class Counter extends React.Component{

    state = {
        num:0
    }


    render() {
        return (
            <div>

                <h2>Counter {this.state.num}</h2>

                <button onClick={() => this.setState({
                   num:this.state.num+1
                })}>Increment</button>
             </div>
         )
     }



}


export default Counter;