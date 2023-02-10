import React from 'react';

const SignUp = () => {
    return (
        <div>
            <form>
                <div>
                    <label>Name</label>
                    <input type="text" placeholder="Username"/>
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" placeholder="Email"/>
                </div>
                <div>
                    <label>Password</label>
                    <input type="password" placeholder="Password"/>
                </div>
                <div>
                    <label>Confirm Password</label>
                    <input type="password" placeholder="Confirm Password"/>
                </div>
                <div>
                    <p>
                     I accept terms of privacy policy
                    </p>
                    <input type="checkbox"/>
                </div>
                <div>
                    <a href="#">Login</a>
                    <button>SignUp</button>
                </div>
            </form>
        </div>
    );
};

export default SignUp;