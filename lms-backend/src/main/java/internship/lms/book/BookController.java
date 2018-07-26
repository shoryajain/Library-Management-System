package internship.lms.book;

import java.util.List;
import java.util.Set;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin
public class BookController {

	@Autowired 
	private BookService bookService;
	
	@RequestMapping(method = RequestMethod.GET, value="/admin/books")
	public List<Book> getAllBooks() {
		return bookService.getAllBooks();
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/book/name/search")
	public List<Book> getBookByName(@RequestParam String name) {
		return bookService.getBookByName(name);
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/book/name")
	public Book getOneBookByName(@RequestParam String name) {
		return bookService.getOneBookByName(name);
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/book/author")
	public List<Book> getBookByAuthorName(@RequestParam String name) {
		return bookService.getBookByAuthorName(name);
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/book/lang")
	public List<Book> getBookByLang(@RequestParam String lang) {
		return bookService.getBookByLang(lang);
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/book/genre")
	public List<Book> getBookByGenre(@RequestParam String genre) {
		return bookService.getBookByGenre(genre);
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/books/genres")
	public Set<String> getGenresOnly() {
		return bookService.getGenresOnly();
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/books/authors")
	public Set<String> getAuthorNamesOnly() {
		return bookService.getAuthorNamesOnly();
	}

	@RequestMapping(method = RequestMethod.GET, value="/admin/books/total")
	public int totalBooks() {
		return bookService.totalBooks();
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/admin/books/total/unique")
	public long totalUniqueBooks() {
		return bookService.totalUniqueBooks();
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/admin/books/total/issued")
	public int totalIsseudBooks() {
		return bookService.totalIssuedBooks();
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/admin/books/total/issued/author")
	public Set<Book> totalIssuedBooksByAuthor(@RequestParam String name) {
		return bookService.totalIssuedBooksByAuthor(name);
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/admin/books/total/issued/book")
	public Set<Book> totalIssuedBooksByBookName(@RequestParam String name) {
		return bookService.totalIssuedBooksByBookName(name);
	}
	
	@RequestMapping(method=RequestMethod.POST, value="/admin/addbook/{authorId}") 
	public void addBook(@RequestBody Book book, @PathVariable Long authorId) {
		bookService.addBook(book, authorId);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/admin/updatebook/{authorId}")
	public void updateBook(@RequestBody Book book, @PathVariable Long authorId) {
		bookService.updateBook(book, authorId);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/admin/deletebook")
	public void deleteBook(@RequestParam long id) {
		bookService.deleteBook(id);
	}
}
