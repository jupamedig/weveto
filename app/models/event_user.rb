class EventUser < ActiveRecord::Base
  # Remember to create a migration!
  belongs_to :user
  belongs_to :event

  has_many :options
end
