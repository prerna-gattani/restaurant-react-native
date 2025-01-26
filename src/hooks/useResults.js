import {useState,useEffect} from 'react';
import yelp from '../api/yelp';

export default ()=>{
    const [results, setResults] = useState([]);
    const [errorMessage,setErrorMessage]=useState('');

    const searchAPI = async (searchTerm) => {
        try {
            console.log("Searching for:", searchTerm); // ✅ Debugging
            const response = await yelp.get("/search", {
                params: {
                    limit: 50,
                    term: searchTerm, // ✅ Ensure `term` is correctly passed
                    location: "San Jose",
                },
            });
            setResults(response.data.businesses);
        } catch (error) {
            setErrorMessage('Something went wrong')
            console.error("Error fetching data:", error);
        }
    };

    useEffect(()=>{
        searchAPI('pasta')
    },[])

    return [searchAPI,results,errorMessage];
};