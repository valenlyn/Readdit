class Reviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.references :user
      t.references :book
      t.text :reviews
      t.decimal :rating
      t.timestamps
    end
  end
end