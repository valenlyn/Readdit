class Bookstatuses < ActiveRecord::Migration[5.2]
  def change
    create_table :bookstatuses do |t|
      t.references :book
      t.references :user
      t.integer :read_status
      t.timestamps
    end
  end
end