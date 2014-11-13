class Event < ActiveRecord::Base
  # Remember to create a migration!
  validates :occasion, presence: true

  has_many :events_users
  has_many :users, through: :events_users
end
