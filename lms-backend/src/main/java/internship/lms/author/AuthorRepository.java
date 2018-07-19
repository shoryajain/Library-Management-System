package internship.lms.author;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface AuthorRepository extends CrudRepository<Author, Long> {
	
	public Author findByNameContaining(String name);
}
