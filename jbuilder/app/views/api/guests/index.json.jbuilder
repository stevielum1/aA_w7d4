json.array! @guests do |guest|
  #json.set! guest.id do
  next unless guest.age.between?(40, 50)
    json.partial! 'api/guests/guest', guest: guest
  #end
end
