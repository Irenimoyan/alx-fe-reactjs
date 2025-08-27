import { useState } from "react";


function RegistrationForm() {
    // manage steps for input 
    const [formData, setFormdata] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [errors, setErrors] = useState({});


    // handle input changes

    const handleChange = (e) => {
        setFormdata({
            ...FormData,
            [e.target.name]: e.target.value,
        });
    };


    // handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();


        // simple validation
        let validationError = {};
        if (!formData.username) validationError.username = "Username is required";
        if (!formData.email) validationError.email = "Email is required";
        if (!formData.password) validationError.password = "Password is required";

        if (Object.keys(validationError).length > 0) {
            setErrors(validationError);
        } else {
            alert("Form submitted successfully!");
            console.log("User registered:", formData);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Registration Form(Controlled Components)</h2>

            <div>
                <label>Username: </label>
                <input
                    type="text"
                    name="username"
                    value={username}
                    onChange={handleChange}
                />
                {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
            </div>
            <div>
                <label>Email: </label>
                <input
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleChange}
                />
                {errors.username && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>

            <div>
                <label>Password: </label>
                <input
                    type="text"
                    name="password"
                    value={password}
                    onChange={handleChange}
                />
                {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
            </div>
        </form>
    );
}


export default RegistrationForm;