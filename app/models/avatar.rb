class Avatar < ApplicationRecord
  belongs_to :user, optional: true, inverse_of: :avatar
end
