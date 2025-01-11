import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router";
import LoadingCircle from "./LoadingCircle/LoadingCircle";

// Component to Redirect When Origin URL is specified
export default function DefaultHandler() {
    const { isLoading, isAuthenticated } = useAuth0();
    const navigate = useNavigate();

    if (isLoading) {
        return (<LoadingCircle /> );
    } else {
        if (isAuthenticated) {
            navigate('/home');
        } else { 
        navigate('/welcome');
        }
    }
}
