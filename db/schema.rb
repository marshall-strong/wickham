# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_07_20_005755) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "buildings", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "food_products", force: :cascade do |t|
    t.string "name"
    t.integer "product_id"
    t.integer "recipe_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "invoices", force: :cascade do |t|
    t.string "invoice_date"
    t.string "invoice_number"
    t.string "bill_to"
    t.string "ship_to"
    t.string "customer_number"
    t.string "customer_order_number"
    t.string "release_number"
    t.string "ordered_by"
    t.string "salesperson"
    t.string "csr"
    t.string "ship_via"
    t.string "terms"
    t.string "ship_date"
    t.string "order_date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "kitchens", force: :cascade do |t|
    t.string "name"
    t.integer "building_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "ncr_items", force: :cascade do |t|
    t.integer "external_id"
    t.string "category"
    t.string "item_name"
    t.string "description"
    t.string "variation_types"
    t.string "variations"
    t.string "barcode"
    t.string "track_inventory"
    t.string "prompt_for_price"
    t.float "unit_cost"
    t.float "price"
    t.string "sold_by_weight_measure"
    t.string "tax_category"
    t.string "available_for_sale_on_pos"
    t.string "available_for_sale_online"
    t.string "online_item_name"
    t.float "package_cost"
    t.integer "units_per_package"
    t.string "primary_vendor"
    t.integer "units_on_hand"
    t.string "modified_by_1"
    t.integer "modifier_group_1_external_id"
    t.string "modified_by_2"
    t.integer "modifier_group_2_external_id"
    t.string "modified_by_3"
    t.integer "modifier_group_3_external_id"
    t.string "modified_by_4"
    t.integer "modifier_group_4_external_id"
    t.string "modified_by_5"
    t.integer "modifier_group_5_external_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "paper_products", force: :cascade do |t|
    t.string "name"
    t.integer "product_id"
    t.integer "recipe_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "products", force: :cascade do |t|
    t.string "name"
    t.string "description"
    t.string "part_no"
    t.integer "vendor_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "recipes", force: :cascade do |t|
    t.string "name"
    t.string "directions"
    t.integer "prep_kitchen_id"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "vendors", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

end
