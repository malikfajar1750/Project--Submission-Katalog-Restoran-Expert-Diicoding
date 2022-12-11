import { createRestaurantItem, createReviewItem} from '../templates/template-creator';
import UrlParser from '../../routes/url-parser';
import RestaurantsAPISource from '../../data/restaurants-api-resource';
import AddReview from '../../utils/add-review';
import LikeButtonInitiator from '../../utils/favorite-initiator';

const Detail = {
  async render() {
    return `
    <div class="restaurant"></div>
    <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantsAPISource.detailRestaurant(url.id);
    const restaurantContainer = document.querySelector('.restaurant');
    restaurantContainer.innerHTML = createRestaurantItem(restaurant);
    this._renderFoods(restaurant.menus.foods);
    this._renderDrinks(restaurant.menus.drinks);
    this._renderReviews(restaurant.customerReviews);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant,
    }),
    

    AddReview.init({
      reviewsContainer: document.querySelector('.reviews-list'),
      addReviewButton: document.querySelector('.add-review-button'),
      data: {
        id: restaurant.id,
        nameInput: document.querySelector('input#name'),
        reviewInput: document.querySelector('#review-message'),
      },
    });
  },

  async _renderFoods(foods) {
    const foodsContainer = document.querySelector('ul.foods-list');
    foods.forEach((food) => {
      foodsContainer.innerHTML += `<li>${food.name}</li>`;
    });
  },

  async _renderDrinks(drinks) {
    const drinksContainer = document.querySelector('ul.drinks-list');
    drinks.forEach((drink) => {
      drinksContainer.innerHTML += `<li>${drink.name}</li>`;
    });
  },

  async _renderReviews(reviews) {
    const reviewsContainer = document.querySelector('.reviews-list');
    reviews.forEach((review) => {
      reviewsContainer.innerHTML += createReviewItem(review);
    });
  },
};

export default Detail;