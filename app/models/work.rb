class Work < ApplicationRecord
  belongs_to :user

  validates :run, numericality: {greater_than_or_equal_to: 0}
end
