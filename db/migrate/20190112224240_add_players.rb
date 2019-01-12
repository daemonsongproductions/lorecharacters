class AddPlayers < ActiveRecord::Migration[5.2]
  def change
    create_table :players do |t|
      t.integer :user_id, null: false
      t.string :name, null: true
      t.timestamps null: false
    end

    add_index :players, :user_id,                unique: true

  end
end
