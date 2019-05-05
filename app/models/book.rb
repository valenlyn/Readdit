class Book < ActiveRecord::Base
  has_and_belongs_to_many :booklists
  has_many :reviews

  self.per_page = 10
end