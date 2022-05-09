class CreateJobs < ActiveRecord::Migration[6.1]
  def change
    create_table :jobs do |t|
      t.string :title
      t.integer :salary
      t.string :description
      t.string :link

      t.timestamps
    end
  end
end
