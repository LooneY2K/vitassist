// JavaScript code for handling dynamic content and interactions

const accommodationListings = [];

function displayListings(listings) {
  const listingsSection = document.getElementById("listings");
  listingsSection.innerHTML = "";

  listings.forEach((listing) => {
    const listingElement = document.createElement("div");
    listingElement.className = "listing";
    listingElement.innerHTML = `
                <h3>Accommodation: ${listing.location}</h3>
                <p>Available From: ${listing.availableFrom}</p>
                <p>Total Rooms: ${listing.totalRooms}</p>
                <p>Rooms to Share: ${listing.roomsToShare}</p>
                <p>Price per Room: $${listing.price}</p>
                <button value="Book">Book</button>
            `;
    listingsSection.appendChild(listingElement);
  });
}

function addListing(event) {
  event.preventDefault();
  const listingType = event.target.id; // Form ID is used to determine the listing type
  const formData = new FormData(event.target);
  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  data.type = "accommodation";
  accommodationListings.push(data);

  displayListings(accommodationListings);
  event.target.reset();
}

document
  .getElementById("add-accommodation-form")
  .addEventListener("submit", addListing);
displayListings(accommodationListings);
