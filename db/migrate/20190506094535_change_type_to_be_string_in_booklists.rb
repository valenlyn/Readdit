class ChangeTypeToBeStringInBooklists < ActiveRecord::Migration[5.2]
  def change
    change_column :booklists, :booklist_type, :string
  end
end