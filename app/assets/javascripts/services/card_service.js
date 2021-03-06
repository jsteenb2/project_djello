app.factory("cardService", ["Restangular", function(Restangular) {

  var updateCard = function(params){
    console.log(params);
    var data = {
      card: {
        description: params.description,
        title: params.title,
        completed: params.completed,
        due_date: params.dueDate
      }
    };
    return Restangular.one("cards", params.id)
      .patch(data);
  };

  var createCard = function(params){
    var data = {
      card: {
        list_id: params.list_id,
        description: params.description,
        title: params.title,
        due_date: params.dueDate
      },
      activity: params.newActivity
    };
    return Restangular.all("cards").post(data);
  };

  var removeCard = function(id){
    return Restangular.one("cards", id).remove();
  };

  return {
    updateCard: updateCard,
    createCard: createCard,
    removeCard: removeCard
  };
}]);
