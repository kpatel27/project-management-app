json.merge! @board.attributes

json.lists(@board.lists) do |list|
  json.merge! list.attributes

  json.cards(list.cards) do |card|
    json.id card.id
    json.title card.title
    # the rest of card attributes
  end
end