package com.study.services;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Service;

import com.study.entidades.Disco;
import com.study.repository.DiscoRepositorio;
import com.study.repository.PessoaRepositorio;

@Service
@EnableJpaRepositories("com.study.repository")
public class DiscoServiceImpl implements DiscoService {
	
	@Autowired	
	PessoaRepositorio pessoaRepositorio;
	
	@Autowired	
	DiscoRepositorio discoRepositorio;

	@Override
	public Disco save(Disco disco) {
		try {
			return discoRepositorio.save(disco);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return disco;
	}
	
	@Override
	public void remove(Disco disco) {
		try {
			discoRepositorio.delete(disco);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	@Override
	public ArrayList<Disco> listarDiscos() {
		try {
			return (ArrayList<Disco>) discoRepositorio.findAll();
		} catch (Exception e) {
			e.printStackTrace();
		}
		return null;
	}

}
