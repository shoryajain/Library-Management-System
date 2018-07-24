package internship.lms.user;

import java.util.List;



import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import internship.lms.book.Book;


@RestController
@CrossOrigin
public class UserController {
	
	@Autowired 
	private UserService userService;
	
	@RequestMapping(method = RequestMethod.GET, value="/admin/users")
	public List<User> getAllUsers() {
		return userService.getAllUsers();
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/usercheck") 
	public boolean checkUserName(@RequestParam String uname) {
		return userService.checkUserUname(uname);
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/userforgetpass")
	public boolean checkUserPno(@RequestParam String pno) {
		Long pn = Long.parseLong(pno);
		return userService.checkUserPno(pn);
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/userforgetpass/true")
	public User getUnameAndPass(@RequestParam String pno) {
		Long pn = Long.parseLong(pno);
		return userService.getUserByPno(pn);
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/admin/user")
	public User getUser(@RequestParam String uname) {
		return userService.getUser(uname);
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/user/issuedbooks")
	public List<Book> getBooks(@RequestParam String uname) {
		return userService.getBooks(uname);
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/role")
	public User getUserRole(@RequestParam String uname) {
		return userService.getUser(uname);
	}
	
	@RequestMapping(method = RequestMethod.GET, value="/authentication")
	public boolean authentication(@RequestParam(required=true) String username,@RequestParam(required=true) String password) {
		return userService.authentication(username,password);
	}
	
	@PostMapping("/adduser") 
	public void addUser(@RequestBody User user) {
		userService.addUser(user);
	} 
	
	@RequestMapping(method=RequestMethod.PUT, value="/user/newbook") 
	public boolean issueBook(@RequestParam String bname, @RequestParam String uname) {
		return userService.issueBook(bname,uname);
	} 
	
	@RequestMapping(method=RequestMethod.PUT, value="/updateuser")
	public void updateUser(@RequestParam String uname, @RequestBody User user) {
		userService.updateUser(user);
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/admin/role")
	public void updateRole(@RequestParam String role, @RequestParam String username) {
		userService.updateRole(role, username);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/deleteuser")
	public void deleteUser(@RequestParam String uname) {
		userService.deleteUser(uname);
	}
}

