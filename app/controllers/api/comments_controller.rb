class Api::CommentsController < ApplicationController
  def create
    @comment = Card.find(params[:card_id]).comments.new(comment_params)

    if @comment.save
      render :create, status: :created
    else
      @error = @comment.errors.full_messages.join(', ')
      render 'api/shared/error', status: :unprocessable_entity
    end
  rescue ActiveRecord::RecordNotFound
    wrong_id
  rescue ActionController::ParameterMissing
    parameter_missing
  end

  private

  def comment_params
    params.require(:comment).permit(:text)
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
