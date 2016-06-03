package ch.zuehlke.campplanner.security.jwt;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.stereotype.Service;

import javax.servlet.http.HttpServletRequest;
import java.util.Base64;
import java.util.Date;
import java.util.UUID;
import java.util.concurrent.TimeUnit;

@Service
public class AuthService {

	private static final String AUTH_HEADER_NAME = "Authorization";

	private final String secret;
	private final UserService userService;

	public AuthService(String secret, UserService userService) {
		this.secret = Base64.getEncoder().encodeToString(secret.getBytes());
		this.userService = userService;
	}

	public String checkCredentialsAndCreateToken(String username, String password) {
		User user = userService.loadUserByUsername(username);
		if (!user.getPassword().equals(password)) {
			throw new BadCredentialsException("wrong password");
		}
		return createTokenForUser(user);
	}

	private User getUserFromToken(String token) {
		return userService.loadUserByUsername(getUsernameFromToken(token));
	}

	Authentication getAuthentication(HttpServletRequest request) {
		final String header = request.getHeader(AUTH_HEADER_NAME);
		if (header == null || !header.startsWith("Bearer ")) {
			throw new MalformedJwtException("Malformed or missing Authorization header");
		}
		final String token = header.substring(7);
		final User user = getUserFromToken(token);
		if (user != null) {
			return new UserAuthentication(user);
		}
		return null;
	}

	private String getUsernameFromToken(String token) {
		return Jwts.parser()
				.setSigningKey(secret)
				.parseClaimsJws(token)
				.getBody()
				.getSubject();
	}

	private String createTokenForUser(User user) {
		Date now = new Date();
		Date expiration = new Date(now.getTime() + TimeUnit.DAYS.toMillis(30));
		return Jwts.builder()
				.setId(UUID.randomUUID().toString())
				.setSubject(user.getUsername())
				.setIssuedAt(now)
				.setExpiration(expiration)
				.signWith(SignatureAlgorithm.HS512, secret)
				.compact();
	}
}
