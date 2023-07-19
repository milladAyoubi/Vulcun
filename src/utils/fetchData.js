export const exerciseOptions = {
    method: 'GET',
    headers: {

        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
        'X-RapidAPI-Key': 'bcf9fa71f5msh41ed7dd71c7f465p1c8c87jsn98fc432c255c'
        
    },
  };
  
 
  export const fetchData = async (url, options) => {
    const res = await fetch(url, options);
    const data = await res.json();
  
    return data;
  };