class ChangeRacksTableNameToBooklistsTableName < ActiveRecord::Migration[5.2]
  def change
    rename_table :racks, :booklists
  end
end