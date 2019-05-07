class Book < ActiveRecord::Base
  include PgSearch

  has_and_belongs_to_many :booklists
  has_many :reviews
  has_many :bookstatuses

  self.per_page = 10

  pg_search_scope :search_by_title, :against =>[:title],
  using:{
    :tsearch => {:prefix=>true}
  }

end