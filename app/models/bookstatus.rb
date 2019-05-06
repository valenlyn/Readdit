class Bookstatus < ActiveRecord::Base
  # AR classes are singular and capitalized by convention
  belongs_to :user
  belongs_to :book
end