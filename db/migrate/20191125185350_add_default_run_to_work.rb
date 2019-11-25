class AddDefaultRunToWork < ActiveRecord::Migration[5.2]
  def change
    change_column :works, :run, :float, default: 0
  end
end
