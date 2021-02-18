'use strict';

module.exports = function(request, response, next) {
  if(!parseInt(request.params.id)) {
    next('Missing person ID');
  } else {
    next();
  }
};