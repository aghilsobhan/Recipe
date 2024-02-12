import icons from 'url:../../img/icons.svg';

export default class view {
  _data;

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();

    this._recipeContainer.insertAdjacentHTML('afterbegin', markup);
  }
  _clear() {
    this._recipeContainer.innerHTML = '';
  }

  renderSpinner() {
    const markup = `
            <div class="spinner">
            <svg>
              <use href="${icons}#icon-loader"></use>
            </svg>
          </div> `;
    this._clear();
    this._recipeContainer.insertAdjacentHTML('afterbegin', markup);
  }
  renderError(message = this._errorMessage) {
    const markup = `
        <div class="error">
                <div>
                  <svg>
                    <use href="${icons}_icon-alert-triangle"></use>
                  </svg>
                </div>
                <p>${message}</p>
              </div> `;
    this._clear();
    this._recipeContainer.insertAdjacentHTML('afterbegin', markup);
  }
  renderMessage(message = this._message) {
    const markup = `
            <div class="message">
            <div>
              <svg>
                <use href="${icons}#icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>
            `;
  }
  ErrorTag() {
    const Error = ` <!-- <div class="error">
          <div>
            <svg>
              <use href="${icons}#icon-alert-triangle"></use>
            </svg>
          </div>
          <p>No recipes found for your query. Please try again!</p>
        </div>`;
    this._recipeContainer.innerHTML = '';

    this._recipeContainer.insertAdjacentHTML('afterbegin', Error);
  }
}
