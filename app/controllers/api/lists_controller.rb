class Api::ListsController < ApplicationController
  def create
    board = Board.find(params[:board_id])
    @list = List.new(list_params)
    @list.board_id = board.id

    if @list.save
      render :create, status: :created
    else
      @error = @list.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActiveRecord::RecordNotFound
    wrong_id
  rescue ActionController::ParameterMissing
    parameter_missing
  end

  def update
    @list = List.find(params[:id])
    puts params
    
    if @list.update(list_params)
      render :update, status: :accepted
    else
      @error = @list.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActiveRecord::RecordNotFound
    wrong_id
  rescue ActionController::ParameterMissing
    parameter_missing
  end

  private

  def list_params
    params.require(:list).permit(:title, :position)
  end

  def wrong_id
    @error = "Invalid list ID"
    render 'api/shared/error', status: :not_found
  end
  def parameter_missing
    @error = "Missing parameter"
    render 'api/shared/error', status: :unprocessable_entity
  end
end