class AddExcerptToBooks < ActiveRecord::Migration[5.2]
  def change
    add_column :books, :excerpt, :text
  end
end
