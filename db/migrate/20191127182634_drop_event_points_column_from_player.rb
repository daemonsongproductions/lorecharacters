class DropEventPointsColumnFromPlayer < ActiveRecord::Migration[5.2]
  def change
    remove_column :players, :available_event_points
  end
end
