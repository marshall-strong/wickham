class CreateFoodProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :food_products do |t|
      t.string :name
      t.integer :product_id
      t.integer :recipe_id

      t.timestamps
    end
  end
end
