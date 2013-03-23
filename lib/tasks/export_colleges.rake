require 'csv'

desc "Export colleges to csv file for Mechanical Turks"
task :export_colleges => [:environment] do
  file_name = File.join(Rails.root, 'doc',"div2_turk.csv")
  CSV.open(file_name, "wb") do |csv|
    header_row = ['college_name', 'athletic_department_url', 'sport', 'coach_name', 'email', 'phone']
    csv << header_row
    College.all.each { |c|
      SPORTS.each { |s|
        csv << [c.name, c.athletic_website, s, '', '', '']
      }
    }
  end
end

SPORTS = [
  "Baseball",
  "Men's Basketball",
  "Women's Basketball",
  # "Bowling",
  "Men's Cross Country",
  "Women's Cross Country",
  # "Fencing",
  "Field Hockey",
  "Football",
  "Men's Golf",
  "Women's Golf",
  "Men's Gymnastics",
  "Women's Gymnastics",
  # "Men's Ice Hockey",
  # "Women's Ice Hockey",
  "Men's Lacrosse",
  "Women's Lacrosse",
  # "Rifle",
  # "Rowing",
  # "Skiing",
  "Men's Soccer",
  "Women's Soccer",
  "Softball",
  "Men's Swimming and Diving",
  "Women's Swimming and Diving",
  "Men's Tennis",
  "Women's Tennis",
  "Men's Indoor Track and Field",
  "Women's Indoor Track and Field",
  "Men's Outdoor Track and Field",
  "Women's Outdoor Track and Field",
  "Men's Volleyball",
  "Women's Volleyball",
  "Men's Water Polo",
  "Women's Water Polo",
  "Wrestling"]