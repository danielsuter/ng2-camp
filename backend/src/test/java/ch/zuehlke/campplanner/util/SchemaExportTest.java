package ch.zuehlke.campplanner.util;

import ch.zuehlke.campplanner.domain.*;
import org.hibernate.cfg.Configuration;
import org.hibernate.cfg.Environment;
import org.hibernate.tool.hbm2ddl.SchemaExport;
import org.junit.Test;
import org.springframework.boot.orm.jpa.hibernate.SpringNamingStrategy;

import java.io.File;


public class SchemaExportTest {

	@Test
	public void generateDdl() throws Exception {
		File outputDir = new File("build/sql");
		outputDir.mkdirs();

		generateDdlSql("org.hibernate.dialect.HSQLDialect", "build/sql/hsql.sql");
		generateDdlSql("org.hibernate.dialect.PostgreSQLDialect", "build/sql/postgres.sql");
	}

	private void generateDdlSql(String dialect, String filename) {
		Configuration configuration = new Configuration();
		configuration.setProperty(Environment.DIALECT, dialect);
		configuration.addAnnotatedClass(Hotel.class);
		configuration.addAnnotatedClass(Camp.class);
		configuration.addAnnotatedClass(MailTemplate.class);
		configuration.addAnnotatedClass(Offer.class);
		configuration.addAnnotatedClass(OfferRequest.class);
		configuration.addAnnotatedClass(Rating.class);


		configuration.setNamingStrategy(new SpringNamingStrategy());

		SchemaExport schemaExport = new SchemaExport(configuration);
		schemaExport.setDelimiter(";");
		schemaExport.setOutputFile(filename);

		boolean consolePrint = false;
		boolean exportInDatabase = false;
		schemaExport.create(consolePrint, exportInDatabase);
	}
}