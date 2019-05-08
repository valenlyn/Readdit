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

      # Checking if there are existing records for this specific book_id for the current user
      @test = Bookstatus.where('book_id = ? and user_id = ?', bookstatus_params[:book_id], bookstatus_params[:user_id])

      # If a record is found...
      if @test[0]

        @bookstatus = Bookstatus.find(@test[0].id)

        # Update the record with the new ID
        if @bookstatus.update(bookstatus_params)
          # If update is successful, do this
          render plain: 'yay updated'
        else
          # If update is unsuccessful, do this
          render plain: 'oops not updated'
        end

      # If no records are found...
      else
        @bookstatus = Bookstatus.new(bookstatus_params)

        # Create a new record
        if @bookstatus.save
          #If new record is successfully created, do this
          render plain: 'no existing records were found, new record saved'
        else
          # If new record is not successfully created, do this
          render plain: 'bookstatus not added successfully'
        end
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

private

  def bookstatus_params
    params.require(:bookstatus).permit(:user_id, :book_id, :read_status)
  end

end