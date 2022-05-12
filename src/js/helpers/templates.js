export default function toDoTemplate() {
  return `
    <li class="card" id={{id}}>
  <div class="category-image">
    <div class="category-image__background">
      <span class="category-image__icon">
       {{getImage category}}
      </span>
    </div>
    <p class="category-image__title">Shopping List</p>
  </div>

    <ul class="field-cards">
      <li class="field-cards__item ">{{currentData}}</li>
      <li class="field-cards__item ">{{category}}</li>
      <li class="field-cards__item ">{{content}}</li>
      <li class="field-cards__item ">{{currentTime }}</li>
    </ul>

  <ul class="card-button__list">
    <li class="card-button__item">
      <button class="card-button__btn" type="button" data-action="edit">
        <span class="card-button__icon"> <i class="fa-solid fa-pen fa-todo-hover" data-action="edit"></i></span>
        </button>
    </li>
    <li class="card-button__item">
      <button class="card-button__btn" type="button" data-action="archive">
        <span class="card-button__icon">
          <i class="fa-solid fa-box-archive fa-todo-hover" data-action="archive"></i>
          </span>
        </button>
    </li>
    <li class="card-button__item">
      <button class="card-button__btn" type="button" data-action="remove">
        <span class="card-button__icon"> <i class="fa-solid fa-trash-can fa-todo-hover" data-action="remove"></i>
        </span>
        </button>
    </li>
  </ul>
</li>`;
}
