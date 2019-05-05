class ReviewsController < ApplicationController

  before_action :authenticate_user!#, :except => [ :show, :index ]

  def index

    if request.query_parameters[:sort]
      @reviews = Review.order(rating: :desc)
    else
      #showing most recent reviews first
      @reviews = Review.order(created_at: :desc)
    end

  end

  def new
    @books = Book.all
    @users = User.all
  end

  def create
    @review = Review.new(review_params)

    if @review.save
      redirect_to reviews_path
    else
      render plain: 'review not added successfully'
    end
  end

  def show
    @review = Review.find(params[:id])
  end

  def edit
    @review = Review.find(params[:id])
  end

  def update
    @review = Review.find(params[:id])

    @review.update(review_params)
    redirect_to reviews_path
  end


  def destroy
    @review = Review.find(params[:id])

    if @review.destroy
      redirect_to reviews_path
    else
      'review was not deleted successfully'
    end
  end

private

  def review_params
    params.require(:review).permit(:user_id, :book_id, :reviews, :rating)
  end

end