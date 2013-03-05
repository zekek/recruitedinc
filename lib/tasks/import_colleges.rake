require 'csv'

desc "Import colleges from csv file"
task :import_colleges => [:environment] do

  College.delete_all

  file = "doc/div2.txt"

  CSV.foreach(file, :headers => true) do |row|
    College.create ({
      :name => row[0].try(:strip),
      :classification => row[1].try(:strip),
      :zip_code => row[2].try(:strip),
      :state => row[3].try(:strip),
      :school_website => row[4].try(:strip),
      :athletic_website => row[5].try(:strip)
    })
  end
end