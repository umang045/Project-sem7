import React, { useEffect } from 'react'; 
import {
    SignedIn,
    SignedOut,
    SignInButton,
    UserButton as ClerkUserButton,
    useAuth,
} from "@clerk/clerk-react";
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { isLoaded, isSignedIn } = useAuth(); 
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoaded && !isSignedIn) {
            const signInButton = document.querySelector('button[data-sign-in]');
            if (signInButton) {
                signInButton.click();
            }
        }
    }, [isLoaded, isSignedIn]);

    useEffect(() => {
        if (isLoaded && isSignedIn) {
            navigate('/kacheri');
        }
    }, [isLoaded, isSignedIn, navigate]);

    return (
        <>
            <SignedOut>
                <SignInButton data-sign-in /> 
            </SignedOut>
            <SignedIn>
                <ClerkUserButton />
            </SignedIn>
        </>
    );
}

export const UserButton = ClerkUserButton;
export default Login;
