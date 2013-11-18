require 'mime/types'

class Project < ActiveRecord::Base
  has_attached_file :photo, :styles => { :full => "600x450>", :thumb => "300x225>" },
                            :storage => :s3,
                            :s3_credentials => "#{Rails.root}/config/s3.yml"
                            :path => ":attachment/:id/:style.:extension",
                            :bucket => "portfolio.site.bucket"
  has_attached_file :mp3

end
