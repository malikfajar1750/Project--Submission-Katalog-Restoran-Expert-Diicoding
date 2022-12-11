import RestaurantsAPISource from '../data/restaurants-api-resource';
import { createReviewItem } from '../views/templates/template-creator';

const AddReview = {
  async init({ reviewsContainer, addReviewButton, data }) {
    this._reviewsContainer = reviewsContainer;

    addReviewButton.addEventListener('click', (event) => {
      if (!navigator.onLine) {
        console.log('Anda tidak bisa menambah review saat keadaan offline');
        return;
      }
      
      this._sendReview(event, data);
      this._clearInput(data);
    });
  },

  async _sendReview(event, data) {
    event.stopPropagation();

    const review = {
      id: data.id,
      name: data.nameInput.value,
      review: data.reviewInput.value,
    };

    const reviews = await RestaurantsAPISource.addReview(review);
    this._renderAllReviews(reviews);
  },

  async _renderAllReviews(reviews) {
    this._reviewsContainer.innerHTML = '';
    reviews.forEach((review) => {
      this._reviewsContainer.innerHTML += createReviewItem(review);
    });
  },

  async _clearInput(data) {
    data.nameInput.value = '';
    data.reviewInput.value = '';
  },
};

export default AddReview;