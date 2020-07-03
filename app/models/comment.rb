class Comment < ApplicationRecord
  belongs_to :card
  validates :text, presence: true
end
