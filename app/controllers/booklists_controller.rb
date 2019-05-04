class BooklistsController < ApplicationController

  # before_action :authenticate_user!#, :except => [ :show, :index ]

  def index
    @booklists = Booklist.all
    p @booklists
  end

  def show
    # @book = Book.find(params[:id])
  end

  def new
    # @books = Book.all
    # @users = User.all
  end

  def edit
    # @users = User.all
    # @book = Book.find(params[:id])
  end

  def create
    @booklist = Booklist.new(booklist_params)
    @booklist.save
    # if @book.save
    redirect_to booklists_path
    # else
      # render plain: 'book not added successfully'
    # end
  end

  def update
    # @book = Book.find(params[:id])

    # @book.update(book_params)
    # redirect_to @book
  end

  def destroy
    # @book = Book.find(params[:id])
    # @book.destroy

    # redirect_to root_path
  end

private

  def booklist_params
    params.require(:booklist).permit(:name)
  end

end