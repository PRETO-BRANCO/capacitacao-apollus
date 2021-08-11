package com.study.repository;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.study.entidades.Disco;

@Repository
public interface DiscoRepositorio extends JpaRepository<Disco, Long> {

}
