class BooklistsController < ApplicationController

  before_action :authenticate_user!#, :except => [ :show, :index ]

  def index

    if request.query_parameters[:sort] == "all"
      @books = Book.joins(:bookstatuses)
    elsif request.query_parameters[:sort] == "current"
      @books = Book.joins(:bookstatuses)
              .where('read_status = 2')
    elsif request.query_parameters[:sort] == "want"
      @books = Book.joins(:bookstatuses)
              .where('read_status = 1')
    else request.query_parameters[:sort] == "read"
      @books = Book.joins(:bookstatuses)
              .where('read_status = 3')
    end

  end

  def new
    @users = User.all
    @books = Book.all

  end

  def edit
    @users = User.all
    @books = Book.all
    @booklists = Booklist.find(params[:id])

  end

  def create
    @booklist = Booklist.new(book_params)

    if @booklist.save
      redirect_to booklists_path
    else
      render plain: 'booklist not added created'
    end
  end

  def update
    @booklist = Booklist.find(params[:id])

    @booklist.update(booklist_params)
    redirect_to @booklist

  end

  def destroy
    @booklist = Booklist.find(params[:id])

    @booklist.destroy

    redirect_to root_path
  end

  def show
    @booklist = Booklist.find(params[:id])

  end

private

  def book_params
    params.require(:booklist).permit(:user_id, :type, :book_ids =>[])
  end
end