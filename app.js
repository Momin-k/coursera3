var specialsPromise = MenuDataService.getMenuItemsForCategory('L');
specialsPromise.then(function (response) {
  ctrl.specials = response.data;
});
var categoriesPromise = MenuDataService.getAllCategories();
categoriesPromise.then(function (response) {
  var categories = response.data;
  var randomIndex = Math.floor(Math.random() * categories.length);
  var randomCategoryShortName = categories[randomIndex].short_name;

  var specialsPromise = MenuDataService.getMenuItemsForCategory(randomCategoryShortName);
  specialsPromise.then(function (response) {
    ctrl.specials = response.data;
  });
});
HomeController.$inject = ['MenuDataService'];
function HomeController(MenuDataService) {
  var ctrl = this;
  // ...
}

