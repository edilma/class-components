import { Component } from "react";

class CountClass extends Component{
    constructor (props){
        super(props)
        this.state = {
            count: 0,
            title: "Welcome"

        }
    }
    componentDidMount (){
        this.setState({
            title: "Our New Title"
        })
    }
//This part display the 
// componentDidUpdate(newState, oldState){
//     if(newState.count!== oldState.count){
//             Document.title=`${this.state.count} clicks`
//     }
// }

    render(){
        const {count, title} = this.state
        return(
            <section>
                <h2>{title}</h2>
                <h3>You click {count} times</h3>
                <button onClick={()=>this.setState({count: count+1})}>Click Me</button>
            </section>
        )
    }
}

export default CountClass;