# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Destroy existing seeds
NcrItem.destroy_all
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
regional_pizza_boxes = Product.create!(name: "pizza boxes", description: "00177 PCA 7\" CORRUGATED STOCK PRINT PIZZA BOX 50/BUNDLE", part_no: "21353", vendor: regional)
regional_pizza_crusts = Product.create!(name: "pizza crust", description: "VILLA ITALIANO 7\" PIZZA CRUSTS (SAMPLE DATA)", part_no: "00001", vendor: regional)
regional_pizza_sauce = Product.create!(name: "pizza sauce", description: "MAMA MIA PIZZA SAUCE (SAMPLE DATA)", part_no: "00002", vendor: regional)
regional_mozzarella_cheese = Product.create!(name: "mozzarella cheese", description: "GIOVANNI MOZZARELLA CHEESE (SAMPLE DATA)", part_no: "00003", vendor: regional)

# Invoices
sample_regional_invoice = Invoice.create!(invoice_date: "July 26, 2021", invoice_number: "0001", ordered_by: "Paige Wickham", salesperson: "Rino", vendor_id: regional.id)

# Buildings
main_barn = Building.create!(name: "Main Barn")
food_barn = Building.create!(name: "Food Barn")
corn_barn = Building.create!(name: "Corn Barn")
shade_barn = Building.create!(name: "Shade Barn")
csa_barn = Building.create!(name: "CSA Barn")
shakeup_truck_building = Building.create!(name: "Shakeup Truck")
smoke_shack_building = Building.create!(name: "Smoke Shack")
grill_shack_building = Building.create!(name: "Grill Shack")
the_shop = Building.create!(name: "The Shop")
gator_garage = Building.create!(name: "Gator Garage")
root_cellar = Building.create!(name: "Root Cellar")
red_shed = Building.create!(name: "Red Shed")
# dicks_shop = Building.create!(name: "Dick's Shop")
# dicks_garage = Building.create! (name: "Dick's Garage")

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

# Ncr Items

cheese_pizza_only_ncr = NcrItem.create!(external_id: 2326805, category: "Pizza Porch", item_name: "Cheese Pizza Only", description: nil, variation_types: nil, variations: nil, barcode: nil, track_inventory: "Y", prompt_for_price: "N", unit_cost: nil, price: 8.95, sold_by_weight_measure: "N", tax_category: "8%", available_for_sale_on_pos: "Y", available_for_sale_online: nil, online_item_name: nil, package_cost: nil, units_per_package: 1, primary_vendor: nil, units_on_hand: nil, modified_by_1: nil, modifier_group_1_external_id: nil, modified_by_2: nil, modifier_group_2_external_id: nil, modified_by_3: nil, modifier_group_3_external_id: nil, modified_by_4: nil, modifier_group_4_external_id: nil, modified_by_5: nil, modifier_group_5_external_id: nil)

# external_id: 2326805,
# category: "Pizza Porch",
# item_name: "Cheese Pizza Only",
# description: nil,
# variation_types: nil,
# variations: nil,
# barcode: nil,
# track_inventory: "Y",
# prompt_for_price: "N",
# unit_cost: nil,
# price: 8.95,
# sold_by_weight_measure: "N",
# tax_category: "8%",
# available_for_sale_on_pos: "Y",
# available_for_sale_online: nil,
# online_item_name: nil,
# package_cost: nil,
# units_per_package: 1,
# primary_vendor: nil,
# units_on_hand: nil,
# modified_by_1: nil,
# modifier_group_1_external_id: nil,
# modified_by_2: nil,
# modifier_group_2_external_id: nil,
# modified_by_3: nil,
# modifier_group_3_external_id: nil,
# modified_by_4: nil,
# modifier_group_4_external_id: nil,
# modified_by_5: nil,
# modifier_group_5_external_id: nil,

# Invoices (includes quotes)
