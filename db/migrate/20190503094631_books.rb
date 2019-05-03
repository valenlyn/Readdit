class Books < ActiveRecord::Migration[5.2]
  def change
    create_table :books do |t|
      t.string :title
      t.string :author
      t.string :image_url
      t.timestamps
    end
  end
end