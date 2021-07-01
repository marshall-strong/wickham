class CreateProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :products do |t|
      t.string :order_qty
      t.string :ship_qty
      t.string :description
      t.string :part_no
      t.string :tax
      t.string :unit_price
      t.string :ext_prc

      t.timestamps
    end
  end
end
