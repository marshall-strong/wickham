class CreateMeasurements < ActiveRecord::Migration[6.1]
  def change
    create_table :measurements do |t|
      t.float :quantity
      t.string :unit

      t.timestamps
    end
  end
end
