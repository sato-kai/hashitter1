class ChangeDataProfileToUser < ActiveRecord::Migration[5.2]
  def change
    change_column :users, :profile, :text
  end
end
