import React, { Component } from 'react'

// class App extends Component {
//     state = {
//         name: "Mehboob Shaikh",
//         location:this.props.location
//     }
//     render() {
//         return (
//             <h1>Hello {this.state.name} and location is {this.state.location}</h1>
//         )
//     }
// }

// constructor base state when we call constructor then need to call prent constructor this why we call super()

// class App extends Component {
//     constructor(props) {
//         super(props)
//     this.state = {
//         name: "Mehboob Shaikh",
//         location:this.props.location
//     }
// }
//     render() {
//         return (
//             <h1>Hello {this.state.name} and location is {this.state.location}</h1>
//         )
//     }
// }

// ============================================================

// event handling

// class App extends Component {
//     abc = () => {
//         console.log("this is push button")
//     }
//     render() {
//         return (
//             <button onClick={this.abc} > Push </button>
//         )
//     }
// }

// =========================================================================
// how to modify state

class App extends Component {
    constructor(props) {
                super(props)
            this.state = {
                name: "Mehboob Shaikh",
                location:this.props.location
            }
        }
    abc = () => {
        console.log("this is push button")
        this.setState({
            location:"Patna" 
        })
    }
    render() {
        return <> 
            <button onClick={this.abc} > Push </button>
        <h1>Hello {this.state.name} and location is {this.state.location}
        </h1></>
        
    }
}

export default App;