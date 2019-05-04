class BooksRacks < ActiveRecord::Migration[5.2]
  def change
    create_table :books_racks do |t|
      t.references :book
      t.references :rack
      t.timestamps
    end
  end
end