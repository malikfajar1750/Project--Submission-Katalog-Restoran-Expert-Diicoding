import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class RestoCard extends HTMLElement {
  set items(data) {
    this._data = data;
    this._render();
  }

  // 

  _render() {
    this.innerHTML = `
      <a href="#/detail/${this._data.id}">
        <div class="city">
          <i class="fas fa-map-marker-alt"></i>
          <span>⭐️ ${this._data.city}</span>
        </div>
        <div class="skeleton">
          <img class="lazyload" data-src="https://restaurant-api.dicoding.dev/images/small/${this._data.pictureId}" alt="${this._data.name} restaurant"></img>
        </div>
        <section class="card-info">
            <div class="rating">
                <span> Rating : ${this._data.rating}/5</span>
            </div>
            <h3 class="name">${this._data.name}</h3>
            <p class="desc">${this._data.description}</p>
        </section>
      </a>
    `;
  }
}

customElements.define('resto-card', RestoCard);