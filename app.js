var specialsPromise = MenuDataService.getMenuItemsForCategory('L');
specialsPromise.then(function (response) {
  ctrl.specials = response.data;
});
