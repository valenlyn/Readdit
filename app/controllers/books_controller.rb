class BooksController < ApplicationController

  before_action :authenticate_user!#, :except => [ :show, :index ]

  def index


    ####

  if params[:title]

    p "here in params"

    stringSearch = params[:title].capitalize

    @books = Book.where(["title LIKE ? ", "%#{stringSearch}%"]);

    p @books;
    @books = @books.paginate(:page => params[:page])

    @users = User.all
  else
    @books = Book.paginate(:page => params[:page])
    @users = User.all
  end

  end

  def new
    @users = User.all

  end

  def edit
    @users = User.all
    @book = Book.find(params[:id])

  end

  def create
    @book = Book.new(book_params)

    if @book.save
      redirect_to books_path
    else
      render plain: 'book not added successfully'
    end
  end

  def update
    @book = Book.find(params[:id])

    @book.update(book_params)
    redirect_to @book

  end

  def destroy
    @book = Book.find(params[:id])
    p "hello"
    p @book
    @book.destroy

    redirect_to root_path
  end

  def show
    @book = Book.find(params[:id])

  end

private

  def book_params
    p "hello"
    p params
    params.require(:book).permit(:title, :author, :image_url, :excerpt, :book_id, :booklist_ids =>[])
  end

end