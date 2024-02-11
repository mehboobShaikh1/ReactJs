// By Fragement we can return multiple element
// import { Component } from "react"

// class App extends Component {
//     render() {
//         return <>
//             <h1>Hello <b><u>SMM</u></b> </h1>,
//             <h1>Hello <b><u>Mehboob Shaikh</u></b> </h1>
//         </>
//     }
// }

// export default App;

import { Component,Fragment } from "react"

class App extends Component {
    render() {
        return <Fragment>
            <h1>Hello <b><u>SMM</u></b> </h1>,
            <h1>Hello <b><u>Mehboob Shaikh</u></b> </h1>
        </Fragment>
    }
}

export default App;