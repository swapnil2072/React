export async function fetchAvailablePlaces() {
  const response = await fetch("http://localhost:3000/places");
  const resData = await response.json();

  if (!response.ok) {
    throw new Error("failed to fetch the data.");
  }
  return resData.places;
}

export default async function updateUserPlaces(places) {
  const response = await fetch("http://localhost:3000/user-places", {
    method: "PUT",
    body: JSON.stringify({ places: places }),
    headers: { "Content-Type": "application/json" },
  });

  const resData = await response.json();

  if (!response.ok) {
    throw new Error("failed to update user data.");
  }
  return resData.message;
}
