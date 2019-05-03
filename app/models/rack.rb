class Rack < ActiveRecord::Base
  has_many_and_belongs_to :books
  belongs_to :user
end