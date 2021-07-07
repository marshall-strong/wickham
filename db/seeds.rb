# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Destroy existing seeds
Ncr.destroy_all
FoodProduct.destroy_all
PaperProduct.destroy_all
Recipe.destroy_all
Kitchen.destroy_all
Building.destroy_all
Invoice.destroy_all
Product.destroy_all
Vendor.destroy_all

# Vendors
regional = Vendor.create!(name: "Regional Distributors, Inc.")
kecks = Vendor.create!(name: "Keck's Food Service")
palmer = Vendor.create!(name: "Palmer Food Services")

# Products
regional_pizza_boxes = Product.create!(description: "00177 PCA 7\" CORRUGATED STOCK PRINT PIZZA BOX 50/BUNDLE", part_no: "21353", vendor: regional)
regional_pizza_crusts = Product.create!(description: "VILLA ITALIANO 7\" PIZZA CRUSTS (SAMPLE DATA)", part_no: "00001", vendor: regional)
regional_pizza_sauce = Product.create!(description: "MAMA MIA PIZZA SAUCE (SAMPLE DATA)", part_no: "00002", vendor: regional)
regional_mozzarella_cheese = Product.create!(description: "GIOVANNI MOZZARELLA CHEESE (SAMPLE DATA)", part_no: "00003", vendor: regional)

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
bakery = Kitchen.create!(name: "Bakery", building: main_barn)
smokehouse = Kitchen.create!(name: "Smokehouse", building: main_barn)
shakes_and_cakes = Kitchen.create!(name: "Shakes & Cakes", building: food_barn)
pizza_porch = Kitchen.create!(name: "Pizza Porch", building: food_barn)
fresh_grill = Kitchen.create!(name: "Fresh Grill", building: food_barn)
kettle_barn = Kitchen.create!(name: "Kettle Barn", building: corn_barn)

shakeup_truck_kitchen = Kitchen.create!(name: "Shakeup Truck", building: shakeup_truck_building)
smoke_shack_kitchen = Kitchen.create!(name: "Smoke Shack", building: smoke_shack_building)
grill_shack_kitchen = Kitchen.create!(name: "Grill Shack", building: grill_shack_building)

# Recipes 
cheese_pizza_recipe = Recipe.create!(name: "Personal Cheese Pizza", directions: "Here is how to make a Personal Cheese Pizza...", prep_kitchen: pizza_porch)

# Paper Products
box_for_cheese_pizza = PaperProduct.create!(name: "pizza box for Cheese Pizza", product: regional_pizza_boxes, recipe: cheese_pizza_recipe)

# Food Products
cheese_pizza_crust = FoodProduct.create!(name: "pizza crust", product: regional_pizza_crusts, recipe: cheese_pizza_recipe)
cheese_pizza_sauce = FoodProduct.create!(name: "pizza sauce", product: regional_pizza_sauce, recipe: cheese_pizza_recipe)
cheese_pizza_cheese = FoodProduct.create!(name: "mozzarella cheese", product: regional_mozzarella_cheese, recipe: cheese_pizza_recipe)

# NCRs

# Invoices (includes quotes)
