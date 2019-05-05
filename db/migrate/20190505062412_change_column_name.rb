class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :booklists, :type, :booklist_type
  end
end