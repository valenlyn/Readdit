class Rack < ActiveRecord::Base
  # Rack definitely have books(Adds to either read/reading/Want to Read..)
  # forEach Book, that same Book can belong to different users' 'Rack'
  has_and_belongs_to_many :books
  belongs_to :user
end