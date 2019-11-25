class CreateWorks < ActiveRecord::Migration[5.2]
  def change
    create_table :works do |t|
      t.references :user, foreign_key: true
      t.float :run
      t.timestamps
    end
  end
end
