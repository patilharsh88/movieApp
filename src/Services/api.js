const API_KEY="4c2b558fcfee546a55b0f26798ec9b0f";

const BASE_URL="https://api.themoviedb.org/3";

    const getPopularMovies=async()=>{

            const response=await fetch(`$${BASE_URL}/movie/popular?api_key=${API_KEY}`);
            const data =await response.json()

            return data.results;
    }

    const searchMovies=async(query)=>{

            const response=await fetch(`$${BASE_URL}/search/movie/popular?api_key=${API_KEY}&query=${encodeURIComponent(query)}`);
            const data =await response.json()

            return data.results;
    }