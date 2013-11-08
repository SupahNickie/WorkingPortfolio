class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :validatable, :registerable, :recoverable, :timeoutable and :omniauthable
  devise :database_authenticatable, :rememberable, :trackable
end
