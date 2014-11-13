class Option < ActiveRecord::Base
  # Remember to create a migration!
  belongs_to :events_user
end
