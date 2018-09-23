class AddAddedFriendsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :added_friends, :text
  end
end
