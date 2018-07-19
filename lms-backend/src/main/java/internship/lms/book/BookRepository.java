package internship.lms.book;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BookRepository extends CrudRepository<Book, Long> {
	public Book findByName(String name);
	
	public List<Book> findByNameContaining(String name);
	
	public List<Book> findByauthorNameContaining(String authorName);
	
	public List<Book> findByLangContaining(String lang);
	
	public List<Book> findByGenreContaining(String genre);
}
