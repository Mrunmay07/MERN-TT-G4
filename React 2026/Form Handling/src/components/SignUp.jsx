import { useState } from "react"

function SignUp(){
        const [firstName , setFirstName] = useState('')
        const [lastName , setLastName] = useState('')
        const [email , setEmail] = useState('')
        const [password , setPassword] = useState('')


        const handleSubmit = (e) => {
            e.preventDefault()
            console.log('Form submitted')
        }

        const handleChange = (e) => {
           const {name , value} = e.target

           switch (name) {
            case "firstName":
                setFirstName(value)
                break;

            case "lastName":
                setLastName(value)
                break;

            case "email":
                setEmail(value)
                break;

            case "password":
                setPassword(value)
                break;
                
           
            default:
                break;
           }

        }

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="">FirstName</label>
            <input type="text" value={firstName} onChange={handleChange} name="firstName"/>

            <br />

            <label htmlFor="">LastName</label>
            <input type="text" value={lastName} onChange={handleChange} name="lastName"/>

            <br />

            <label htmlFor="">Email</label>
            <input type="text" value={email} onChange={handleChange} name="email" />

            <br />

            <label htmlFor="">Password</label>
            <input type="text" value={password} onChange={handleChange} name="password" />

            <br />

            <button>SignUp</button>
        </form>
    )
}

export default SignUp