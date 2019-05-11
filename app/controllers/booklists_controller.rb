class BooklistsController < ApplicationController

  before_action :authenticate_user!#, :except => [ :show, :index ]

  def index

    if request.query_parameters[:sort] == "current"
      @books = Book.joins(:bookstatuses)
              .where('read_status = ? and user_id = ?', 2, current_user.id)
    elsif request.query_parameters[:sort] == "want"
      @books = Book.joins(:bookstatuses)
              .where('read_status = ? and user_id = ?', 1, current_user.id)
    elsif request.query_parameters[:sort] == "read"
      @books = Book.joins(:bookstatuses)
              .where('read_status = ? and user_id = ?', 3, current_user.id)
    elsif request.query_parameters[:sort]
      @books = Book.joins(:booklists)
              .where('booklists.id = ? and user_id = ?', request.query_parameters[:sort], current_user.id)
    else
      @books = Book.joins(:bookstatuses)
              .where('user_id = ?', current_user.id)
              # .joins(:booklists)
              # .where('user_id = ?', current_user.id)
    end

    @booklists = Booklist.where(:user_id => current_user.id)

    # Calculating lengths
    @all_books = Book.joins(:bookstatuses)
              .where('user_id = ?', current_user.id).length
    @currently_reading = Book.joins(:bookstatuses)
              .where('read_status = ? and user_id = ?', 2, current_user.id).length
    @want_read = Book.joins(:bookstatuses)
              .where('read_status = ? and user_id = ?', 1, current_user.id).length
    @read_books = Book.joins(:bookstatuses)
              .where('read_status = ? and user_id = ?', 3, current_user.id).length

  end

  def new
    @users = User.all
    @books = Book.all

  end

  def edit
    # @users = User.all
    # @books = Book.all
    # @booklists = Booklist.find(params[:id])

  end

  def create
    @booklist = Booklist.new(book_params)

    if @booklist.save
      redirect_to booklists_path
    else
      render plain: 'booklist not created'
    end
  end

  def update
    @booklist = Booklist.find(params[:id])

    @booklist.update(booklist_params)
    redirect_to booklists_path
  end

  def destroy
    @booklist = Booklist.find(params[:id])

    @booklist.destroy

    redirect_to @booklist
  end

  def show
    @booklist = Booklist.find(params[:id])

  end

private

  def booklist_params
    params.require(:booklist).permit(:user_id, :booklist_type)
  end
end