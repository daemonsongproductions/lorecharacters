class AddEventAndLorePoints < ActiveRecord::Migration[5.2]
  def change
    add_column :players, :available_event_points, :integer, null: false, default: 0
    add_column :players, :available_lore_points, :integer, null: false, default: 0
  end
end
