// JavaScript code for handling dynamic content and interactions
const itemListings = [];
function displayListings(listings) {
  const listingsSection = document.getElementById("listings");
  listingsSection.innerHTML = "";
  listings.forEach((listing) => {
    const listingElement = document.createElement("div");
    listingElement.className = "listing";
    listingElement.innerHTML = `
                <h3>Item: ${listing.name}</h3>
                <p>Condition: ${listing.condition}</p>
                <p>Price: $${listing.price}</p>
                <button value="Book">Buy</button>
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

  data.type = "items";
  itemListings.push(data);

  displayListings(itemListings);
  event.target.reset();
}

document
  .getElementById("add-items-form")
  .addEventListener("submit", addListing);
displayListings(itemListings);
