class Tweet < ApplicationRecord
  belongs_to :user
  mount_uploader :image, ImageUploader
  has_many :comments, dependent: :destroy
  has_many :likes, dependent: :destroy
  has_many :liking_users, through: :likes, source: :user

  validates :text, presence: true, unless: :image?
end
