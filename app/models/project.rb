class Project < ActiveRecord::Base
  has_attached_file :photo, :styles => { :full => "600x450>", :thumb => "300x225>" }
end
