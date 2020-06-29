class Api::CardsController < ApplicationController
  def create
    puts params
    @card = Card.new(card_params)

    if @card.save
      render :create, status: 201
    else
      @error = @card.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActiveRecord::RecordNotFound
    wrong_id
  rescue ActionController::ParameterMissing
    parameter_missing
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
    params.require(:card).permit(:title, :due_date, :labels, :description, :position, :list_id)
  end
end