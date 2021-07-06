class CreateIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.string :quantity
      t.string :storage_temp
      t.float :cook_temp

      t.timestamps
    end
  end
end
