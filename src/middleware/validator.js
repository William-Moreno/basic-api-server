'use strict';

module.exports = function(request, response, next) {
  if(!request.query.name) {
    next('No name on query');
  } else {
    next();
  }
};