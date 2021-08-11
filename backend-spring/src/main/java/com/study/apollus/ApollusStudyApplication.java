package com.study.apollus;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.study.entidades.Disco;
import com.study.entidades.Pessoa;
import com.study.services.DiscoService;
import com.study.services.PessoaService;

import springfox.documentation.builders.PathSelectors;
import springfox.documentation.builders.RequestHandlerSelectors;
import springfox.documentation.spi.DocumentationType;
import springfox.documentation.spring.web.plugins.Docket;
import springfox.documentation.swagger2.annotations.EnableSwagger2;

@SpringBootApplication
@ComponentScan(basePackages = {"com.study.services"})
@EntityScan("com.study.entidades")
@RestController
public class ApollusStudyApplication {
	
	@Autowired	
	PessoaService pessoaService;
	
	@Autowired	
	DiscoService discoService;
	
	public static void main(String[] args) {
		SpringApplication.run(ApollusStudyApplication.class, args);
	}
		
	@Configuration
	@EnableSwagger2
	public class SwaggerConfig {
	    @Bean
	    public Docket api() {
	        return new Docket(DocumentationType.SWAGGER_2)
	          .select()
	          .apis(RequestHandlerSelectors.any())
	          .paths(PathSelectors.any())
	          .build();
	    }
	}
	
	@GetMapping("/hello")
	public String hello(@RequestParam(value = "name", defaultValue = "World") String name) {
		return String.format("Hello %s!", name);
	}
	
	@RequestMapping(value="criar_pessoa", method = RequestMethod.POST)
	public void criarPessoa(@RequestBody Pessoa pessoa) {
		try {
			pessoaService.save(pessoa);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@RequestMapping(value="criar_disco", method = RequestMethod.POST)
	public void criarDisco(@RequestBody Disco disco) {
		try {
			discoService.save(disco);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
	
	@RequestMapping(value = "/excluir_disco/{id}", method = RequestMethod.DELETE)
	public String excluirDisco(@PathVariable(value="id") Long id) {
		try {
			discoService.remove(new Disco(id));
		} catch (Exception e) {
			e.printStackTrace();
		}
		return "OK";
	}
	
	@RequestMapping(value = "/listar_discos/", method = RequestMethod.GET)
	public ArrayList<Disco> listarDiscos() {
		try {
			return discoService.listarDiscos();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

}
