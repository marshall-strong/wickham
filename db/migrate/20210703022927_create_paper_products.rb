class CreatePaperProducts < ActiveRecord::Migration[6.1]
  def change
    create_table :paper_products do |t|
      t.string :name

      t.timestamps
    end
  end
end
