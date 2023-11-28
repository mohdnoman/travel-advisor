import axios from "axios";


const URL = "https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary"

  
export const getPlacesData = async (sw, ne) => {
    try {
     const { data: {data}} = await axios.get(URL, {
      params: {
        bl_latitude: sw.lat,
        tr_latitude: ne.lat,
        bl_longitude: sw.lng,
        tr_longitude: ne.lng,
      },
      headers: {
        'X-RapidAPI-Key': '19d4a05ea6mshfc6c49d344ea6d4p1640d1jsn3118c450005a',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    });

     return data;
    }catch(error){
      console.log(error);
    }
}