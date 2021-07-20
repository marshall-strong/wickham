class CreateNcrItems < ActiveRecord::Migration[6.1]
  def change
    create_table :ncr_items do |t|
      t.integer :external_id
      t.string :category
      t.string :item_name
      t.string :description
      t.string :variation_types
      t.string :variations
      t.string :barcode
      t.string :track_inventory
      t.string :prompt_for_price
      t.float :unit_cost
      t.float :price
      t.string :sold_by_weight_measure
      t.string :tax_category
      t.string :available_for_sale_on_pos
      t.string :available_for_sale_online
      t.string :online_item_name
      t.float :package_cost
      t.integer :units_per_package
      t.string :primary_vendor
      t.integer :units_on_hand
      t.string :modified_by_1
      t.integer :modifier_group_1_external_id
      t.string :modified_by_2
      t.integer :modifier_group_2_external_id
      t.string :modified_by_3
      t.integer :modifier_group_3_external_id
      t.string :modified_by_4
      t.integer :modifier_group_4_external_id
      t.string :modified_by_5
      t.integer :modifier_group_5_external_id

      t.timestamps
    end
  end
end
