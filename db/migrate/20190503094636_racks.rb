class Racks < ActiveRecord::Migration[5.2]
  def change
    create_table :racks do |t|
      t.references :user
      t.references :book
      # t.string :type
      t.string :name
      t.timestamps
    end
  end
end