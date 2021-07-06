class CreateFoodProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :food_products do |t|
      t.string :name

      t.timestamps
    end
  end
end
