class CreateTweets < ActiveRecord::Migration[5.2]
  def change
    create_table :tweets do |t|
      t.text :text
      t.string :image
      t.integer :likes_count
      t.references :user, foreign_key: true
      t.timestamps
    end
  end
end
