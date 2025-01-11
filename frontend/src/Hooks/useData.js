import { useAuth0 } from "@auth0/auth0-react"
import { useEffect, useState } from "react"

async function getData() {
    const { user, isLoading, isAuthenticated } = useAuth0();

    while (isLoading) {}
    
    if (isAuthenticated) {
        try {
            const userMetadata = user['https://recipes.com/user_metadata'];
            const response = await fetch(`http://localhost:3000/getrecipes/${userMetadata.username}`);

            const feed = await response.json();
            return {feed, error: false};
        } catch (err) {
            throw({error_message: err.message, error: true})
        }
    } else {
        throw({error_message: 'User Not Authenticated', error: ture});
    }
}

export function useData() {
    const [data, setData] = useState(getData());
    const [isCompleted, setStatus] = useState(false);

    useEffect(() => {
        function handleData() {
            setStatus(false);
            setData(getData());
            setStatus(true);
        }

        window.addEventListener('data', handleData);

        return () => window.removeEventListener('data', handleData);
    }, []);

    return {data, isCompleted};
}