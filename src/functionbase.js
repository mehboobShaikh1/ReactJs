// how to use props by function base component
// old Method to define function base component
// function Student(props) {
//     return (
//         <div>
//             <h1>Hello {props.name} {props.surname}</h1>
//         </div>
//     )
// }


// new method to define function base component

const Student = (props) => {  
 return (
    <div>
        <h1>Hello {props.name} {props.surname}</h1>
    </div>
)
 }



export default Student;