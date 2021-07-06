# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Vendors
regional = Vendor.create!(name: "Regional Distributors, Inc.")
kecks = Vendor.create!(name: "Keck's Food Service")
palmer = Vendor.create!(name: "Palmer Food Services")

# Products
regional_pizza_boxes = Product.create!(description: "00177 PCA 7\" CORRUGATED STOCK PRINT PIZZA BOX 50/BUNDLE", part_no: "21353")
regional_pizza_crusts = Product.create!(description: "VILLA ITALIANO 7\" PIZZA CRUSTS (SAMPLE DATA)", part_no: "00001")
regional_pizza_sauce = Product.create!(description: "MAMA MIA PIZZA SAUCE (SAMPLE DATA)", part_no: "00002")
regional_mozzarella_cheese = Product.create!(description: "GIOVANNI MOZZARELLA CHEESE (SAMPLE DATA)", part_no: "00003")

# Buildings
main_barn = Building.create!(name: "Main Barn")
food_barn = Building.create!(name: "Food Barn")
corn_barn = Building.create!(name: "Corn Barn")
shade_barn = Building.create!(name: "Shade Barn")
csa_barn = Building.create!(name: "CSA Barn")
shakeup_truck_building = Building.create!(name: "Shakeup Truck")
smoke_shack_building = Building.create!(name: "Smoke Shack")
grill_shack_building = Building.create!(name: "Grill Shack")

# Kitchens
bakery = Kitchen.create!(name: "Bakery")
bakery.building = main_barn
smokehouse = Kitchen.create!(name: "Smokehouse")
smokehouse.building = main_barn
shakes_and_cakes = Kitchen.create!(name: "Shakes & Cakes")
shakes_and_cakes.building = food_barn
pizza_porch = Kitchen.create!(name: "Pizza Porch")
pizza_porch.building = food_barn
fresh_grill = Kitchen.create!(name: "Fresh Grill")
fresh_grill.building = food_barn
kettle_barn = Kitchen.create!(name: "Kettle Barn")
kettle_barn.building = corn_barn
shakeup_truck_kitchen = Kitchen.create!(name: "Shakeup Truck")
shakeup_truck_kitchen.building = shakeup_truck_building
smoke_shack_kitchen = Kitchen.create!(name: "Smoke Shack")
smoke_shack_kitchen.building = smoke_shack_building
grill_shack_kitchen = Kitchen.create!(name: "Grill Shack")
grill_shack_kitchen.building = grill_shack_building

# Recipes 
cheese_pizza_recipe = Recipe.create!(name: "Personal Cheese Pizza", directions: "Here is how to make a Personal Cheese Pizza...")
cheese_pizza_recipe.prep_kitchen = pizza_porch

# Paper Products
box_for_cheese_pizza = PaperProduct.create!(name: "pizza box for Cheese Pizza")
box_for_cheese_pizza.product = regional_pizza_boxes
box_for_cheese_pizza.recipe = cheese_pizza_recipe

# Food Products
cheese_pizza_crust = FoodProduct.create!(name: "pizza crust")
cheese_pizza_crust.product = regional_pizza_crusts
cheese_pizza_crust.recipe = cheese_pizza_recipe
cheese_pizza_sauce = FoodProduct.create!(name: "pizza sauce")
cheese_pizza_sauce.product = regional_pizza_sauce
cheese_pizza_sauce.recipe = cheese_pizza_recipe
cheese_pizza_cheese = FoodProduct.create!(name: "mozzarella cheese")
cheese_pizza_cheese.product = regional_mozzarella_cheese
cheese_pizza_cheese.recipe = cheese_pizza_recipe

# NCRs

# Invoices (includes quotes)
