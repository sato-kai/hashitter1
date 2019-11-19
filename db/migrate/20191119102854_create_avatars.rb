class CreateAvatars < ActiveRecord::Migration[5.2]
  def change
    create_table :avatars do |t|
      t.references :user, foreign_key: true
      t.string :face, default: 'fat'
      t.string :hair, default: 'mens_hair1'
      t.string :hair_color, default: 'black'
      t.string :tops, default: 'fat'
      t.string :tops_color, default: 'skyblue'
      t.string :tops_line
      t.string :tops_line_color
      t.string :inner
      t.string :inner_color, default: 'yellow'
      t.string :bottoms, default: 'fat'
      t.string :bottoms_color, default: 'gray'
      t.string :bottoms_line
      t.string :bottoms_line_color
      t.string :spats
      t.string :spats_color, default: 'black'
      t.string :shoes, default: 'shoes1'
      t.string :shoes_color, default: 'blue'
      t.float :weekly_average_mileage, default: 0.0
      t.timestamps
    end
  end
end
