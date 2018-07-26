package internship.lms.book;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import internship.lms.author.AuthorService;

@Service
public class BookService {
	
	@Autowired
	private BookRepository bookRepository;
	
	@Autowired
	private AuthorService as;
	
	public List<Book> getAllBooks() {
		 List<Book> books = new ArrayList<>();
		 bookRepository.findAll().forEach(books::add);
		 return books;
	}
		
	public List<Book> getBookByName(String name) {
		return bookRepository.findByNameContaining(name);
	}
	
	public Book getOneBookByName(String name) {
		return bookRepository.findByName(name);
	}
	
	public List<Book> getBookByAuthorName(String name) {
		return bookRepository.findByauthorNameContaining(name);
		 
	}

	public void addBook(Book book, long authorId) {
		book.setAuthor(as.getAuthor(authorId));
		bookRepository.save(book);
	}
	
	public void updateBook(Book book, long authorId) {
		book.setAuthor(as.getAuthor(authorId));
		bookRepository.save(book);
	}
	
	public void deleteBook(long id) {
		bookRepository.delete(id);
	}
	
	public Set<String> getGenresOnly() {
	Set<String> genres = new HashSet<>();
	List<Book> boks = this.getAllBooks();
	for(Book b: boks) {
			genres.add(b.getGenre());
		}
	return genres;
	}
	
	public Set<String> getAuthorNamesOnly() {
		Set<String> authorNames = new HashSet<>();
		List<Book> boks = this.getAllBooks();
		for(Book b: boks) {
				authorNames.add(b.getAuthor().getName());
			}
		return authorNames;
		}
	
	public int totalBooks() {
		int num = 0;
		List<Book> books = this.getAllBooks();
		for(Book b: books) {
			num = num+b.getCopies();
		}
		return num;
	}
	

	public long totalUniqueBooks() {
		return bookRepository.count();
	}
	
	public int totalIssuedBooks() {
		int num = 0;
		List<Book> books = this.getAllBooks();
		for(Book b: books) {
			num = num+b.getIcopies();
		}
		return num;
	}
	
	public Set<Book> totalIssuedBooksByAuthor(String name) {
		Set<Book> books = new HashSet<>();
		List<Book> boks = this.getAllBooks();
		for(Book b: boks) {
			if(b.getAuthor().getName().equals(name)) {
				if(b.getIcopies()>0)
					books.add(b);
			}
		}
		return books;
	}
	
	public Set<Book> totalIssuedBooksByBookName(String name) {
		Set<Book> books = new HashSet<>();
		List<Book> boks = this.getAllBooks();
		for(Book b: boks) {
			if(b.getName().equals(name)) {
				if(b.getIcopies()>0)
					books.add(b);
			}
		}
		return books;
	}
	
	public List<Book> getBookByLang(String lang) {
		return bookRepository.findByLangContaining(lang);
	}
	
	public List<Book> getBookByGenre(String genre) {
		return bookRepository.findByGenreContaining(genre);
	}
}
