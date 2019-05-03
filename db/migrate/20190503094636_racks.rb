class Racks < ActiveRecord::Migration[5.2]
  def change
    create_table :racks do |t|
      t.references :user
      t.references :book
      t.integer :type
      t.timestamps
    end
  end
end