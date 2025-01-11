// import { useAuth0 } from "@auth0/auth0-react"
// import { useEffect, useState } from "react"

// async function getData() {
//     const { user, isAuthenticated } = useAuth0();

//     if (isAuthenticated) {
//         try {
//             const userMetadata = user['https://recipes.com/user_metadata'];
//             const response = await fetch(`http://localhost:3000/getrecipes/${userMetadata.username}`);

//             const feed = await response.json();
//             return {feed, error: false};
//         } catch (err) {
//             return ({error_message: err.message, error: true})
//         }
//     } else {
//         return ({error_message: 'User Not Authenticated', error: true});
//     }
// }

// export default function useData() {
//     const [data, setData] = useState(getData());
//     const [isCompleted, setStatus] = useState(false);
//     const { isLoading } = useAuth0();

//     useEffect(() => {
//         function handleData() {
//             if (isLoading) return
            
//             setStatus(false);
//             setData(getData());
//             setStatus(true);
//         }

//         window.addEventListener('data', handleData);

//         return () => window.removeEventListener('data', handleData);
//     }, [isLoading]);

//     return {data, isCompleted};
// }
