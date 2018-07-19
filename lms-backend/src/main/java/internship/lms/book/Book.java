package internship.lms.book;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import internship.lms.author.Author;

@Entity
@Table(name = "book")
public class Book {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	private String name;
	private String lang;
	private String isbn;
	private String genre;
	private int edition;
	private int copies;
	private int icopies;
	
	@ManyToOne
	@JoinColumn(name = "author_id", nullable=false)
	private Author author;
	
	public Book( ) {
		super();
		this.icopies = 0;
	}
	
	public Book(int id, String name, String lang, String isbn, String genre, int edition, int copies, Author author) {
		super();
		this.id = id;
		this.name = name;
		this.lang = lang;
		this.isbn = isbn;
		this.genre = genre;
		this.edition = edition;
		this.copies = copies;
		this.icopies = 0;
		this.author = author;
	}
	
	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getLang() {
		return lang;
	}

	public void setLang(String lang) {
		this.lang = lang;
	}

	public String getIsbn() {
		return isbn;
	}

	public void setIsbn(String isbn) {
		this.isbn = isbn;
	}

	public String getGenre() {
		return genre;
	}

	public void setGenre(String genre) {
		this.genre = genre;
	}

	public int getEdition() {
		return edition;
	}

	public void setEdition(int edition) {
		this.edition = edition;
	}

	public int getCopies() {
		return copies;
	}

	public void setCopies(int copies) {
		this.copies = copies;
	}

	public int getIcopies() {
		return icopies;
	}

	public void setIcopies(int icopies) {
		this.icopies = icopies;
	}

	public Author getAuthor() {
		return author;
	}

	public void setAuthor(Author author) {
		this.author = author;
	}
	
	public void issueCopy() {
		this.icopies++;
	}
}
