{/*  */}

const createRestaurantItem = (restaurant) => `
    <div class="banner dflex">
        <div class="skeleton">
            <img src="https://restaurant-api.dicoding.dev/images/medium/${restaurant.pictureId}" alt="${restaurant.name} restaurant">
        </div>
        <div class="details">
            <h2>${restaurant.name}</h2>
            <div class="detail-group">
                <h3>Description</h3>
                <span>${restaurant.description}</span>
            </div>
            <div class="detail-group">
                <h3>Rating</h3>
                <span>${restaurant.rating}/5</span>
            </div>
            <div class="detail-group">
                <h3>Address</h3>
                <span>${restaurant.address}, ${restaurant.city}</span>
            </div>
        </div>
    </div>
    <div class="menus">
        <h2>Menus</h2>
        <div class="menu-group dflex">
            <div class="foods-menu">
                <h3>Food Menu</h3>
                <ul class="foods-list"></ul>
            </div> 
            <div class="drinks-menu">
                <h3>Drink Menu</h3>
                <ul class="drinks-list"></ul>
            </div>
        </div>
    </div>
    <div class="reviews">
        <h2>Customer Reviews</h2>
        <div class="reviews-list"></div>
    </div>
    <div class="add-review">
        <h2>Add Review</h2>
        <div class="inputs">
            <div class="input-group">
                <label for="name">Name</label>
                <input type="text" name="name" id="name">
            </div>
            <div class="input-group">
                <label for="review-message">Review</label>
                <textarea name="review-message" id="review-message" cols="30" rows="10"></textarea>
            </div>
            <div class="add dflex">
                <button class="add-review-button">Add Review</button>
            </div>    
        </div>
    </div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;
 
const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;
 

const createReviewItem = (data) => `
    <div class="review-box">
        <div class="review-group dflex">
            <span class="name">${data.name}</span>
            <span class="date">${data.date}</span>
        </div>
        <div class="message">
            <span>${data.review}</span>
        </div>
    </div>
`;

export {
    createRestaurantItem,
    createLikeButtonTemplate,
    createLikedButtonTemplate,
    createReviewItem,
};