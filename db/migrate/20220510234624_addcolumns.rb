class Addcolumns < ActiveRecord::Migration[6.1]
  def change
    add_column :jobs, :logo, :string
    add_column :jobs, :location, :string
    add_column :jobs, :company, :string
  end
end
