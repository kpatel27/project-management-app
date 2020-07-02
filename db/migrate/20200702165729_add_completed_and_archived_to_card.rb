class AddCompletedAndArchivedToCard < ActiveRecord::Migration[6.0]
  def change
    add_column :cards, :completed, :boolean, { default: false }
    add_column :cards, :archived, :boolean, { default: false }
  end
end
