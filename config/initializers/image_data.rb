if ActiveRecord::Base.connection.table_exists? 'puzzles'
    Dir[File.join(Rails.root, 'public', 'images', '*')].each do |file|
       title = File.basename(file, '.*').gsub( '_', ' ' ).split.map(&:capitalize).join(' ');
       image_path = "images/#{File.basename(file)}";
       Puzzle.create(:title => title, :puzzle_image_path => image_path) if !Puzzle.exists?(:title => title)
    end
end
