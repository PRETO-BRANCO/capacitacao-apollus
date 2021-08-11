package com.study.services;

import java.util.ArrayList;

import com.study.entidades.Disco;

public interface DiscoService {
	
	Disco save(Disco disco);
	
	void remove(Disco disco);
	
	ArrayList<Disco> listarDiscos();

}
