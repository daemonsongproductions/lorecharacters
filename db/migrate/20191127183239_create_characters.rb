class CreateCharacters < ActiveRecord::Migration[5.2]
  def change
    create_table :characters do |t|
      t.string  :name, null: false
      t.integer :available_event_points, null: false, default: 0
      t.integer :available_experience_points, null: false, default: 0
      t.integer :total_experience_points, null: false, default: 0
      t.integer :level, null: false, default: 1
      t.integer :player_id, null: false
      t.timestamps
    end

    add_index :characters, :player_id, unique: false

  end
end
