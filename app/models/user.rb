class User < ActiveRecord::Base
  # Remember to create a migration!
  validates :name, presence: true
  validates :name, uniqueness: true

  has_many :events_users
  has_many :events, through: :events_users
end
