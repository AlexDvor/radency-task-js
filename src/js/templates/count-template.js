export default function countTemplate() {
  return `
    <li class="count-list__item">
      <!--  -->
      <div class="category-image">
        <div class="category-image__background">
          <span class="category-image__icon">
            <i class="fa-solid fa-calendar-plus"></i>
          </span>
        </div>
        <p class="category-image__title">New Feature</p>
      </div>
      <!--  -->
      <ul class="count-value">
        <li class="count-value__item" data-count="active">{{active}}</li>
        <li class="count-value__item" data-count="archived">{{archived}}</li>
        <li class="count-value__item" data-count="done">{{done}}</li>
      </ul>
      <!--  -->
    </li>`;
}
