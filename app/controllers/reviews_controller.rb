class ReviewsController < ApplicationController

  before_action :authenticate_user!#, :except => [ :show, :index ]

  def index
    render plain: 'reviews here'
  end

  def new

  end

  def create
    @review = Review.new(review_params)

    if @review.save
      redirect_to root_path
    else
      render plain: 'review not added successfully'
    end
  end

  def show
    @review = Review.find(params[:id])
  end

private

  def review_params
    params.require(:review).permit(:user_id, :book_id, :reviews, :rating)
  end

end