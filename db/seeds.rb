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
shakeup_truck = Building.create!(name: "Shakeup Truck")
smoke_shack = Building.create!(name: "Smoke Shack")
grill_shack = Building.create!(name: "Grill Shack")

# Kitchens
bakery = Kitchen.create!(name: "Bakery")
smokehouse = Kitchen.create!(name: "Smokehouse")
shakes_and_cakes = Kitchen.create!(name: "Shakes & Cakes")
pizza_porch = Kitchen.create!(name: "Pizza Porch")
fresh_grill = Kitchen.create!(name: "Fresh Grill")
kettle_barn = Kitchen.create!(name: "Kettle Barn")
shakeup_truck_kitchen = Kitchen.create!(name: "Shakeup Truck")
smoke_shack_kitchen = Kitchen.create!(name: "Smoke Shack")
grill_shack_kitchen = Kitchen.create!(name: "Grill Shack")

# Recipes 
cheese_pizza = Recipe.create!(name: "Personal Cheese Pizza", directions: "Here is how to make a Personal Cheese Pizza...")

# Paper Products
box_for_cheese_pizza = PaperProduct.create!(name: "pizza box for Cheese Pizza")

# Food Products
cheese_pizza_crust = FoodProduct.create!(name: "pizza crust")
cheese_pizza_sauce = FoodProduct.create!(name: "pizza sauce")
cheese_pizza_cheese = FoodProduct.create!(name: "mozzarella cheese")

# NCRs

# Invoices (includes quotes)
