package ch.zuehlke.campplanner.security;


import ch.zuehlke.campplanner.security.jwt.AuthService;
import ch.zuehlke.campplanner.security.jwt.JwtFilter;
import ch.zuehlke.campplanner.security.jwt.UserService;
import jersey.repackaged.com.google.common.collect.Sets;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
@EnableWebSecurity
@Order(2)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

	private final UserService userService;
	private final AuthService authService;

	public SecurityConfig() {
		super(true);
		this.userService = new UserService();
		this.authService = new AuthService("the ng2-camp secret", userService);

		SimpleGrantedAuthority userRole = new SimpleGrantedAuthority("user");
		SimpleGrantedAuthority adminRole = new SimpleGrantedAuthority("admin");

		userService.addUser(new User("user", "password", Sets.newHashSet(userRole)));
		userService.addUser(new User("admin", "password", Sets.newHashSet(userRole, adminRole)));
	}

	@Override
	public void configure(WebSecurity web) throws Exception {
		web.ignoring().antMatchers("/");
		web.ignoring().antMatchers("/rest/**/*");
		web.ignoring().antMatchers("/auth/login");
		web.ignoring().antMatchers("/favicon.ico");
		web.ignoring().antMatchers("/**/*.html");
		web.ignoring().antMatchers("/**/*.css");
		web.ignoring().antMatchers("/**/*.js");
		web.ignoring().antMatchers("/**/*.png");
	}

	@Bean
	public WebMvcConfigurer corsConfigurer() {
		return new WebMvcConfigurerAdapter() {
			@Override
			public void addCorsMappings(CorsRegistry registry) {
				registry.addMapping("/**").allowedOrigins("http://localhost:3000");
			}
		};
	}

	@Override
	protected void configure(HttpSecurity http) throws Exception {
		http.csrf().disable();
		http.authorizeRequests().anyRequest().authenticated();
		http.addFilterBefore(new JwtFilter(authService), UsernamePasswordAuthenticationFilter.class);
	}

	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		auth.userDetailsService(userService).passwordEncoder(new BCryptPasswordEncoder());
	}

	@Bean
	@Override
	public AuthenticationManager authenticationManagerBean() throws Exception {
		return super.authenticationManagerBean();
	}

	@Override
	public UserService userDetailsService() {
		return userService;
	}

	@Bean
	public AuthService authService() {
		return authService;
	}
}
