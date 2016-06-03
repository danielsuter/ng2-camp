package ch.zuehlke.campplanner.controller;

import ch.zuehlke.campplanner.security.jwt.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.ServletException;


@RestController
@RequestMapping("/auth")
public class AuthController {

	private static class UserLogin {
		public String name;
		public String password;
	}

	private final AuthService authService;

	@Autowired
	public AuthController(AuthService authService) {
		this.authService = authService;
	}

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public String login(@RequestBody final UserLogin login) throws ServletException {
		return authService.checkCredentialsAndCreateToken(login.name, login.password);
	}

	@RequestMapping(value = "/whoami", method = RequestMethod.GET)
	public String whoami() {
		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
		return auth.getName();
	}

	@RequestMapping(path = "/logout", method = RequestMethod.GET)
	public void logout() {
//		Authentication auth = SecurityContextHolder.getContext().getAuthentication();
	}
}
