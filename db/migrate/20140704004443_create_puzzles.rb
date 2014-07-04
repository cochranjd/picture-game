class CreatePuzzles < ActiveRecord::Migration
  def change
    create_table :puzzles do |t|
      t.string      :title
      t.string      :puzzle_image_path

      t.timestamps
    end
  end
end
