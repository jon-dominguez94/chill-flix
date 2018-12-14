class CreateProfiles < ActiveRecord::Migration[5.2]
  def change
    create_table :profiles do |t|
      t.string :username, null: false
      t.integer :user_id, null: false

      t.timestamps
    end
    add_index :profiles, [:username, :user_id], unique: true
  end
end
