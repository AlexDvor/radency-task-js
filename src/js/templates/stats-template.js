export default function statsTemplate() {
  return `
  <li class="count-list__item">
      <div class="category-image">
        <div class="category-image__background">
          <span class="category-image__icon">{{getImage name}}</span>
        </div>
        <p class="category-image__title">{{parseCategory name}}</p>
      </div>
      <ul class="count-value" data-stats="shopping list">
        <li class="count-value__item" data-stats="active">{{active}}</li>
        <li class="count-value__item" data-stats="archived">{{archived}}</li>
        <li class="count-value__item" data-stats="done">{{done}}</li>
      </ul>
    </li>
   `;
}
