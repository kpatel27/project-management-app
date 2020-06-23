class CreateCards < ActiveRecord::Migration[6.0]
  def change
    create_table :cards do |t|
      t.string :title
      t.datetime :due_date
      t.string :labels, array: true, default: []
      t.string :description
      t.float :position

      t.references :list, null: false, foreign_key: true

      t.timestamps
    end
  end
end
