class AddUsernameToUsers < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :username, :string
    add_index :users, :username, unique: true #Add index for quick lookup followed by ensuring usernames are always unique
  end
end