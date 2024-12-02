// // src/pages/Signup.js
// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Signup = () => {
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [message, setMessage] = useState('');
//     const navigate = useNavigate();

//     const handleSignup = async (e) => {
//         e.preventDefault();

//         try {
//             const response = await axios.post('http://localhost:5000/api/signup', { email, password });
//             setMessage(response.data.message);
//             navigate('/login'); // Redirect to login page
//         } catch (err) {
//             setMessage(err.response?.data?.message || 'Something went wrong');
//         }
//     };

//     return (
//         <div>
//             <h2>Sign Up</h2>
//             <form onSubmit={handleSignup}>
//                 <input
//                     type="email"
//                     placeholder="Email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     required
//                 />
//                 <input
//                     type="password"
//                     placeholder="Password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                     required
//                 />
//                 <button type="submit">Sign Up</button>
//             </form>
//             <p>{message}</p>
//             <a href="/login">Already have an account? Login</a>
//         </div>
//     );
// };

// export default Signup;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Signup.css'; // Assuming the same CSS is being used

const Signup = () => {
    const [name, setName] = useState(''); // New state for name
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();

        try {
            // Send the name, email, and password to the server
            const response = await axios.post('http://localhost:5000/api/signup', { name, email, password });
            setMessage(response.data.message);
            setTimeout(() => {
                navigate('/login'); // Redirect to login page after successful signup
            }, 2000);
        } catch (err) {
            setMessage(err.response?.data?.message || 'Something went wrong');
        }
    };

    return (
        <div className="signup-container">
            <h2>Sign Up</h2>
            <form onSubmit={handleSignup} className="signup-form">
                <input
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
                <button type="submit">Sign Up</button>
            </form>
            <p className="message">{message}</p>
            <a href="/login" className="login-link">Already have an account? Login</a>
        </div>
    );
};

export default Signup;