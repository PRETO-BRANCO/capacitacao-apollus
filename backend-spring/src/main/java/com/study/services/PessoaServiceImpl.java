package com.study.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Service;

import com.study.entidades.Pessoa;
import com.study.repository.PessoaRepositorio;

@Service
@EnableJpaRepositories("com.study.repository")
public class PessoaServiceImpl implements PessoaService {
	
	@Autowired	
	PessoaRepositorio pessoaRepositorio;

	@Override
	public Pessoa save(Pessoa pessoa) {
		try {
			return pessoaRepositorio.save(pessoa);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return pessoa;
	}

}
