class CreateRecipes < ActiveRecord::Migration[6.1]
  def change
    create_table :recipes do |t|
      t.string :name
      t.string :directions
      t.integer :prep_kitchen_id

      t.timestamps
    end
  end
end
