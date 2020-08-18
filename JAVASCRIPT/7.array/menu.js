const menu = [
  { id: 1, name: "chilly chicken", veg: false },
  { id: 2, name: "chilly paneer", veg: true },
  { id: 3, name: "chicken biriyani", veg: false },
  { id: 4, name: "mushroom biriyani", veg: true },
];

function filterVeg(menu) {
  const result = menu.filter((item) => item.veg === true); // const result=menu.filter(item=>item.veg);
  return result;
}

console.log(filterVeg(menu));

function search(menu, term) {
  const result = menu.filter((item) => item.name.includes(term));
  return result;
}

console.log(search(menu, "chicken"));
