class Event < ActiveRecord::Base
  # Remember to create a migration!
  validates :occasion, presence: true

  has_many :users
end
