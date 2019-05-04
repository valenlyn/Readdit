class RacksController < ApplicationController

  # before_action :authenticate_user!#, :except => [ :show, :index ]

  def index
    @racks = Rack.all
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
    @rack = Rack.new(rack_params)
    @rack.save
    # if @book.save
      redirect_to racks_path
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

  def rack_params
    params.require(:rack).permit(:user_id, :name, :book_ids => [])
  end

end