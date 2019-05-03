class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  has_many :book
  has_many :rack
  has_many :review
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
end