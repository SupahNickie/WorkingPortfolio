class Blog < ActiveRecord::Base
  has_attached_file :photo, :styles => { :full => "500x375>", :thumb => "300x225>" }
  has_many :photos, as: :photoable

end
