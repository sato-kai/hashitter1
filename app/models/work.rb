class Work < ApplicationRecord
  belongs_to :user

  validates :run, numericality: {greater_than: 0}
end
