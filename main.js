let myApp = angular.module('myApp', ['ngRoute']);

myApp.config(($routeProvider) => {
    $routeProvider.when('/', {
        controller: "BooksController",
        templateUrl: 'views.books.html'
})
    .when('/books', {
        controller: 'BooksController',
        templateUrl: 'views/books.html'
    })
    .when('/books/details/:id', {
        controller: 'BooksController',
        templateUrl: 'views/books_details.html'
    })
    .when('/books/add', {
        controller: 'BooksController',
        templateUrl: 'views/add_books.html'
    })
    .when('/books/edit/:id', {
        controller: 'BooksController',
        templateUrl: 'views/edit_books.html'
    };