class Booklist < ActiveRecord::Base
  has_and_belongs_to_many :books
  belongs_to :user

  validates :booklist_type, presence: true, length: { minimum: 1, maximum: 20 }
end