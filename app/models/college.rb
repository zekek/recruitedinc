class College < ActiveRecord::Base
  attr_accessible :athletic_website, :classification, :name, :school_website, :state, :zip_code

  validates :name, presence: true
end
