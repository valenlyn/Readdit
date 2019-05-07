class BooksController < ApplicationController

  # before_action :set_book, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!#, :except => [ :show, :index ]
  def find
    p 'hello find'
    p params
    @book = Book.search_by_title(params[:title])
    p @book
    respond_to do |format|
      format.json do
        render json: @book.to_json
      end
    end
  end


  def index
    if params[:search]

      @books = Book.search_by_title(params[:search])
      @users = User.all
      @books = @books.paginate(:page => params[:page])

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
    redirect_to books_path

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
    params.require(:book).permit(:title, :author, :image_url, :excerpt, :booklist_ids =>[])
  end

end