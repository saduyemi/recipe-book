import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useState } from "react";

export default function useData() {
    const [data, setData] = useState(null); 
    const [isCompleted, setStatus] = useState(false);
    const { user, isLoading, isAuthenticated } = useAuth0(); 

    async function fetchData() {
        setStatus(false); 
        if (isAuthenticated) {
            try {
                const userMetadata = user['https://recipes.com/user_metadata'];
                const response = await fetch(`http://localhost:3000/getrecipes/${userMetadata.username}`);
                const feed = await response.json();
                setData({ feed, error: false }); 
            } catch (err) {
                setData({ error_message: err.message, error: true }); 
            }
        } else {
            setData({ error_message: 'User Not Authenticated', error: true }); 
        }
        setStatus(true); 
    }

    useEffect(() => {
        if (!isLoading) {
            fetchData(); 
        }
    }, [isLoading]); 

    useEffect(() => {
        async function handleDataEvent() {
            await fetchData(); 
        }

        window.addEventListener('data', handleDataEvent);

        return () => { window.removeEventListener('data', handleDataEvent); };
    }, []); // Add event listener only once on mount

    return { data, isCompleted };
}
