// JavaScript code for handling dynamic content and interactions

// Example data for listings
const cabListings = [];
const accommodationListings = [];
const itemListings = [];

function displayListings(listings) {
  const listingsSection = document.getElementById("listings");
  listingsSection.innerHTML = "";

  listings.forEach((listing) => {
    const listingElement = document.createElement("div");
    listingElement.className = "listing";
    listingElement.innerHTML = `
                <h3>Cab Sharing: From ${listing.from} to ${listing.to}</h3>
                <p>Date: ${listing.date}</p>
                <p>Total Seats: ${listing.totalSeats}</p>
                <p>Seats to Share: ${listing.seatsToShare}</p>
                <p>Price per Seat: $${listing.price}</p>
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
  data.type = "cab";
  cabListings.push(data);
  displayListings(cabListings);
  event.target.reset();
}
document.getElementById("add-cab-form").addEventListener("submit", addListing);
displayListings(cabListings);
