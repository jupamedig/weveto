class Event < ActiveRecord::Base
  # Remember to create a migration!
  has_many :options
  has_many :users
end
