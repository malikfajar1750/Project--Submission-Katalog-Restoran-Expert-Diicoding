import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import '../components/resto-card';

const Favorite = {
  async render() {
    return `
      <div class="restaurants">
        <h2 class="align-center">Your Favorited Restaurants</h2>
        <div class="dflex cards"></div>
      </div>
    `;
  },

  async afterRender() {
    const restaurantsContainer = document.querySelector('.restaurants > .cards');
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    if (restaurants.length) {
      restaurants.forEach((restaurant) => {
        const container = document.createElement('resto-card');
        container.items = restaurant;
        restaurantsContainer.append(container);
      });
    } else {
      restaurantsContainer.innerHTML = `
        <div class="empty">
          <h3>Sorry</h3>
          <span> You didn't favorite any restaurant yet </span>
          <a href="/">Go To Home</a>
        </div>
      `;
    }
  },
};

export default Favorite;