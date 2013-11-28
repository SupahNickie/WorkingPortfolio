require 'mime/types'

class Project < ActiveRecord::Base
  has_attached_file :photo, :styles => { :full => "500x375>", :thumb => "300x225>" }
  has_attached_file :mp3

end
