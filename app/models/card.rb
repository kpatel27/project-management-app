class Card < ApplicationRecord
  belongs_to :list
  validates :title, presence: true
  delegate :board_id, to: :list

  def attributes
    super.merge("board_id" => board_id)
  end
end
