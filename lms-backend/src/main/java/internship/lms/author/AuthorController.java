package internship.lms.author;

import java.util.List;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class AuthorController {
	
	@Autowired 
	private AuthorService authorService;
	
	@RequestMapping(method = RequestMethod.GET, value="/admin/authors")
	public List<Author> getAllAuthors() {
		return authorService.getAllAuthors();
	}
	
	
	@RequestMapping(method = RequestMethod.GET, value="/admin/author")
	public Author getAuthorByName(@RequestParam String name) {
		return authorService.getAuthorByName(name);
	}

	@RequestMapping(method=RequestMethod.POST, value="/admin/author") 
	public void addAuthor(@RequestBody Author author) {
		authorService.addAuthor(author);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/admin/updateauthor")
	public void updateAuthor(@RequestBody Author author) {
		authorService.updateAuthor(author);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/admin/deleteauthor")
	public void deleteAuthor(@RequestParam long id) {
		authorService.deleteAuthor(id);
	}
}
