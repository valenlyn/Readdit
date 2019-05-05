class BooklistsController < ApplicationController

  before_action :authenticate_user!#, :except => [ :show, :index ]

  def index
    @booklists = Booklist.all
    @users = User.all


  end

  def new
    @users = User.all

  end

  def edit
    @users = User.all
    @booklists = Booklist.find(params[:id])

  end

  def create
    @booklist = Booklist.new(book_params)

    if @booklist.save
      redirect_to booklists_path
    else
      render plain: 'book not added successfully'
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