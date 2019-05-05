class RemoveColumn < ActiveRecord::Migration[5.2]
  def change
    remove_column :booklists, :book_id
  end
end