class CreateKitchens < ActiveRecord::Migration[6.1]
  def change
    create_table :kitchens do |t|
      t.string :name
      t.integer :building_id

      t.timestamps
    end
  end
end
