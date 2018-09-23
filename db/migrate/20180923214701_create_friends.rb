class CreateFriends < ActiveRecord::Migration[5.2]
  def change
    create_table :friends do |t|
      t.string :name
      t.string :location
      t.integer :age
      t.string :gender
      t.string :occupation
      t.text :quote

      t.timestamps
    end
  end
end