const icons = {
  'shopping list': 'fa-solid fa-cart-shopping',
  'new feature': 'fa-solid fa-calendar-plus',
  remind: 'fa-solid fa-bell',
  goals: 'fa-solid fa-bullseye',
};

export default function getIconRef(iconName) {
  for (const key in icons) {
    if (key === iconName) {
      return icons[key];
    }
  }
}
