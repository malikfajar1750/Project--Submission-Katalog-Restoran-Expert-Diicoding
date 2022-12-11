import RestaurantsAPISource from '../../data/restaurants-api-resource';
import '../components/resto-card';

const Home = {
  async render() {
    return `
    <div class="hero" style="background-image: linear-gradient(rgba(0, 0, 5, .5), rgba(0, 0, 5, .5)), url('/images/heros/hero-image_1.jpg');">
      <div class="heroinner">
        <h1 class="herotitle">FoodApp Catalogue</h1>
        <p class="herosubtitle">Number 1 Restaurant in Asia Worldwide</p>
      </div>
    </div>

    <div class="restaurants">
        <h2 class="align-center">Explore Restaurant</h2>
        <div class="dflex cards">
        
        </div>
      </div>
      `;
  },

  async afterRender() {
    this._restaurantsRender();
  },

  async _restaurantsRender() {
    const restaurantsContainer = document.querySelector('.restaurants > .cards');
    const restaurants = await RestaurantsAPISource.listRestaurants();
    restaurants.forEach((restaurant) => {
      const container = document.createElement('resto-card');
      container.items = restaurant;
      restaurantsContainer.append(container);
    });
  },
};

export default Home;