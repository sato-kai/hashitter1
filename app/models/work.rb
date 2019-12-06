class Work < ApplicationRecord
  belongs_to :user
  
  validates :run, numericality: true
end
