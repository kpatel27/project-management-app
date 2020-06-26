class AddTitleValidation < ActiveRecord::Migration[6.0]
  def change
    change_column_null :lists, :title, false
    change_column_null :cards, :title, false
    change_column_null :boards, :title, false
  end
end
