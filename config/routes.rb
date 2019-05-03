Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'books#index'

  # BOOKS
  get '/books' => 'books#index', as: 'books'
  get '/books/new' => 'books#new', as: 'new_book'
  post '/books' => 'books#create'
  get '/books/:id' => 'books#show'
  get '/books/:id/edit' => 'books#edit', as: 'edit_book'
  patch '/books/:id' => 'books#update'
  delete '/books/:id' => 'books#destroy'

  get '/books/:book_id/user' => 'user#index', as: 'book_user'
  get '/books/:book_id/user/new' => 'user#create', as: 'new_book_customer'
  post '/books/:book_id/user' => 'user#create'

  # USERS
  get '/user' => 'user#index', as: 'user'
  get '/user/new' => 'user#new', as: 'new_customer'
  post '/user' => 'user#create'
  get '/user/:id' => 'user#show' , as: 'customer'
  get '/user/:id/edit' => 'user#edit', as: 'edit_customer'
  patch '/user/:id' => 'user#update'
  delete '/user/:id' => 'user#destroy'

  get '/user/:user_id/books' => 'books#index', as: 'customer_books'
  get '/user/:user_id/books/new' => 'books#create', as: 'new_customer_books'
  post '/user/:user_id/books' => 'books#create'

  # REVIEWS



end