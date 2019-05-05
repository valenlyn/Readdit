class BooklistsBooks < ActiveRecord::Migration[5.2]
  def change
    create_table :booklists_books do |t|
      t.references :book
      t.references :booklist
      t.timestamps
    end
  end
end