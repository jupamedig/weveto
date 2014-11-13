class User < ActiveRecord::Base
  # Remember to create a migration!
  validates :name, presence: true
  validates :name, uniqueness: true

  has_many :options
  belongs_to :event
end
