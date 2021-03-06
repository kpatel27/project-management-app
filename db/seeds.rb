# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Board.destroy_all

# board1 = Board.create({title: "First board"})
# board2 = Board.create({title: "Second board"})

Board.destroy_all
List.destroy_all
Card.destroy_all
board1 = Board.create({title: "First board"})

list1 = List.create({title: 'First List', board_id: board1.id })
list2 = List.create({title: 'Second List', board_id: board1.id })

card1 = Card.create({title: 'Card 1 of List 1', due_date:2.days.from_now, description:'Card1_1', list_id: list1.id})
card2 = Card.create({title: 'Card 2 of List 1', due_date:3.days.from_now, description:'Card1_2', list_id:list1.id})
card3 = Card.create({title: 'Card 1 of List 2', due_date:4.days.from_now, description:'Card2_1', list_id:list2.id})
card4 = Card.create({title: 'Card 2 of List 2', due_date:5.days.from_now, description:'Card2_2', list_id:list2.id})
card4 = Card.create({title: 'Card 3 of List 2', due_date:6.days.from_now, description:'Card2_3', list_id:list2.id})

