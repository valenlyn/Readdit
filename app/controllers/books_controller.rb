class BooksController < ApplicationController

  protect_from_forgery prepend: true
  skip_before_action :verify_authenticity_token
  # before_action :set_book, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!#, :except => [ :show, :index ]
  def find
    p 'hello find'
    p params
    @book = Book.search_by_title(params[:title])
    @book = @book.paginate(:page => params[:page])

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
    # find the book with the corresponding :id
    @book = Book.find(params[:id])
    @booklists = Booklist.where(:user_id => current_user.id)

    #What about cases when this book don't have any reviews?
    #We will get an empty arr []
    arr = @book.reviews
    # render plain: arr[0]

    #Initially we must check if this book has any reviews!
    if arr.length > 0
      # declare an array to store user_id of review(s)
      @arr = []
      add_ratings = 0
      arr.each do |review|
        @arr << review.user_id
        add_ratings = add_ratings + review.rating
      end
      # # # Pass this to our show view
      @avg_ratings = add_ratings / @book.reviews.length
    end
  end

private

  def book_params
    p "hello"
    p params
    params.require(:book).permit(:title, :author, :image_url, :excerpt, :booklist_ids =>[])
  end

end