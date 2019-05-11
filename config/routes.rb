Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  resources :books, :booklists, :reviews, :bookstatuses
  root 'reviews#index'
  get 'find/:title' => 'books#find'

  #individual book add read status
  post '/bookstatuses/books' => 'bookstatuses#book_create'





  # BOOKS
  # get '/books' => 'books#index', as: 'books'
  # get '/books/new' => 'books#new', as: 'new_book'
  # post '/books' => 'books#create'
  # get '/books/:id' => 'books#show'
  # get '/books/:id/edit' => 'books#edit', as: 'edit_book'
  # patch '/books/:id' => 'books#update'
  # delete '/books/:id' => 'books#destroy'

  get '/books/:book_id/reviews/new' => 'reviews#new', as: 'book_review_new'
  post '/books/:book_id/reviews' => 'reviews#create', as: 'book_review_create'


  # BOOKLISTS

  get '/booklists/:booklist_id/edit' => 'booklists#edit', as: 'booklist_edit'
  patch '/booklists/:booklist_id' => 'booklists#update', as: 'booklist_create'


  # USERS
  # get '/user' => 'user#index', as: 'user'
  # get '/user/new' => 'user#new', as: 'new_customer'
  # post '/user' => 'user#create'
  # get '/user/:id' => 'user#show' , as: 'customer'
  # get '/user/:id/edit' => 'user#edit', as: 'edit_customer'
  # patch '/user/:id' => 'user#update'
  # delete '/user/:id' => 'user#destroy'

  get '/users/:user_id/books' => 'books#index', as: 'customer_books'
  get '/users/:user_id/books/new' => 'books#create', as: 'new_customer_books'
  post '/users/:user_id/books' => 'books#create'

  # post '/status/:status' => 'bookstatuses#status'

end