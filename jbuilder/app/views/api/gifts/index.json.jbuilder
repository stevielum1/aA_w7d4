# json.gifts do
  json.array! @gifts do |gift|
    json.extract! gift, :title, :description
  end
# end
