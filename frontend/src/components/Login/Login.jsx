import './Login.scss';

export default function Login() {

    return (
        <>
        <div id='loginRoot'>
            <form id='loginForm'>
                <p>Welcome. Sign In To Your Account </p>
                <p> Some Text Some Text Some Text Some Text Some Text Some Text Some Text</p>
                <input type='text' id='email' placeholder='Enter Email' name='email' />
                <input type='text' id='passw' placeholder='Enter Password' name='password' />
                <button id="submitBtn">Login</button>
            </form>  
        </div>
        </>
    );
}