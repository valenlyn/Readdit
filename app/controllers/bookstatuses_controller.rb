class BookstatusesController < ApplicationController

  before_action :authenticate_user!#, :except => [ :show, :index ]

  def index
    render plain: "hi"
  end

  def new
    @bookstatuses = Bookstatus.all
    @books = Book.all

  end

  def create
    @bookstatus = Bookstatus.new(bookstatus_params)
    if @bookstatus.save
      render plain: 'yay'
    else
      render plain: 'bookstatus not added successfully'
    end
  end

  def show

  end

  def edit
    @review = Review.find(params[:id])
  end

  def update
    @bookstatus = Bookstatus.find(params[:id])

    @bookstatus.update(bookstatus_params)
    redirect_to reviews_path
  end

  def status

  end

private

  def bookstatus_params
    params.require(:bookstatus).permit(:user_id, :book_id, :read_status)
  end

end