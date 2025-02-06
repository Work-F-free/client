const minLat = 60.03;
const maxLat = 59.90;
const minLng = 30.40;
const maxLng =  30.25;
 
export const generateCoordinates = (): [string, string]  => {
  const lat = Math.random() * (maxLat - minLat) + minLat;
  const lng = Math.random() * (maxLng - minLng) + minLng;

  return [lat.toFixed(4), lng.toFixed(4)];  
}
 
