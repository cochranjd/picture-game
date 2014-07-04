object false
node :puzzles do
    @puzzles.map do |puzzle|
        {:id => puzzle.id, :title => puzzle.title, :puzzle_image_path => puzzle.puzzle_image_path}
    end
end
