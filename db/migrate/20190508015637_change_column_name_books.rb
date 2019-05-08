class ChangeColumnNameBooks < ActiveRecord::Migration[5.2]
  def change
    rename_column :books, :excerpt, :_description
  end
end