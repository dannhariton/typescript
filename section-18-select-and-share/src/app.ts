import axios from "axios";

type GeocodingResponse = {
  results: { geometry: { location: { lat: number; lng: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};

const from = document.querySelector("form")!;
const addressInput = document.querySelector("#address")! as HTMLInputElement;

async function searchAddressHandler(e: Event) {
  e.preventDefault();
  const enteredAddress = addressInput.value;

  try {
    const response = await axios.get<GeocodingResponse>(
      `//https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURI(
        enteredAddress
      )}&key=${process.env.GOOGLE_API_KEY}`
    );

    if (response.data.status !== "OK") {
      throw new Error("Could not fetch location");
    }

    const coordinates = response.data.results[0].geometry.location;
    const map = new google.maps.Map(document.getElementById("map") as HTMLDivElement, {
      center: coordinates,
      zoom: 16,
    });

    new google.maps.Marker({ position: coordinates, map: map });
  } catch (error) {
    console.log(error);
  }
}

from.addEventListener("submit", searchAddressHandler);
