import view from './View';

class ResaultView extends view {
  _recipeContainer = document.querySelector('.results');
  _generateMarkup() {
    return this._data.map(this._generateMarkupPrieviw).join('');

  }
  _generateMarkupPrieviw(result){
    return `
                  <li class="preview">
        <a class="preview__link preview__link--active" href="${result.id}">
          <figure class="preview__fig">
            <img src="${result.image}" alt="Test" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${result.title}</h4>
            <p class="preview__publisher">${result.publisher}</p>
            <div class="preview__user-generated">
              <svg>
                <use href="src/img/icons.svg#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>`;  }
}
export default new ResaultView();
