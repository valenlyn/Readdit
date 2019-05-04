class DropRacksAndLinkTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :books_racks
    drop_table :racks
  end
end