class Message < ActiveRecord::Base
  validates :name, presence: true, :format => { with: /\A[a-zA-Z\s]+\z/, message: "can't have special characters" }
  validates :email, presence: true, :format => { :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i }
  validates :message, presence: true, :format => { with: /\A[0-9a-zA-Z\s\.?!,\']+\z/, message: "can't have special characters. For security reasons, only letters, numbers, and periods, question marks, exclamation points, commas, and apostrophes are allowed." }
end
