@pokemon.each do |poke|
  json.set! poke.id do
    json.extract! poke, :id, :name
    if poke.image_url.include?(".svg")
      json.image_url asset_path(poke.image_url)
    else
      json.image_url poke.image_url
    end
  end
end
