class Api::CardsController < ApplicationController
  def create
    puts params
    @card = Card.new(card_params)
    @card.list_id = params[:list_id]

    if @card.save
      render :create, status: 201
    else
      puts "error from else"
      puts params
      @error = @card.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActiveRecord::RecordNotFound
    puts "error from rescue notfound"
    wrong_id
  rescue ActionController::ParameterMissing
    puts "error from rescue params missing"
    parameter_missing
  rescue ActiveRecord::NotNullViolation
    puts "error from title being null"
    title_null
  end

  def show
    @card = Card.find(params[:id])
    if @card 
      render 'api/cards/show', status: 201
    else 
      @error = @card.errors.full_messages.join(', ')
      render 'api/shared/error', status: 404
    end
  end

  private

  def card_params
    params.require(:card).permit(:title, :due_date, :labels, :description, :position)
  end

  def wrong_id
    @error = "Invalid list ID"
    render 'api/shared/error', status: :not_found
  end
  def parameter_missing
    @error = "Missing parameter"
    render 'api/shared/error', status: :unprocessable_entity
  end
  def title_null
    @error = "Title is null"
    render 'api/shared/error', status: :unprocessable_entity
  end
end