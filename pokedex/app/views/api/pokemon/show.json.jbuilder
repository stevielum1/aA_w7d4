json.pokemon do
  json.set! @pokemon.id do
    json.extract! @pokemon, :id, :name, :attack, :defense, :moves, :poke_type, :item_ids
    if @pokemon.image_url.include?(".svg")
      json.image_url asset_path(@pokemon.image_url)
    else
      json.image_url @pokemon.image_url
    end
  end
end

if @pokemon.items
  json.items do
    @pokemon.items.each do |item|
      json.set! item.id do
        json.extract! item, :id, :name, :pokemon_id, :price, :happiness
        if item.image_url.include?(".svg")
          json.image_url asset_path(item.image_url)
        else
          json.image_url item.image_url
        end
      end
    end
  end
end
